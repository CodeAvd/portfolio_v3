import Image from "next/image";
import Link from "next/link";

import { AmbientHero } from "@/components/portfolio/ambient-hero";
import { BrandLockup } from "@/components/portfolio/brand-lockup";
import { Reveal } from "@/components/portfolio/reveal";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { siteContent } from "@/content/site-content";
import { proofLevelLabel } from "@/lib/content-utils";
import { getExternalLinkProps, isInternalRouteHref } from "@/lib/url-utils";

import styles from "./page.module.css";

export default function Home() {
  const {
    meta,
    profileMedia,
    hero,
    nav,
    cases,
    builds,
    strengths,
    contact,
    footer,
  } = siteContent;

  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <Reveal variant="fade" duration={0.45}>
        <header className={styles.topbar}>
          <div className={styles.topbarLead}>
            <BrandLockup href="/" className={styles.brand} />
            <p className={styles.brandRole}>{meta.role}</p>
          </div>

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

          <div className={styles.topbarActions}>
            <ThemeToggle />
            <a className={styles.contactButton} href={`mailto:${meta.email}`}>
              Email
            </a>
          </div>
        </header>
      </Reveal>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <Reveal variant="fade" delay={0.05} duration={0.45}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
          </Reveal>

          <Reveal variant="fade-up" delay={0.1} duration={0.5}>
            <p className={styles.heroPositioning}>{hero.positioning}</p>
          </Reveal>

          <Reveal variant="blur-to-crisp" delay={0.15} duration={0.72}>
            <h1 className={styles.heroTitle}>{hero.title}</h1>
          </Reveal>

          <Reveal variant="fade-up" delay={0.22} duration={0.55}>
            <p className={styles.heroDescription}>{hero.description}</p>
          </Reveal>

          <Reveal variant="fade-up" delay={0.28} duration={0.55}>
            <ul className={styles.heroLanes}>
              {strengths.items.map((item) => (
                <li key={item.title} className={styles.heroLane}>
                  <p className={styles.heroLaneLabel}>{item.eyebrow}</p>
                  <p className={styles.heroLaneValue}>{item.title}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fade-up" delay={0.34} duration={0.55}>
            <div className={styles.heroActions}>
              {hero.ctas.map((cta) =>
                isInternalRouteHref(cta.href) ? (
                  <Link
                    key={cta.label}
                    className={
                      cta.variant === "primary" ? styles.primaryAction : styles.secondaryAction
                    }
                    href={cta.href}
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <a
                    key={cta.label}
                    className={
                      cta.variant === "primary" ? styles.primaryAction : styles.secondaryAction
                    }
                    href={cta.href}
                    {...getExternalLinkProps(cta.href)}
                  >
                    {cta.label}
                  </a>
                ),
              )}
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.38} duration={0.55}>
            <p className={styles.heroNote}>{hero.note}</p>
          </Reveal>
        </div>

        <Reveal className={styles.heroVisual} variant="scale-in" delay={0.12} duration={0.68}>
          <article className={styles.signalBoard} aria-label="Signal Ledger evidence board">
            <div className={styles.signalBoardBackdrop} aria-hidden="true">
              <AmbientHero />
            </div>

            <div className={styles.signalBoardHeader}>
              <BrandLockup compact />
              <p className={styles.boardState}>Interview-ready / remote</p>
            </div>

            <div className={styles.signalBoardGrid}>
              <section className={`${styles.boardCard} ${styles.boardCardPrimary}`}>
                <p className={styles.profileLabel}>Operator read</p>
                <p className={styles.profileText}>{hero.positioning}</p>
                <p className={styles.profileAvailability}>{hero.availability}</p>
                <a
                  className={styles.profileGithub}
                  href={meta.githubUrl}
                  {...getExternalLinkProps(meta.githubUrl)}
                >
                  github.com/CodeAvd
                </a>
              </section>

              <section className={`${styles.boardCard} ${styles.boardCardPortrait}`}>
                <div className={styles.profilePhotoFrame}>
                  <Image
                    src={profileMedia.src}
                    alt={profileMedia.alt}
                    width={profileMedia.width}
                    height={profileMedia.height}
                    priority
                    sizes="(max-width: 720px) 100vw, (max-width: 1080px) 44vw, 18rem"
                    className={styles.profilePhoto}
                  />
                </div>
                <p className={styles.portraitCaption}>
                  Personal ownership stays visible, but proof leads the read.
                </p>
              </section>

              <section className={`${styles.boardCard} ${styles.boardCardMetrics}`}>
                <div className={styles.boardCardHeader}>
                  <p className={styles.profileLabel}>Signal strip</p>
                  <span className={styles.boardBadge}>Evidence pack</span>
                </div>

                <div className={styles.heroSignals}>
                  {hero.signals.map((signal) => (
                    <div key={signal.label} className={styles.signalCard}>
                      <p className={styles.signalValue}>{signal.value}</p>
                      <p className={styles.signalLabel}>{signal.label}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className={`${styles.boardCard} ${styles.boardCardRoutes}`}>
                <div className={styles.boardCardHeader}>
                  <p className={styles.profileLabel}>Operating lanes</p>
                  <span className={styles.boardBadge}>Support to product</span>
                </div>

                <div className={styles.routeList}>
                  {strengths.items.map((item) => (
                    <article key={item.title} className={styles.routeItem}>
                      <p className={styles.routeEyebrow}>{item.eyebrow}</p>
                      <p className={styles.routeTitle}>{item.title}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </Reveal>
      </section>

      <Reveal className={styles.section} id="cases" delay={0.05}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>{cases.eyebrow}</p>
          <div>
            <h2 className={styles.sectionTitle}>{cases.title}</h2>
            <p className={styles.sectionIntro}>{cases.intro}</p>
          </div>
        </div>

        <div className={styles.casesGrid}>
          {siteContent.caseStudies.map((caseStudy, index) => (
            <Reveal
              key={caseStudy.slug}
              variant="fade-up"
              delay={0.05 * index}
              duration={0.55}
            >
              <article
                className={index === 0 ? styles.caseCardFeatured : styles.caseCardSecondary}
              >
                <div className={index === 0 ? styles.caseVisualFeatured : styles.caseVisual}>
                  <Image
                    src={caseStudy.previewImage}
                    alt={`${caseStudy.title} preview`}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 960px) 100vw, 52vw"
                        : "(max-width: 960px) 100vw, 40vw"
                    }
                    className={styles.caseImage}
                  />
                </div>

                <div className={styles.caseBody}>
                  <div className={styles.caseMeta}>
                    <p className={styles.caseNumber}>{caseStudy.number}</p>
                    <p className={styles.caseEyebrow}>{caseStudy.eyebrow}</p>
                  </div>

                  <h3 className={index === 0 ? styles.caseTitleFeatured : styles.caseTitle}>
                    {caseStudy.title}
                  </h3>
                  <p className={styles.caseSummary}>{caseStudy.summary}</p>
                  {index === 0 ? <p className={styles.caseOutcome}>{caseStudy.outcome}</p> : null}

                  <div className={styles.caseTags}>
                    {caseStudy.tags.map((tag) => (
                      <span key={tag} className={styles.caseTag}>
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
      </Reveal>

      <Reveal className={styles.section} id="builds" delay={0.08}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>{builds.eyebrow}</p>
          <div>
            <h2 className={styles.sectionTitle}>{builds.title}</h2>
            <p className={styles.sectionIntro}>{builds.intro}</p>
          </div>
        </div>

        <div className={styles.buildsGrid}>
          {builds.items.map((item, index) => (
            <Reveal key={item.title} variant="fade-up" delay={0.05 * index} duration={0.5}>
              <article className={styles.buildCard}>
                <div className={styles.buildMeta}>
                  <p className={styles.buildEyebrow}>{item.eyebrow}</p>
                  <span className={styles.levelBadge}>{proofLevelLabel(item.level)}</span>
                </div>

                <h3 className={styles.buildTitle}>{item.title}</h3>
                <p className={styles.buildSummary}>{item.summary}</p>
                <p className={styles.buildImpact}>{item.impact}</p>

                <div className={styles.buildStacks}>
                  {item.stack.map((tag) => (
                    <span key={tag} className={styles.buildTag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a className={styles.buildLink} href={item.href} {...getExternalLinkProps(item.href)}>
                  {item.linkLabel}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal className={styles.section} id="strengths" delay={0.11}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>{strengths.eyebrow}</p>
          <div>
            <h2 className={styles.sectionTitle}>{strengths.title}</h2>
            <p className={styles.sectionIntro}>{strengths.intro}</p>
          </div>
        </div>

        <div className={styles.strengthsGrid}>
          {strengths.items.map((item, index) => (
            <Reveal key={item.title} variant="fade-up" delay={0.04 * index} duration={0.48}>
              <article className={styles.strengthCard}>
                <p className={styles.strengthEyebrow}>{item.eyebrow}</p>
                <h3 className={styles.strengthTitle}>{item.title}</h3>
                <p className={styles.strengthDescription}>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal className={`${styles.section} ${styles.contactSection}`} id="contact">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>{contact.eyebrow}</p>
          <div>
            <h2 className={styles.sectionTitle}>{contact.title}</h2>
            <p className={styles.sectionIntro}>{contact.intro}</p>
          </div>
        </div>

        <div className={styles.contactGrid}>
          <Reveal variant="fade-up" delay={0.04} duration={0.5}>
            <article className={styles.contactLead}>
              <p className={styles.contactStatement}>
                Support credibility gets you screened. Evidence design is what makes the
                interview loop remember you.
              </p>
              <Link className={styles.primaryAction} href={meta.resumeUrl}>
                Open public resume
              </Link>
            </article>
          </Reveal>

          <Reveal variant="fade-up" delay={0.08} duration={0.5}>
            <ul className={styles.contactList}>
              {contact.links.map((item) => (
                <li key={item.label} className={styles.contactItem}>
                  <span className={styles.contactLabel}>{item.label}</span>
                  {item.href ? (
                    isInternalRouteHref(item.href) ? (
                      <Link className={styles.contactValue} href={item.href}>
                        {item.value}
                      </Link>
                    ) : (
                      <a
                        className={styles.contactValue}
                        href={item.href}
                        {...getExternalLinkProps(item.href)}
                      >
                        {item.value}
                      </a>
                    )
                  ) : (
                    <span className={styles.contactValue}>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Reveal>

      <footer className={styles.footer}>
        <BrandLockup compact />
        <p>{footer}</p>
        <p>{meta.location}</p>
      </footer>
    </main>
  );
}
