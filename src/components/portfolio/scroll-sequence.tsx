"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

import type { ScrollScene } from "@/content/types";

import styles from "./scroll-sequence.module.css";

type ScrollSequenceProps = ScrollScene & {
  className?: string;
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function ScrollSequence({
  caption,
  className,
  duration,
  label,
  mobileBehavior,
  pinRange,
  poster,
  posterAlt,
  reducedMotionFallback,
  sources,
  title,
}: ScrollSequenceProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const [isReady, setIsReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });

  const frameScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const frameY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.18, 0.32, 0.24]);

  const shouldUsePoster =
    sources.length === 0 ||
    (reduceMotion && reducedMotionFallback === "poster") ||
    (isMobile && mobileBehavior === "poster");

  useEffect(() => {
    if (shouldUsePoster || !videoRef.current || !isReady) {
      return;
    }

    const unsubscribe = scrollYProgress.on("change", (value) => {
      const video = videoRef.current;

      if (!video || Number.isNaN(video.duration) || video.duration === 0) {
        return;
      }

      const targetTime = Math.min(value * duration, video.duration);

      if (Math.abs(video.currentTime - targetTime) > 0.04) {
        video.currentTime = targetTime;
      }
    });

    return () => unsubscribe();
  }, [duration, isReady, scrollYProgress, shouldUsePoster]);

  return (
    <section
      ref={rootRef}
      className={`${styles.sequence} ${className ?? ""}`}
      style={{ ["--pin-range" as string]: String(pinRange) }}
      data-scroll-sequence
      data-scroll-mode={shouldUsePoster ? "poster" : "video"}
    >
      <div className={styles.pin}>
        <motion.div
          className={styles.frame}
          style={{
            scale: frameScale,
            y: frameY,
          }}
        >
          <div className={styles.mediaShell}>
            {shouldUsePoster ? (
              <Image
                src={poster}
                alt={posterAlt}
                fill
                priority={false}
                sizes="(max-width: 767px) 100vw, 50vw"
                className={styles.poster}
              />
            ) : (
              <video
                ref={videoRef}
                className={styles.poster}
                muted
                playsInline
                preload="metadata"
                poster={poster}
                aria-hidden="true"
                onLoadedMetadata={() => setIsReady(true)}
              >
                {sources.map((source) => (
                  <source key={source.src} src={source.src} type={source.type} />
                ))}
              </video>
            )}

            <motion.div className={styles.overlay} style={{ opacity: overlayOpacity }} />
            <div className={styles.frameLines} aria-hidden="true" />

            <div className={styles.frameMeta}>
              <div className={styles.topMeta}>
                <span>{label}</span>
                <span>{title}</span>
              </div>

              <div className={styles.bottomMeta}>
                <p className={styles.caption}>{caption}</p>
                <div className={styles.progressTrack} aria-hidden="true">
                  <motion.span
                    className={styles.progressFill}
                    style={{ scaleX: scrollYProgress }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
