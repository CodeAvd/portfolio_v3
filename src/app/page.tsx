import Link from "next/link";

import { Reveal } from "@/components/portfolio/reveal";
import { ScrollSequence } from "@/components/portfolio/scroll-sequence";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { siteContent } from "@/content/site-content";
import { proofLevelLabel } from "@/lib/content-utils";
import { getExternalLinkProps, isInternalRouteHref } from "@/lib/url-utils";

import styles from "./page.module.css";

export default function Home() {
  const { contact, footer, home, meta, nav, roleFit, systems, caseStudies } = siteContent;
  const flagshipCase = caseStudies.find(
    (caseStudy) => caseStudy.slug === home.flagship.caseSlug,
  );

  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <Reveal variant="fade" duration={0.5}>
        <header className={styles.topbar}>
          <Link className={styles.brand} href="/">
            <span className={styles.brandName}>{meta.name}</span>
            <span className={styles.brandRole}>{meta.role}</span>
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {nav.map((item) =>
              isInternalRouteHref(item.href) ? (
                <Link key={item.href} className={styles.navLink} href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.href} className={styles.navLink} href={item.href}>
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <ThemeToggle />
        </header>
      </Reveal>

      <section className={styles.hero} data-home-hero>
        <div className={styles.heroCopy}>
          <Reveal variant="fade" delay={0.08} duration={0.55}>
            <p className={styles.eyebrow}>{home.hero.eyebrow}</p>
          </Reveal>

          <Reveal variant="fade" delay={0.12} duration={0.55}>
            <p className={styles.positioning}>{home.hero.positioning}</p>
          </Reveal>

          <Reveal variant="blur-to-crisp" delay={0.16} duration={0.9}>
            <h1 className={styles.heroTitle}>{home.hero.title}</h1>
          </Reveal>

          <Reveal variant="fade-up" delay={0.25} duration={0.75}>
            <p className={styles.heroDescription}>{home.hero.description}</p>
          </Reveal>

          <Reveal variant="fade-up" delay={0.3} duration={0.75}>
            <p className={styles.proofLine}>{home.hero.proofLine}</p>
          </Reveal>

          <Reveal variant="fade-up" delay={0.35} duration={0.75}>
            <div className={styles.heroActions}>
              {home.hero.ctas.map((cta) =>
                isInternalRouteHref(cta.href) ? (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={cta.variant === "primary" ? styles.primaryAction : styles.secondaryAction}
                    data-primary-cta={cta.variant === "primary" ? "true" : undefined}
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className={cta.variant === "primary" ? styles.primaryAction : styles.secondaryAction}
                    {...getExternalLinkProps(cta.href)}
                    data-primary-cta={cta.variant === "primary" ? "true" : undefined}
                  >
                    {cta.label}
                  </a>
                ),
              )}
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.38} duration={0.75}>
            <div className={styles.heroNotes}>
              <p>{home.hero.availability}</p>
              <p>{home.hero.note}</p>
            </div>
          </Reveal>
        </div>

        <Reveal className={styles.heroVisual} variant="fade-up" delay={0.2} duration={0.9}>
          <ScrollSequence {...home.hero.scene} className={styles.heroSequence} />
        </Reveal>
      </section>

      <Reveal className={styles.trustSection} id="trust" variant="fade-up" delay={0.04} duration={0.7}>
        <section data-trust-strip>
          <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{home.trustStrip.eyebrow}</p>
          <div className={styles.sectionCopy}>
            <h2 className={styles.sectionTitle}>{home.trustStrip.title}</h2>
            <p className={styles.sectionIntro}>{home.trustStrip.intro}</p>
          </div>
        </div>

          <div className={styles.trustGrid}>
            <div className={styles.metricsGrid}>
            {home.trustStrip.metrics.map((metric) => (
              <article key={metric.label} className={styles.metricCard}>
                <p className={styles.metricValue}>{metric.value}</p>
                <p className={styles.metricLabel}>{metric.label}</p>
                <p className={styles.metricNote}>{metric.note}</p>
              </article>
            ))}
            </div>

            <aside className={styles.snapshotCard} data-recruiter-snapshot>
            <p className={styles.snapshotEyebrow}>{home.trustStrip.snapshot.eyebrow}</p>
            <h3 className={styles.snapshotTitle}>{home.trustStrip.snapshot.title}</h3>
            <p className={styles.snapshotIntro}>{home.trustStrip.snapshot.intro}</p>

            <dl className={styles.snapshotList}>
              {home.trustStrip.snapshot.items.map((item) => (
                <div key={item.label} className={styles.snapshotRow}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <p className={styles.snapshotNote}>{home.trustStrip.snapshot.note}</p>
            </aside>
          </div>
        </section>
      </Reveal>

      {flagshipCase ? (
        <section className={styles.flagshipSection} data-flagship-chapter>
          <Reveal className={styles.sectionHeader} variant="fade-up" duration={0.7}>
            <p className={styles.eyebrow}>{home.flagship.eyebrow}</p>
            <div className={styles.sectionCopy}>
              <h2 className={styles.sectionTitle}>{home.flagship.title}</h2>
              <p className={styles.sectionIntro}>{home.flagship.intro}</p>
            </div>
          </Reveal>

          <div className={styles.flagshipGrid}>
            <ScrollSequence {...home.flagship.scene} className={styles.flagshipSequence} />

            <Reveal className={styles.flagshipBody} variant="fade-up" duration={0.7}>
              <div className={styles.flagshipCard}>
                <p className={styles.cardEyebrow}>
                  ({flagshipCase.number}) {flagshipCase.eyebrow}
                </p>
                <h3 className={styles.cardTitle}>{flagshipCase.title}</h3>
                <p className={styles.cardSummary}>{home.flagship.summary}</p>
                <p className={styles.cardOutcome}>{flagshipCase.outcome}</p>

                <ul className={styles.bulletList}>
                  {home.flagship.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className={styles.tagRow}>
                  {flagshipCase.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.flagshipActions}>
                  {home.flagship.ctas.map((cta, index) =>
                    cta.href.startsWith("/") ? (
                      <Link
                        key={cta.label}
                        className={index === 0 ? styles.primaryAction : styles.secondaryAction}
                        href={cta.href}
                      >
                        {cta.label}
                      </Link>
                    ) : (
                      <a
                        key={cta.label}
                        className={index === 0 ? styles.primaryAction : styles.secondaryAction}
                        href={cta.href}
                        {...getExternalLinkProps(cta.href)}
                      >
                        {cta.label}
                      </a>
                    ),
                  )}
                </div>

                <div className={styles.actionNotes}>
                  {home.flagship.ctas.map((cta) => (
                    <p key={cta.label}>{cta.note}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <Reveal className={styles.caseSection} id="cases" variant="fade-up" duration={0.7}>
        <section data-cases-grid>
          <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{home.caseGrid.eyebrow}</p>
          <div className={styles.sectionCopy}>
            <h2 className={styles.sectionTitle}>{home.caseGrid.title}</h2>
            <p className={styles.sectionIntro}>{home.caseGrid.intro}</p>
          </div>
        </div>

          <div className={styles.caseGrid}>
            {caseStudies.map((caseStudy) => (
            <article key={caseStudy.slug} className={styles.caseCard}>
              <div className={styles.caseMeta}>
                <p className={styles.caseNumber}>{caseStudy.number}</p>
                <p className={styles.caseEyebrow}>{caseStudy.eyebrow}</p>
              </div>

              <h3 className={styles.caseTitle}>{caseStudy.title}</h3>
              <p className={styles.caseSummary}>{caseStudy.summary}</p>

              <div className={styles.caseMetricRow}>
                {caseStudy.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className={styles.caseMetric}>
                    <span>{metric.value}</span>
                    <small>{metric.label}</small>
                  </div>
                ))}
              </div>

              <Link className={styles.caseLink} href={`/cases/${caseStudy.slug}`}>
                Open case study
              </Link>
            </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className={styles.dossierSection} id="resume-preview" variant="fade-up" duration={0.7}>
        <section data-resume-preview>
          <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{home.resumePreview.eyebrow}</p>
          <div className={styles.sectionCopy}>
            <h2 className={styles.sectionTitle}>{home.resumePreview.title}</h2>
            <p className={styles.sectionIntro}>{home.resumePreview.intro}</p>
          </div>
        </div>

          <div className={styles.dossierGrid}>
            <article className={styles.dossierCard}>
            <p className={styles.cardEyebrow}>Resume highlights</p>
            <div className={styles.highlightStack}>
              {home.resumePreview.highlights.map((highlight) => (
                <div key={highlight.title} className={styles.highlightItem}>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.detail}</p>
                  <strong>{highlight.evidence}</strong>
                </div>
              ))}
            </div>
            <Link className={styles.inlineLink} href="/resume">
              Open the full resume dossier
            </Link>
            </article>

            <article className={styles.dossierCard}>
            <p className={styles.cardEyebrow}>{roleFit.eyebrow}</p>
            <h3 className={styles.panelTitle}>{roleFit.title}</h3>
            <p className={styles.panelIntro}>{roleFit.intro}</p>
            <div className={styles.fitStack}>
              {roleFit.items.map((item) => (
                <div key={item.title} className={styles.fitItem}>
                  <p>{item.eyebrow}</p>
                  <h4>{item.title}</h4>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>
            </article>

            <article className={styles.dossierCard}>
            <p className={styles.cardEyebrow}>{systems.eyebrow}</p>
            <h3 className={styles.panelTitle}>{systems.title}</h3>
            <p className={styles.panelIntro}>{systems.intro}</p>
            <div className={styles.systemStack}>
              {systems.items.map((item) => (
                <div key={item.title} className={styles.systemItem}>
                  <div className={styles.systemHeader}>
                    <p>{item.eyebrow}</p>
                    <span>{proofLevelLabel(item.level)}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <span>{item.summary}</span>
                  <a href={item.href} {...getExternalLinkProps(item.href)}>
                    {item.linkLabel}
                  </a>
                </div>
              ))}
            </div>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal className={styles.contactSection} id="contact" variant="fade-up" duration={0.7}>
        <section data-contact-section>
          <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{home.finalCta.eyebrow}</p>
          <div className={styles.sectionCopy}>
            <h2 className={styles.sectionTitle}>{home.finalCta.title}</h2>
            <p className={styles.sectionIntro}>{home.finalCta.intro}</p>
          </div>
        </div>

          <div className={styles.contactGrid}>
            <article className={styles.contactLead}>
            <div className={styles.heroActions}>
              {home.finalCta.ctas.map((cta) =>
                isInternalRouteHref(cta.href) ? (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={cta.variant === "primary" ? styles.primaryAction : styles.secondaryAction}
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className={cta.variant === "primary" ? styles.primaryAction : styles.secondaryAction}
                    {...getExternalLinkProps(cta.href)}
                  >
                    {cta.label}
                  </a>
                ),
              )}
            </div>
            <p className={styles.contactNote}>{home.finalCta.note}</p>
            </article>

            <div className={styles.contactPanel}>
            <p className={styles.cardEyebrow}>{contact.eyebrow}</p>
            <h3 className={styles.panelTitle}>{contact.title}</h3>
            <p className={styles.panelIntro}>{contact.intro}</p>

            <div className={styles.contactList}>
              {contact.links.map((item) =>
                item.href ? (
                  isInternalRouteHref(item.href) ? (
                    <Link key={item.label} href={item.href} className={styles.contactItem}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className={styles.contactItem}
                      {...getExternalLinkProps(item.href)}
                    >
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </a>
                  )
                ) : (
                  <div key={item.label} className={styles.contactItem}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ),
              )}
            </div>
            </div>
          </div>
        </section>
      </Reveal>

      <footer className={styles.footer}>
        <p>{footer}</p>
      </footer>
    </main>
  );
}
