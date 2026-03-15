import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/portfolio/reveal";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { siteContent } from "@/content/site-content";
import { proofLevelLabelShort } from "@/lib/content-utils";
import { absoluteUrl } from "@/lib/site-url";
import { getExternalLinkProps } from "@/lib/url-utils";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Resume",
  description: siteContent.resume.summary,
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: `Resume | ${siteContent.meta.name}`,
    description: siteContent.resume.summary,
    url: absoluteUrl("/resume"),
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `Resume | ${siteContent.meta.name}`,
    description: siteContent.resume.summary,
  },
};

export default function ResumePage() {
  const { meta, profileMedia, resume } = siteContent;

  return (
    <main id="main-content" tabIndex={-1} className={styles.page} data-resume-page>
      <Reveal variant="fade" duration={0.45}>
        <div className={styles.utilityBar}>
          <Link className={styles.utilityLink} href="/">
            Back to portfolio
          </Link>

          <div className={styles.utilityActions}>
            <p className={styles.utilityNote}>Print or save as PDF from browser.</p>
            <ThemeToggle />
          </div>
        </div>
      </Reveal>

      <Reveal variant="fade-up" delay={0.08} duration={0.7}>
        <article className={styles.resumeShell}>
          <header className={styles.header}>
            <div className={styles.headerCopy}>
              <p className={styles.kicker}>Premium hiring dossier</p>
              <h1 className={styles.name}>{meta.name}</h1>
              <p className={styles.headline}>{resume.headline}</p>
              <p className={styles.summary}>{resume.summary}</p>

              <div className={styles.actionRow}>
                <a className={styles.primaryAction} href={`mailto:${meta.email}`}>
                  Email
                </a>
                <Link className={styles.secondaryAction} href="/#cases">
                  Open cases
                </Link>
              </div>

              <p className={styles.contactNote}>{resume.contactNote}</p>

              <ul className={styles.linkList} aria-label="Resume links">
                {resume.contactLinks.map((item) => (
                  <li key={item.label}>
                    {!item.href ? (
                      <span>
                        {item.label}: {item.value}
                      </span>
                    ) : item.href.startsWith("/") ? (
                      <Link className={styles.textLink} href={item.href}>
                        {item.label}: {item.value}
                      </Link>
                    ) : (
                      <a
                        className={styles.textLink}
                        href={item.href}
                        {...getExternalLinkProps(item.href)}
                      >
                        {item.label}: {item.value}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <aside className={styles.headerRail}>
              <div className={styles.portraitFrame}>
                <Image
                  src={profileMedia.src}
                  alt={profileMedia.alt}
                  width={profileMedia.width}
                  height={profileMedia.height}
                  priority
                  sizes="(max-width: 900px) 40vw, 16rem"
                  className={styles.portrait}
                />
              </div>

              <div className={styles.snapshotCard}>
                <p className={styles.sectionEyebrow}>{resume.snapshot.eyebrow}</p>
                <h2 className={styles.snapshotTitle}>{resume.snapshot.title}</h2>
                <p className={styles.snapshotIntro}>{resume.snapshot.intro}</p>

                <dl className={styles.snapshotList}>
                  {resume.snapshot.items.map((item) => (
                    <div key={item.label} className={styles.snapshotItem}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </header>

          <section className={styles.section} aria-labelledby="highlights-title">
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>Evidence highlights</p>
              <h2 className={styles.sectionTitle} id="highlights-title">
                The fastest proof of fit.
              </h2>
            </div>

            <div className={styles.highlightsGrid}>
              {resume.highlights.map((highlight) => (
                <article key={highlight.title} className={styles.highlightCard}>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.detail}</p>
                  <strong>{highlight.evidence}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="experience-title">
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>Experience</p>
              <h2 className={styles.sectionTitle} id="experience-title">
                Evidence-based experience.
              </h2>
            </div>

            <div className={styles.timeline}>
              {resume.experience.map((item) => (
                <article key={`${item.company}-${item.period}`} className={styles.timelineItem}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.company}</p>
                    </div>
                    <span>{item.period}</span>
                  </div>

                  <ul className={styles.bulletList}>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="proof-title">
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>Selected proof</p>
              <h2 className={styles.sectionTitle} id="proof-title">
                Projects and systems that support the hiring read.
              </h2>
            </div>

            <div className={styles.proofGrid}>
              <div className={styles.proofCard}>
                <p className={styles.cardEyebrow}>Selected projects</p>
                <div className={styles.projectStack}>
                  {resume.selectedProjects.map((project) => (
                    <article key={project.title} className={styles.projectItem}>
                      <div className={styles.projectHeader}>
                        <h3>{project.title}</h3>
                        {project.href.startsWith("/") ? (
                          <Link className={styles.projectLink} href={project.href}>
                            Open
                          </Link>
                        ) : (
                          <a
                            className={styles.projectLink}
                            href={project.href}
                            {...getExternalLinkProps(project.href)}
                          >
                            Open
                          </a>
                        )}
                      </div>
                      <p>{project.note}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className={styles.proofCard}>
                <p className={styles.cardEyebrow}>Skills</p>
                <div className={styles.skillStack}>
                  {resume.skillGroups.map((group) => (
                    <article key={group.title} className={styles.skillGroup}>
                      <div className={styles.skillHeader}>
                        <h3>{group.title}</h3>
                        <span>{proofLevelLabelShort(group.level)}</span>
                      </div>
                      <p>{group.items.join(" • ")}</p>
                      {group.note ? <small>{group.note}</small> : null}
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="education-title">
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>Background</p>
              <h2 className={styles.sectionTitle} id="education-title">
                Education and languages.
              </h2>
            </div>

            <div className={styles.metaGrid}>
              <div className={styles.metaCard}>
                <p className={styles.cardEyebrow}>Education</p>
                <div className={styles.educationStack}>
                  {resume.education.map((item) => (
                    <article key={item.title} className={styles.educationItem}>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className={styles.metaCard}>
                <p className={styles.cardEyebrow}>Languages</p>
                <p className={styles.languages}>{resume.languages}</p>
              </div>
            </div>
          </section>
        </article>
      </Reveal>
    </main>
  );
}
