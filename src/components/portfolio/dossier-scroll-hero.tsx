"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { startTransition, useEffect, useRef, useState } from "react";

import type { HomeContent, ScrollSceneStage } from "@/content/types";

import { PillCta } from "./pill-cta";
import styles from "./dossier-scroll-hero.module.css";

const DESKTOP_MIN_WIDTH = 960;
const INITIAL_FRAME_PRELOAD = 12;
const EMPTY_STAGES: ScrollSceneStage[] = [];

type DossierScrollHeroProps = {
  hero: HomeContent["hero"];
};

type FrameManifest = {
  frameCount: number;
  frames: string[];
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getActiveStageIndex(stages: ScrollSceneStage[], progress: number) {
  const nextIndex = stages.findIndex((stage, index) => {
    const isLastStage = index === stages.length - 1;
    return progress >= stage.start && (isLastStage || progress < stage.end);
  });

  return nextIndex === -1 ? stages.length - 1 : nextIndex;
}

function formatStageRange(stage: ScrollSceneStage) {
  return `${Math.round(stage.start * 100)}-${Math.round(stage.end * 100)}%`;
}

function isFrameManifest(value: unknown): value is FrameManifest {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<FrameManifest>;
  return (
    typeof candidate.frameCount === "number" &&
    Array.isArray(candidate.frames) &&
    candidate.frames.every((frame) => typeof frame === "string")
  );
}

export function DossierScrollHero({ hero }: DossierScrollHeroProps) {
  const stages = hero.scene.stages ?? EMPTY_STAGES;
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const frameUrlsRef = useRef<string[]>([]);
  const framesRef = useRef<(HTMLImageElement | null)[]>([]);
  const loadedFramesRef = useRef<Set<number>>(new Set());
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(-1);
  const activeStageRef = useRef(0);
  const interactiveEnabledRef = useRef(false);
  const progressiveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressiveIdleRef = useRef<number | null>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [interactiveAllowed, setInteractiveAllowed] = useState(false);
  const [interactiveReady, setInteractiveReady] = useState(false);

  const activeStage = stages[activeStageIndex] ?? null;
  const finalStageIndex = stages.length - 1;
  const scrollMode = interactiveAllowed && interactiveReady ? "interactive" : "poster";
  const posterSrc =
    scrollMode === "poster" && activeStageIndex === finalStageIndex && hero.scene.posterEnd
      ? hero.scene.posterEnd
      : hero.scene.poster;
  const rootStyle = {
    ["--dossier-pin-range" as string]: `${hero.scene.pinRange}`,
  } as CSSProperties;

  const drawNearestFrame = (targetIndex: number) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;

    if (!canvas || !context || frameUrlsRef.current.length === 0) {
      return false;
    }

    let resolvedIndex = -1;
    let frame: HTMLImageElement | null = null;

    if (loadedFramesRef.current.has(targetIndex)) {
      resolvedIndex = targetIndex;
      frame = framesRef.current[targetIndex];
    } else {
      for (let delta = 1; delta < frameUrlsRef.current.length; delta += 1) {
        const lower = targetIndex - delta;
        const upper = targetIndex + delta;

        if (lower >= 0 && loadedFramesRef.current.has(lower)) {
          resolvedIndex = lower;
          frame = framesRef.current[lower];
          break;
        }

        if (upper < frameUrlsRef.current.length && loadedFramesRef.current.has(upper)) {
          resolvedIndex = upper;
          frame = framesRef.current[upper];
          break;
        }
      }
    }

    if (!frame || resolvedIndex === -1 || currentFrameRef.current === resolvedIndex) {
      return Boolean(frame);
    }

    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(frame, 0, 0, canvas.width, canvas.height);
    context.restore();

    currentFrameRef.current = resolvedIndex;
    return true;
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMode = () => {
      const nextInteractiveAllowed = !mediaQuery.matches && window.innerWidth >= DESKTOP_MIN_WIDTH;
      interactiveEnabledRef.current = nextInteractiveAllowed;
      setInteractiveAllowed(nextInteractiveAllowed);

      if (!nextInteractiveAllowed) {
        setInteractiveReady(false);
      }
    };

    updateMode();
    mediaQuery.addEventListener("change", updateMode);
    window.addEventListener("resize", updateMode);

    return () => {
      mediaQuery.removeEventListener("change", updateMode);
      window.removeEventListener("resize", updateMode);
    };
  }, []);

  useEffect(() => {
    const media = mediaRef.current;
    const canvas = canvasRef.current;

    if (!media || !canvas || typeof window === "undefined") {
      return;
    }

    const updateCanvasSize = () => {
      const rect = media.getBoundingClientRect();
      const context = canvas.getContext("2d");

      if (!context) {
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      contextRef.current = context;
      currentFrameRef.current = -1;
      drawNearestFrame(targetFrameRef.current);
    };

    const observer = new ResizeObserver(() => {
      updateCanvasSize();
    });

    observer.observe(media);
    updateCanvasSize();

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!interactiveAllowed || !hero.scene.sequence || typeof window === "undefined") {
      frameUrlsRef.current = [];
      framesRef.current = [];
      loadedFramesRef.current = new Set();
      targetFrameRef.current = 0;
      currentFrameRef.current = -1;
      return;
    }

    const sequence = hero.scene.sequence;
    let cancelled = false;
    let eagerLoadedCount = 0;
    let interactiveActivated = false;
    const controller = new AbortController();

    const cancelProgressiveLoading = () => {
      if (progressiveTimerRef.current !== null) {
        window.clearTimeout(progressiveTimerRef.current);
        progressiveTimerRef.current = null;
      }

      if (progressiveIdleRef.current !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(progressiveIdleRef.current);
        progressiveIdleRef.current = null;
      }
    };

    const loadFrame = (index: number, eager: boolean) => {
      if (loadedFramesRef.current.has(index) || framesRef.current[index]) {
        return;
      }

      const frameUrl = frameUrlsRef.current[index];
      if (!frameUrl) {
        return;
      }

      const image = new window.Image();
      image.decoding = "async";
      image.loading = eager ? "eager" : "lazy";
      image.src = frameUrl;

      image.onload = () => {
        if (cancelled) {
          return;
        }

        framesRef.current[index] = image;
        loadedFramesRef.current.add(index);

        if (eager && !interactiveActivated) {
          eagerLoadedCount += 1;
          if (eagerLoadedCount >= Math.min(INITIAL_FRAME_PRELOAD, frameUrlsRef.current.length)) {
            interactiveActivated = true;
            setInteractiveReady(true);
          }
        }

        if (index === 0 || index === targetFrameRef.current) {
          drawNearestFrame(targetFrameRef.current);
        }
      };
    };

    const scheduleProgressiveLoading = (startIndex: number) => {
      const loadNextBatch = () => {
        if (cancelled) {
          return;
        }

        const batchSize = 4;
        const endIndex = Math.min(startIndex + batchSize, frameUrlsRef.current.length);

        for (let index = startIndex; index < endIndex; index += 1) {
          loadFrame(index, false);
        }

        if (endIndex >= frameUrlsRef.current.length) {
          return;
        }

        if ("requestIdleCallback" in window) {
          progressiveIdleRef.current = window.requestIdleCallback(() => {
            scheduleProgressiveLoading(endIndex);
          }, { timeout: 300 });
          return;
        }

        progressiveTimerRef.current = globalThis.setTimeout(() => {
          scheduleProgressiveLoading(endIndex);
        }, 100);
      };

      loadNextBatch();
    };

    fetch(sequence.manifest, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load frame manifest: ${response.status}`);
        }

        return response.json();
      })
      .then((manifest) => {
        if (cancelled || !isFrameManifest(manifest)) {
          return;
        }

        frameUrlsRef.current = manifest.frames.map((frameName) => `${sequence.framesDir}/${frameName}`);
        framesRef.current = new Array(frameUrlsRef.current.length).fill(null);
        loadedFramesRef.current = new Set();
        targetFrameRef.current = 0;
        currentFrameRef.current = -1;

        const eagerFrameCount = Math.min(INITIAL_FRAME_PRELOAD, frameUrlsRef.current.length);

        for (let index = 0; index < eagerFrameCount; index += 1) {
          loadFrame(index, true);
        }

        scheduleProgressiveLoading(eagerFrameCount);
      })
      .catch(() => {
        if (!cancelled) {
          setInteractiveReady(false);
        }
      });

    return () => {
      cancelled = true;
      controller.abort();
      cancelProgressiveLoading();
    };
  }, [hero.scene.sequence, interactiveAllowed]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || stages.length === 0 || typeof window === "undefined") {
      return;
    }

    let animationFrame = 0;

    const updateFromScroll = () => {
      animationFrame = 0;

      const scrollRange = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = clamp(-section.getBoundingClientRect().top / scrollRange, 0, 1);
      const nextStageIndex = getActiveStageIndex(stages, progress);

      if (nextStageIndex !== activeStageRef.current) {
        activeStageRef.current = nextStageIndex;
        startTransition(() => {
          setActiveStageIndex(nextStageIndex);
        });
      }

      if (interactiveEnabledRef.current && frameUrlsRef.current.length > 0) {
        const nextFrameIndex = Math.round(progress * (frameUrlsRef.current.length - 1));

        if (nextFrameIndex !== targetFrameRef.current) {
          targetFrameRef.current = nextFrameIndex;
          drawNearestFrame(nextFrameIndex);
        }
      }
    };

    const queueUpdate = () => {
      if (animationFrame !== 0) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [stages]);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      style={rootStyle}
      data-home-hero="true"
      data-dossier-hero="true"
      data-dossier-stage={activeStage?.label}
    >
      <div className={styles.sticky}>
        <div className={styles.copyColumn}>
          <div className={styles.copySurface}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <p className={styles.positioning}>{hero.positioning}</p>

            <div className={styles.headlineBlock}>
              <h1 className={styles.title} aria-label={hero.accessibleTitle}>
                {hero.title}
              </h1>
              <p className={styles.stageLead}>{activeStage?.copy ?? hero.description}</p>
              <p className={styles.description}>{hero.description}</p>
            </div>

            <div
              className={styles.actions}
              data-dossier-cta-emphasis={activeStageIndex === finalStageIndex ? "final" : "default"}
            >
              {hero.ctas.map((cta) => (
                <PillCta
                  key={cta.label}
                  href={cta.href}
                  variant={cta.variant}
                  dataPrimaryCta={cta.variant === "primary"}
                >
                  {cta.label}
                </PillCta>
              ))}
            </div>

            <div className={styles.metaBlock}>
              <p className={styles.proofLine}>{hero.proofLine}</p>
              <div className={styles.heroMeta}>
                <p>{hero.availability}</p>
                <p>{hero.note}</p>
              </div>
            </div>

            <div className={styles.stageRail} aria-label="Dossier stages">
              {stages.map((stage, index) => (
                <article
                  key={stage.label}
                  className={styles.stageCard}
                  data-stage-active={index === activeStageIndex ? "true" : "false"}
                >
                  <div className={styles.stageCardHeader}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{formatStageRange(stage)}</span>
                  </div>
                  <p className={styles.stageLabel}>{stage.label}</p>
                </article>
              ))}
            </div>

            <div className={styles.signalGrid}>
              {hero.signals.map((signal) => (
                <article key={signal.label} className={styles.signalCard}>
                  <span className={styles.signalValue}>{signal.value}</span>
                  <span className={styles.signalLabel}>{signal.label}</span>
                  <p className={styles.signalContext}>{signal.context}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.mediaColumn}>
          <div
            ref={mediaRef}
            className={styles.mediaShell}
            data-scroll-sequence
            data-scroll-mode={scrollMode}
            role="img"
            aria-label={hero.scene.posterAlt}
          >
            <div className={styles.mediaCanvasWrap} aria-hidden="true">
              <Image
                key={posterSrc}
                className={styles.poster}
                src={posterSrc}
                alt=""
                fill
                priority
                sizes="(max-width: 900px) 100vw, 56vw"
              />
              <canvas
                ref={canvasRef}
                className={`${styles.canvas} ${scrollMode === "interactive" ? styles.canvasVisible : ""}`}
                aria-hidden="true"
              />
            </div>

            <div className={styles.mediaOverlay}>
              <div className={styles.mediaHeader}>
                <span>{hero.scene.label}</span>
                <span>{activeStage?.label ?? hero.scene.title}</span>
              </div>
              <div className={styles.mediaFooter}>
                <p className={styles.mediaTitle}>{hero.scene.title}</p>
                <p className={styles.mediaCaption}>{hero.scene.caption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
