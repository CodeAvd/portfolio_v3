export type ProofLevel = "core" | "shipped" | "working-knowledge";

export type SiteMeta = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  portfolioRepoUrl: string;
  legacyPortfolioUrl: string;
  resumeUrl: string;
};

export type ProfileMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ActionLink = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type SignalPill = {
  value: string;
  label: string;
};

export type TrustMetric = {
  value: string;
  label: string;
  note: string;
};

export type ProofMetric = {
  label: string;
  value: string;
  note: string;
};

export type RoleFitItem = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href?: string;
};

export type ScrollSource = {
  src: string;
  type: "video/mp4" | "video/webm";
};

export type ScrollScene = {
  label: string;
  title: string;
  caption: string;
  poster: string;
  posterAlt: string;
  sources: ScrollSource[];
  duration: number;
  pinRange: number;
  mobileBehavior: "poster" | "inline-video";
  reducedMotionFallback: "poster" | "first-frame";
};

export type RecruiterSnapshotItem = {
  label: string;
  value: string;
};

export type RecruiterSnapshot = {
  eyebrow: string;
  title: string;
  intro: string;
  items: RecruiterSnapshotItem[];
  note: string;
};

export type SkillGroup = {
  title: string;
  level: ProofLevel;
  items: string[];
  note?: string;
};

export type ProjectProof = {
  title: string;
  eyebrow: string;
  summary: string;
  impact: string;
  href: string;
  linkLabel: string;
  stack: string[];
  level: ProofLevel;
};

export type ResumeHighlight = {
  title: string;
  detail: string;
  evidence: string;
  href?: string;
};

export type FlagshipCaseCTA = {
  label: string;
  href: string;
  note: string;
};

export type ArtifactLink = {
  label: string;
  href: string;
};

export type CaseStudySection = {
  title: string;
  items: string[];
};

export type CaseStudy = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  summary: string;
  outcome: string;
  recruiterRead: string;
  previewImage: string;
  tags: string[];
  metrics: ProofMetric[];
  sections: CaseStudySection[];
  artifacts: ArtifactLink[];
};

export type ResumeExperience = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

export type ResumeProject = {
  title: string;
  note: string;
  href: string;
};

export type ResumeEducation = {
  title: string;
  detail: string;
};

export type PromptScoreWeights = {
  visualDistinction: number;
  profileClarity: number;
  proofOfCompetence: number;
  caseNarrative: number;
  ctaPersuasiveness: number;
};

export type PromptDocument = {
  title: string;
  purpose: string;
  path: string;
};

export type PromptPack = {
  documents: PromptDocument[];
  critiqueWeights: PromptScoreWeights;
  reviewEvidenceChecklist: string[];
};

export type ResumeContent = {
  headline: string;
  summary: string;
  contactNote: string;
  languages: string;
  contactLinks: ContactLink[];
  snapshot: RecruiterSnapshot;
  highlights: ResumeHighlight[];
  skillGroups: SkillGroup[];
  experience: ResumeExperience[];
  selectedProjects: ResumeProject[];
  education: ResumeEducation[];
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    positioning: string;
    ctas: ActionLink[];
    availability: string;
    note: string;
    proofLine: string;
    scene: ScrollScene;
  };
  trustStrip: {
    eyebrow: string;
    title: string;
    intro: string;
    metrics: TrustMetric[];
    snapshot: RecruiterSnapshot;
  };
  flagship: {
    eyebrow: string;
    title: string;
    intro: string;
    caseSlug: string;
    summary: string;
    bullets: string[];
    scene: ScrollScene;
    ctas: FlagshipCaseCTA[];
  };
  caseGrid: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  resumePreview: {
    eyebrow: string;
    title: string;
    intro: string;
    highlights: ResumeHighlight[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    intro: string;
    ctas: ActionLink[];
    note: string;
  };
};

export type SystemsSection = {
  eyebrow: string;
  title: string;
  intro: string;
  items: ProjectProof[];
};

export type RoleFitSection = {
  eyebrow: string;
  title: string;
  intro: string;
  items: RoleFitItem[];
};

export type ContactSection = {
  eyebrow: string;
  title: string;
  intro: string;
  links: ContactLink[];
};

export type SiteContent = {
  meta: SiteMeta;
  profileMedia: ProfileMedia;
  description: string;
  nav: NavItem[];
  home: HomeContent;
  systems: SystemsSection;
  roleFit: RoleFitSection;
  contact: ContactSection;
  footer: string;
  resume: ResumeContent;
  promptPack: PromptPack;
  caseStudies: CaseStudy[];
};
