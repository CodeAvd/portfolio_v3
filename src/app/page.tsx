import Image from "next/image";
import Link from "next/link";

import { DossierScrollHero } from "@/components/portfolio/dossier-scroll-hero";
import { FloatingContact } from "@/components/portfolio/floating-contact";
import { InverseSection } from "@/components/portfolio/inverse-section";
import { ParallaxMedia } from "@/components/portfolio/parallax-media";
import { PillCta } from "@/components/portfolio/pill-cta";
import { Reveal } from "@/components/portfolio/reveal";
import { siteContent } from "@/content/site-content";
import { getExternalLinkProps, isInternalRouteHref } from "@/lib/url-utils";

import styles from "./page.module.css";

export default function Home() {
  const { caseStudies, contact, footer, home, meta, nav, profileMedia } = siteContent;
  const featuredCases = home.featuredCases
    .map((slug) => caseStudies.find((caseStudy) => caseStudy.slug === slug))
    .filter((caseStudy): caseStudy is NonNullable<typeof caseStudy> => Boolean(caseStudy));

  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <header className={styles.topbar}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandName}>{meta.name}</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} className={styles.navLink} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <DossierScrollHero hero={home.hero} />

      <section className={styles.bridgeSection}>
        <Reveal className={styles.bridgeHeader} variant="fade-up">
          <p className={styles.eyebrow}>{home.bridge.eyebrow}</p>
          <div className={styles.bridgeCopy}>
            <h2 className={styles.sectionTitle}>{home.bridge.title}</h2>
            <p className={styles.sectionIntro}>{home.bridge.intro}</p>
            <p className={styles.bridgeDetail}>{home.bridge.detail}</p>
          </div>
        </Reveal>

        <Reveal className={styles.bridgeRail} variant="fade-up" delay={0.08}>
          <div className={styles.bridgeObject} aria-hidden="true">
            <span className={styles.bridgeHalo} />
            <span className={styles.bridgeDisc} />
          </div>
          <PillCta href={home.bridge.cta.href} variant={home.bridge.cta.variant}>
            {home.bridge.cta.label}
          </PillCta>
        </Reveal>
      </section>

      <InverseSection id="cases" className={styles.caseStage} innerClassName={styles.caseStageInner}>
        <Reveal className={styles.caseStageHeader} variant="fade-up">
          <p className={`${styles.eyebrow} ${styles.inverseEyebrow}`}>{home.caseGrid.eyebrow}</p>
          <div className={styles.sectionCopy}>
            <h2 className={`${styles.sectionTitle} ${styles.inverseTitle}`}>Selected cases</h2>
            <p className={`${styles.sectionIntro} ${styles.inverseIntro}`}>{home.caseGrid.intro}</p>
          </div>
        </Reveal>

        <div className={styles.caseGrid}>
          {featuredCases.map((caseStudy, index) => (
            <Reveal
              key={caseStudy.slug}
              className={`${styles.caseCard} ${
                index % 2 === 1 ? styles.caseCardOffset : ""
              } ${styles[`aspect${caseStudy.mediaAspect[0].toUpperCase()}${caseStudy.mediaAspect.slice(1)}`]}`}
              variant="fade-up"
              delay={index * 0.05}
            >
              <article>
                <div className={styles.caseMediaShell}>
                  <ParallaxMedia className={styles.caseMediaFrame}>
                    <Image
                      src={caseStudy.previewImage}
                      alt={`${caseStudy.title} preview`}
                      fill
                      sizes="(max-width: 900px) 100vw, 48vw"
                      className={styles.caseImage}
                    />
                  </ParallaxMedia>
                </div>

                <div className={styles.caseBody}>
                  <p className={`${styles.eyebrow} ${styles.inverseEyebrow}`}>
                    ({caseStudy.number}) {caseStudy.eyebrow}
                  </p>
                  <h3 className={styles.caseTitle}>{caseStudy.title}</h3>
                  <p className={styles.caseOutcome}>{caseStudy.outcome}</p>

                  <div className={styles.caseQuickFacts}>
                    {caseStudy.quickFacts.slice(0, 2).map((fact) => (
                      <div key={fact.label} className={styles.caseQuickFact}>
                        <span>{fact.label}</span>
                        <strong>{fact.value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className={styles.caseMetricRow}>
                    {caseStudy.metrics.slice(0, 2).map((metric) => (
                      <div key={metric.label} className={styles.caseMetric}>
                        <span>{metric.value}</span>
                        <small>{metric.label}</small>
                      </div>
                    ))}
                  </div>

                  <PillCta href={`/cases/${caseStudy.slug}`} variant="secondary">
                    Open case study
                  </PillCta>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </InverseSection>

      <section className={styles.capabilitiesSection}>
        <Reveal className={styles.sectionHeader} variant="fade-up">
          <p className={styles.eyebrow}>{home.capabilities.eyebrow}</p>
          <div className={styles.sectionCopy}>
            <h2 className={styles.sectionTitle}>{home.capabilities.title}</h2>
            <p className={styles.sectionIntro}>{home.capabilities.intro}</p>
          </div>
        </Reveal>

        <div className={styles.capabilityGrid}>
          {home.capabilities.items.map((item, index) => (
            <Reveal key={item.title} className={styles.capabilityCard} variant="fade-up" delay={index * 0.05}>
              <p className={styles.eyebrow}>{item.eyebrow}</p>
              <h3 className={styles.capabilityTitle}>{item.title}</h3>
              <p className={styles.capabilityDescription}>{item.description}</p>
              <p className={styles.capabilityProof}>{item.proof}</p>
              {item.href ? (
                <Link className={styles.inlineLink} href={item.href}>
                  Open proof
                </Link>
              ) : null}
            </Reveal>
          ))}
        </div>
      </section>

      <InverseSection id="contact" className={styles.contactStage}>
        <Reveal className={styles.contactHero} variant="fade-up">
          <p className={`${styles.eyebrow} ${styles.inverseEyebrow}`}>{home.finalCta.eyebrow}</p>
          <div className={styles.contactCopy}>
            <h2 className={`${styles.sectionTitle} ${styles.inverseTitle}`}>{home.finalCta.title}</h2>
            <p className={`${styles.sectionIntro} ${styles.inverseIntro}`}>{home.finalCta.intro}</p>
            <p className={styles.contactNote}>{home.finalCta.note}</p>
          </div>
        </Reveal>

        <div className={styles.contactGrid}>
          <Reveal className={styles.contactActionsPanel} variant="fade-up" delay={0.05}>
            <div className={styles.contactActions}>
              {home.finalCta.ctas.map((cta) => (
                <PillCta key={cta.label} href={cta.href} variant={cta.variant} size="lg">
                  {cta.label}
                </PillCta>
              ))}
            </div>

            <div className={styles.contactMeta}>
              {home.finalCta.meta.map((item) =>
                item.href ? (
                  isInternalRouteHref(item.href) ? (
                    <Link key={item.label} href={item.href} className={styles.metaItem}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className={styles.metaItem}
                      {...getExternalLinkProps(item.href)}
                    >
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </a>
                  )
                ) : (
                  <div key={item.label} className={styles.metaItem}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ),
              )}
            </div>
          </Reveal>

          <Reveal className={styles.contactPanel} variant="fade-up" delay={0.1}>
            <p className={`${styles.eyebrow} ${styles.inverseEyebrow}`}>{contact.eyebrow}</p>
            <h3 className={styles.contactPanelTitle}>{contact.title}</h3>
            <p className={styles.contactPanelIntro}>{contact.intro}</p>
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
          </Reveal>
        </div>
      </InverseSection>

      <FloatingContact
        contact={contact}
        meta={meta}
        portraitAlt={profileMedia.alt}
        portraitSrc={profileMedia.src}
      />

      <footer className={styles.footer}>
        <p>{footer}</p>
      </footer>
    </main>
  );
}
