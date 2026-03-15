import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/portfolio/reveal";
import { ScrollSequence } from "@/components/portfolio/scroll-sequence";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { siteContent } from "@/content/site-content";
import { proofLevelLabel } from "@/lib/content-utils";
import { getExternalLinkProps, isInternalRouteHref } from "@/lib/url-utils";

import styles from "./page.module.css";

export default function Home() {
  const { caseStudies, contact, footer, home, meta, nav, roleFit, systems } = siteContent;

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

          <div className={styles.toolbar}>
            <ThemeToggle />
          </div>
        </header>
      </Reveal>

      <a className={styles.contactOrb} href="#contact" aria-label="Jump to contact">
        <span className={styles.contactOrbRing}>contact</span>
        <span className={styles.contactOrbCore}>Email</span>
      </a>

      <section className={styles.hero}>
        <Reveal className={styles.heroCopy} variant="fade-up" duration={0.8}>
          <p className={styles.eyebrow}>{home.hero.eyebrow}</p>
          <h1 className={styles.heroTitle}>{home.hero.title}</h1>
          <p className={styles.heroLead}>{home.hero.positioning}</p>
          <p className={styles.heroDescription}>{home.hero.description}</p>

          <div className={styles.metricStrip} aria-label="Key proof signals">
            {home.trustStrip.metrics.slice(0, 4).map((metric) => (
              <article key={metric.label} className={styles.metricCard}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </article>
            ))}
          </div>

          <div className={styles.heroActions}>
            {home.hero.ctas.map((cta) =>
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

          <article className={styles.heroLedger}>
            <span className={styles.heroLedgerLabel}>Proof line</span>
            <p className={styles.heroLedgerText}>{home.hero.proofLine}</p>
            <p className={styles.heroLedgerNote}>{home.hero.note}</p>
          </article>

          <p className={styles.heroNote}>{home.hero.availability}</p>
        </Reveal>

        <Reveal className={styles.heroVisual} variant="scale-in" duration={0.9}>
          <ScrollSequence {...home.hero.scene} className={styles.heroSequence} />
        </Reveal>
      </section>

      <section className={styles.bridge}>
        <Reveal className={styles.bridgeMedia} variant="scale-in" duration={0.85}>
          <div className={styles.bridgeDeck}>
            <article className={styles.bridgeSheetPrimary}>
              <p className={styles.bridgeSheetLabel}>Recruiter cut</p>
              <h3 className={styles.bridgeSheetTitle}>{home.trustStrip.snapshot.title}</h3>
              <p className={styles.bridgeSheetText}>{home.trustStrip.snapshot.note}</p>
            </article>

            {home.trustStrip.metrics.slice(0, 3).map((metric, index) => (
              <article
                key={metric.label}
                className={`${styles.bridgeSlip} ${styles[`bridgeSlip${index + 1}`]}`}
              >
                <span className={styles.bridgeSlipValue}>{metric.value}</span>
                <p className={styles.bridgeSlipLabel}>{metric.label}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className={styles.bridgeCopy} variant="fade-up" duration={0.8}>
          <p className={styles.eyebrow}>{home.trustStrip.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{home.trustStrip.title}</h2>
          <p className={styles.sectionIntro}>{home.trustStrip.intro}</p>
          <p className={styles.sectionSupport}>{home.trustStrip.snapshot.intro}</p>

          <div className={styles.bridgeMetrics}>
            {home.trustStrip.snapshot.items.map((item) => (
              <article key={item.label} className={styles.bridgeMetric}>
                <span className={styles.bridgeMetricLabel}>{item.label}</span>
                <p className={styles.bridgeMetricValue}>{item.value}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={styles.darkStage} id="cases">
        <Reveal className={styles.stageHeader} variant="fade-up" duration={0.8}>
          <p className={styles.stageEyebrow}>{home.caseGrid.eyebrow}</p>
          <h2 className={styles.stageTitle}>{home.caseGrid.title}</h2>
          <p className={styles.stageIntro}>{home.caseGrid.intro}</p>
        </Reveal>

        <div className={styles.caseGrid}>
          {caseStudies.map((caseStudy, index) => (
            <Reveal
              key={caseStudy.slug}
              className={index % 2 === 0 ? styles.caseCardTall : styles.caseCardWide}
              variant="fade-up"
              duration={0.8}
              delay={index * 0.04}
            >
              <article className={styles.caseCard}>
                <Link className={styles.caseMediaLink} href={`/cases/${caseStudy.slug}`}>
                  <div className={styles.caseMedia}>
                    <Image
                      src={caseStudy.previewImage}
                      alt={`${caseStudy.title} preview`}
                      fill
                      sizes="(max-width: 960px) 100vw, 50vw"
                      className={styles.caseImage}
                    />
                  </div>
                </Link>

                <div className={styles.caseBody}>
                  <div className={styles.caseMeta}>
                    <span>{caseStudy.number}</span>
                    <span>{caseStudy.eyebrow}</span>
                  </div>

                  <h3 className={styles.caseTitle}>{caseStudy.title}</h3>
                  <p className={styles.caseSummary}>{caseStudy.outcome}</p>

                  <div className={styles.caseChips}>
                    {caseStudy.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={styles.caseChip}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link className={styles.caseLink} href={`/cases/${caseStudy.slug}`}>
                    Open case study
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.capabilities} id="capabilities">
        <Reveal className={styles.sectionHeader} variant="fade-up" duration={0.8}>
          <p className={styles.eyebrow}>What I actually do</p>
          <h2 className={styles.sectionTitle}>{roleFit.title}</h2>
          <p className={styles.sectionIntro}>{roleFit.intro}</p>
        </Reveal>

        <div className={styles.capabilityGrid}>
          {roleFit.items.map((item, index) => (
            <Reveal
              key={item.title}
              className={styles.capabilityCard}
              variant="fade-up"
              duration={0.8}
              delay={index * 0.05}
            >
              <p className={styles.capabilityEyebrow}>{item.eyebrow}</p>
              <h3 className={styles.capabilityTitle}>{item.title}</h3>
              <p className={styles.capabilityDescription}>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.systemsStage} id="systems">
        <Reveal className={styles.sectionHeader} variant="fade-up" duration={0.8}>
          <p className={styles.eyebrow}>{systems.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{systems.title}</h2>
          <p className={styles.sectionIntro}>{systems.intro}</p>
        </Reveal>

        <div className={styles.systemGrid}>
          {systems.items.map((item, index) => (
            <Reveal
              key={item.title}
              className={styles.systemCard}
              variant="fade-up"
              duration={0.8}
              delay={index * 0.05}
            >
              <div className={styles.systemMeta}>
                <span>{item.eyebrow}</span>
                <span>{proofLevelLabel(item.level)}</span>
              </div>

              <h3 className={styles.systemTitle}>{item.title}</h3>
              <p className={styles.systemSummary}>{item.summary}</p>
              <p className={styles.systemImpact}>{item.impact}</p>

              <div className={styles.stackRow}>
                {item.stack.map((stackItem) => (
                  <span key={stackItem} className={styles.stackTag}>
                    {stackItem}
                  </span>
                ))}
              </div>

              <a className={styles.caseLink} href={item.href} {...getExternalLinkProps(item.href)}>
                {item.linkLabel}
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.resumePreview} id="resume-preview">
        <Reveal className={styles.resumeShell} variant="fade-up" duration={0.85}>
          <div className={styles.resumeColumn}>
            <p className={styles.eyebrow}>{home.resumePreview.eyebrow}</p>
            <h2 className={styles.sectionTitle}>{home.resumePreview.title}</h2>
            <p className={styles.sectionIntro}>{home.resumePreview.intro}</p>

            <div className={styles.resumeActions}>
              <Link className={styles.primaryAction} href="/resume">
                Open resume
              </Link>
            </div>
          </div>

          <div className={styles.highlightGrid}>
            {home.resumePreview.highlights.slice(0, 3).map((highlight) => (
              <article key={highlight.title} className={styles.highlightCard}>
                <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                <p className={styles.highlightDetail}>{highlight.detail}</p>
                <p className={styles.highlightEvidence}>{highlight.evidence}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={styles.contactStage} id="contact">
        <Reveal className={styles.contactShell} variant="fade-up" duration={0.9}>
          <div className={styles.contactHero}>
            <p className={styles.stageEyebrow}>{home.finalCta.eyebrow}</p>
            <h2 className={styles.contactTitle}>{home.finalCta.title}</h2>
            <p className={styles.contactIntro}>{home.finalCta.intro}</p>

            <div className={styles.heroActions}>
              {home.finalCta.ctas.map((cta) =>
                isInternalRouteHref(cta.href) ? (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={cta.variant === "primary" ? styles.primaryActionDark : styles.secondaryActionDark}
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className={cta.variant === "primary" ? styles.primaryActionDark : styles.secondaryActionDark}
                    {...getExternalLinkProps(cta.href)}
                  >
                    {cta.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div className={styles.contactGrid}>
            {contact.links.map((item) => (
              <article key={item.label} className={styles.contactCard}>
                <span className={styles.contactLabel}>{item.label}</span>

                {!item.href ? (
                  <span className={styles.contactValue}>{item.value}</span>
                ) : isInternalRouteHref(item.href) ? (
                  <Link className={styles.contactValue} href={item.href}>
                    {item.value}
                  </Link>
                ) : (
                  <a className={styles.contactValue} href={item.href} {...getExternalLinkProps(item.href)}>
                    {item.value}
                  </a>
                )}
              </article>
            ))}
          </div>

          <p className={styles.footerNote}>{footer}</p>
        </Reveal>
      </section>
    </main>
  );
}
