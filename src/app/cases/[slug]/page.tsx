import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/portfolio/breadcrumbs";
import { Reveal } from "@/components/portfolio/reveal";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import {
  getAdjacentCaseStudies,
  getCaseStudy,
  siteContent,
} from "@/content/site-content";
import { absoluteUrl } from "@/lib/site-url";
import { getExternalLinkProps } from "@/lib/url-utils";

import styles from "./page.module.css";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return siteContent.caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: "Case study not found",
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    alternates: {
      canonical: `/cases/${caseStudy.slug}`,
    },
    openGraph: {
      title: `${caseStudy.title} | ${siteContent.meta.name}`,
      description: caseStudy.summary,
      url: absoluteUrl(`/cases/${caseStudy.slug}`),
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} | ${siteContent.meta.name}`,
      description: caseStudy.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const adjacent = getAdjacentCaseStudies(slug);

  return (
    <main id="main-content" tabIndex={-1} className={styles.page} data-case-page>
      <Reveal variant="fade" duration={0.45}>
        <div className={styles.navBar}>
          <div className={styles.navLeft}>
            <Link className={styles.backLink} href="/#cases">
              Back to portfolio
            </Link>
            <Breadcrumbs
              className={styles.breadcrumbs}
              items={[
                { label: "Home", href: "/" },
                { label: "Cases", href: "/#cases" },
                { label: caseStudy.title },
              ]}
            />
          </div>

          <div className={styles.navRight}>
            <Link className={styles.resumeLink} href="/resume">
              Resume
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </Reveal>

      <section className={styles.hero}>
        <Reveal className={styles.heroLead} variant="fade-up" duration={0.7}>
          <p className={styles.eyebrow}>
            ({caseStudy.number}) {caseStudy.eyebrow}
          </p>
          <h1 className={styles.heroTitle}>{caseStudy.title}</h1>
          <p className={styles.heroSummary}>{caseStudy.summary}</p>
          <p className={styles.heroOutcome}>{caseStudy.outcome}</p>

          <div className={styles.heroTags}>
            {caseStudy.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className={styles.heroRail} variant="fade-up" delay={0.08} duration={0.7}>
          <aside className={styles.proofBox} data-case-proof-box>
            <p className={styles.sectionLabel}>Proof box</p>
            <p className={styles.recruiterRead}>{caseStudy.recruiterRead}</p>

            <div className={styles.metricList}>
              {caseStudy.metrics.map((metric) => (
                <div key={metric.label} className={styles.metricItem}>
                  <span>{metric.value}</span>
                  <strong>{metric.label}</strong>
                  <small>{metric.note}</small>
                </div>
              ))}
            </div>

            <div className={styles.proofActions}>
              <Link className={styles.primaryAction} href="/resume">
                Open resume
              </Link>
              <Link className={styles.secondaryAction} href="/#contact">
                Contact
              </Link>
            </div>
          </aside>

          <div className={styles.imageFrame}>
            <Image
              src={caseStudy.previewImage}
              alt={`${caseStudy.title} preview`}
              fill
              priority
              sizes="(max-width: 960px) 100vw, 42vw"
              className={styles.heroImage}
            />
          </div>
        </Reveal>
      </section>

      <Reveal className={styles.storySection} variant="fade-up" duration={0.7}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>Narrative template</p>
          <h2 className={styles.sectionTitle}>Situation, intervention, proof, result, artifacts, next step.</h2>
        </div>

        <div className={styles.storyGrid}>
          {caseStudy.sections.map((section) => (
            <article key={section.title} className={styles.storyCard}>
              <p className={styles.sectionLabel}>{section.title}</p>
              <ul className={styles.storyList}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}

          <article className={styles.storyCard}>
            <p className={styles.sectionLabel}>Artifacts</p>
            <div className={styles.artifactList}>
              {caseStudy.artifacts.map((artifact) => (
                <a
                  key={artifact.label}
                  className={styles.artifactLink}
                  href={artifact.href}
                  {...getExternalLinkProps(artifact.href)}
                >
                  {artifact.label}
                </a>
              ))}
            </div>
          </article>
        </div>
      </Reveal>

      <Reveal className={styles.navigationFooter} variant="fade-up" duration={0.6}>
        <div className={styles.footerCard}>
          <div>
            <p className={styles.sectionLabel}>Continue reading</p>
            <h2 className={styles.footerTitle}>Move through the appendix or return to the dossier.</h2>
          </div>

          <div className={styles.footerLinks}>
            {adjacent.previous ? (
              <Link className={styles.footerLink} href={`/cases/${adjacent.previous.slug}`}>
                Previous: {adjacent.previous.title}
              </Link>
            ) : (
              <Link className={styles.footerLink} href="/">
                Return to homepage
              </Link>
            )}

            {adjacent.next ? (
              <Link className={styles.footerLink} href={`/cases/${adjacent.next.slug}`}>
                Next: {adjacent.next.title}
              </Link>
            ) : (
              <Link className={styles.footerLink} href="/resume">
                Open resume dossier
              </Link>
            )}
          </div>
        </div>
      </Reveal>
    </main>
  );
}
