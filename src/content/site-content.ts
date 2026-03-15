import type {
  CaseStudy,
  ContactSection,
  HomeContent,
  ProjectProof,
  PromptPack,
  ResumeContent,
  ResumeExperience,
  ResumeHighlight,
  ResumeProject,
  RoleFitSection,
  SiteContent,
  SkillGroup,
  SystemsSection,
} from "@/content/types";

const caseStudies: CaseStudy[] = [
  {
    slug: "darkest-afk",
    number: "01",
    eyebrow: "Support systems design",
    title: "Darkest AFK compensation workflow",
    summary:
      "Built a bilingual operator tool that turned repetitive compensation handling into a calmer, repeatable workflow.",
    outcome:
      "Recovery work became faster to prepare, easier to repeat, and cleaner to hand off without lookup noise.",
    recruiterRead:
      "Best read as proof of operator tooling, support-process design, and the ability to package a noisy internal task into a stable artifact.",
    previewImage: "/images/cases/project-darkest-afk.svg",
    tags: [
      "112+ indexed items",
      "Bilingual operator UX",
      "Standardized package prep",
    ],
    metrics: [
      {
        label: "Indexed items",
        value: "112+",
        note: "Single searchable catalog for repetitive recovery work.",
      },
      {
        label: "Operator UX",
        value: "Bilingual",
        note: "Made the tool legible for cross-language internal use.",
      },
      {
        label: "Preparation",
        value: "Standardized",
        note: "Reduced variation in how compensation packages were assembled.",
      },
    ],
    quickFacts: [
      {
        label: "Role",
        value: "Customer Success Lead packaging an internal operator workflow into a stable artifact.",
      },
      {
        label: "Context",
        value: "High-volume game support work with repetitive compensation handling and cross-language operators.",
      },
      {
        label: "Redaction",
        value: "Internal tooling logic is abstracted, but the workflow structure and results stay visible.",
      },
      {
        label: "Outcome",
        value: "Faster, calmer, more consistent package preparation without lookup noise.",
      },
    ],
    mediaAspect: "portrait",
    heroTreatment: {
      label: "Flagship support systems chapter",
      note: "The cleanest proof of workflow design, operator empathy, and support-to-system translation.",
    },
    sections: [
      {
        title: "Situation",
        items: [
          "Support and admin workflows needed a faster, safer way to prepare compensation packages without repeated manual lookup and formatting.",
          "The same recovery motions were happening again and again, but the workflow had no dedicated operator artifact.",
        ],
      },
      {
        title: "Intervention",
        items: [
          "Built a static bilingual tool with search, filtering, clearer item metadata, and standardized package-prep logic.",
          "Designed the experience around repetitive internal support work rather than presentation-only browsing.",
        ],
      },
      {
        title: "Proof",
        items: [
          "112+ indexed items were packaged into one operator-facing catalog.",
          "The workflow became easier to repeat consistently without relying on memory or scattered references.",
        ],
      },
      {
        title: "Result",
        items: [
          "Recovery handling became cleaner, calmer, and more legible to the people doing the work.",
          "The project became public-safe proof of support tooling and process thinking.",
        ],
      },
      {
        title: "Next step",
        items: [
          "Measure package-prep time before and after tool adoption.",
          "Track formatting mistakes and repeat corrections to quantify consistency gains.",
        ],
      },
    ],
    artifacts: [
      {
        label: "Legacy public case page",
        href: "https://codeavd.github.io/Portfolio/cases/darkest-afk.html",
      },
      {
        label: "Original one-pager on GitHub",
        href: "https://github.com/CodeAvd/Portfolio/blob/main/case_01_darkest_afk_one_pager_en.md",
      },
    ],
  },
  {
    slug: "dig-dig-die",
    number: "02",
    eyebrow: "Feedback intelligence",
    title: "Dig Dig Die escalation-ready feedback view",
    summary:
      "Structured fragmented community feedback into an escalation artifact that support, product, and execution teams could actually use.",
    outcome:
      "Raw complaints became a concise, prioritized view with repeat themes and less duplication across conversations.",
    recruiterRead:
      "Best read as support-to-product packaging: noisy user sentiment translated into a shared artifact with clearer next actions.",
    previewImage: "/images/cases/project-dig-dig-die.svg",
    tags: ["23 structured items", "6 critical issues", "3 repeat themes"],
    metrics: [
      {
        label: "Structured items",
        value: "23",
        note: "Fragmented player reports turned into one readable issue map.",
      },
      {
        label: "Critical issues",
        value: "6",
        note: "Clear top-priority items surfaced from public noise.",
      },
      {
        label: "Repeat themes",
        value: "3",
        note: "Helped collapse duplicates into decision-ready clusters.",
      },
    ],
    quickFacts: [
      {
        label: "Role",
        value: "Structured fragmented community sentiment into an escalation artifact for support and product conversations.",
      },
      {
        label: "Context",
        value: "Public bug and UX complaints spread across Steam, Discord, and community channels.",
      },
      {
        label: "Redaction",
        value: "Raw community detail is condensed into repeat themes and decision-ready framing.",
      },
      {
        label: "Outcome",
        value: "Shared reading of 23 structured items, 6 critical issues, and 3 repeat themes.",
      },
    ],
    mediaAspect: "square",
    heroTreatment: {
      label: "Feedback intelligence case",
      note: "Best read as support-to-product packaging rather than a generic research deck.",
    },
    sections: [
      {
        title: "Situation",
        items: [
          "Steam, Discord, and community reports contained recurring bug and UX signals, but the feedback was fragmented and duplicated across channels.",
          "Support and product conversations were slower because the same complaints kept arriving in different formats.",
        ],
      },
      {
        title: "Intervention",
        items: [
          "Clustered raw feedback into repeat issue groups and simple priority framing.",
          "Packed the result into an escalation view that could move from support to product without re-reading the same noise.",
        ],
      },
      {
        title: "Proof",
        items: [
          "23 structured items made the volume of player pain legible.",
          "6 critical issues and 3 repeat themes gave the team a shared reading instead of fragmented anecdotes.",
        ],
      },
      {
        title: "Result",
        items: [
          "Faster path from public complaints to structured escalation.",
          "Less duplication between support, product, and execution conversations.",
        ],
      },
      {
        title: "Next step",
        items: [
          "Track whether structured escalations shorten prioritization discussions.",
          "Repeat the same workflow for another noisy signal set to validate the packaging model.",
        ],
      },
    ],
    artifacts: [
      {
        label: "Legacy public case page",
        href: "https://codeavd.github.io/Portfolio/cases/dig-dig-die.html",
      },
      {
        label: "Original one-pager on GitHub",
        href: "https://github.com/CodeAvd/Portfolio/blob/main/case_03_dig_dig_die_one_pager_en.md",
      },
    ],
  },
  {
    slug: "vacation-cafe",
    number: "03",
    eyebrow: "Retention and friction analysis",
    title: "Vacation Cafe player-friction analysis",
    summary:
      "Turned scattered player-friction signals into retention-oriented hypotheses a product team could review quickly.",
    outcome:
      "Community pain points became named patterns, clearer language, and short-loop experiments instead of scattered anecdotes.",
    recruiterRead:
      "Best read as hypothesis framing and signal interpretation: public-facing pain converted into compact decision support.",
    previewImage: "/images/cases/project-vacation-cafe.svg",
    tags: [
      "6-8h friction signal",
      "Level 4-5 complexity spike",
      "Short-loop hypotheses",
    ],
    metrics: [
      {
        label: "Friction signal",
        value: "6-8h",
        note: "A repeat pain point appeared later in the player journey.",
      },
      {
        label: "Complexity spike",
        value: "Level 4-5",
        note: "A clear shift in difficulty changed the feel of the loop.",
      },
      {
        label: "Experiments",
        value: "Short-loop",
        note: "The output was framed for fast review, not long theory documents.",
      },
    ],
    quickFacts: [
      {
        label: "Role",
        value: "Turned scattered player-friction reports into retention-oriented hypotheses and product questions.",
      },
      {
        label: "Context",
        value: "Signals arrived as public community complaints rather than formal internal analytics.",
      },
      {
        label: "Redaction",
        value: "The public-safe version preserves the logic and proof without exposing internal review flows.",
      },
      {
        label: "Outcome",
        value: "Community pain became named patterns, concise language, and short-loop experiment directions.",
      },
    ],
    mediaAspect: "portrait",
    heroTreatment: {
      label: "Retention and friction analysis",
      note: "A lightweight decision-support artifact, not a long-form product strategy deck.",
    },
    sections: [
      {
        title: "Situation",
        items: [
          "Community and market feedback described points where the cozy loop started to feel repetitive or mechanically heavy.",
          "The pain was real, but it was scattered across channels and not yet translated into testable next steps.",
        ],
      },
      {
        title: "Intervention",
        items: [
          "Grouped repeat complaints into friction patterns instead of isolated anecdotes.",
          "Mapped those patterns to retention and session-quality questions a product team could review quickly.",
        ],
      },
      {
        title: "Proof",
        items: [
          "A repeat friction signal appeared around 6-8 hours for part of the player base.",
          "Complexity increased near Level 4-5 and changed the feel of the loop for some players.",
        ],
      },
      {
        title: "Result",
        items: [
          "Clearer public example of player-friction analysis and hypothesis framing.",
          "Better language for turning user pain into support-to-product escalation material.",
        ],
      },
      {
        title: "Next step",
        items: [
          "Test whether the same framework helps in a SaaS onboarding or help-center context.",
          "Condense the analysis into an even tighter operating memo format.",
        ],
      },
    ],
    artifacts: [
      {
        label: "Legacy public case page",
        href: "https://codeavd.github.io/Portfolio/cases/vacation-cafe.html",
      },
      {
        label: "Original one-pager on GitHub",
        href: "https://github.com/CodeAvd/Portfolio/blob/main/case_02_vacation_cafe_one_pager_en.md",
      },
    ],
  },
];

const systemsProofItems: ProjectProof[] = [
  {
    title: "Jarvis v1",
    eyebrow: "AI workflow system",
    summary:
      "Telegram-first assistant with Obsidian memory, SQLite state, Chroma retrieval, and typed LLM outputs through a practical personal ops workflow.",
    impact:
      "Shows shipped builder proof in Python, FastAPI, aiogram, SQLite, local retrieval, and LLM orchestration without pretending it is enterprise product scale.",
    href: "https://github.com/CodeAvd/jarvis",
    linkLabel: "Open GitHub repo",
    stack: [
      "Python",
      "FastAPI",
      "SQLite",
      "Chroma",
      "aiogram",
      "LiteLLM",
    ],
    level: "shipped",
  },
  {
    title: "Vacation Dashboard React",
    eyebrow: "Frontend signal packaging",
    summary:
      "Next.js dashboard package that turns noisy player feedback into triage tables, risk slices, and decision-ready readouts for support, QA, and product conversations.",
    impact:
      "Shows React, Next.js, TypeScript, bilingual information design, and the ability to package raw user input into a static, usable operating artifact.",
    href: "https://github.com/CodeAvd/vacation_dashboard",
    linkLabel: "Open GitHub repo",
    stack: ["Next.js", "React", "TypeScript", "Dashboard UI", "QA framing"],
    level: "shipped",
  },
];

const resumeHighlights: ResumeHighlight[] = [
  {
    title: "Reduced repetitive support load",
    detail: "Built AI-assisted workflows and tighter routing for trust-sensitive support work.",
    evidence: "45% lower repetitive tier-1 volume in a prior high-volume support environment.",
  },
  {
    title: "Improved response speed without chaos",
    detail: "Used routing, issue tagging, and escalation triage to shorten the path to first answer.",
    evidence: "35% faster first response time.",
  },
  {
    title: "Turned manual ops into systems",
    detail: "Built internal compensation handling and operator artifacts for repeat recovery flows.",
    evidence: "70% lower manual operational load on a failed-transaction compensation workflow.",
  },
];

const resumeSkillGroups: SkillGroup[] = [
  {
    title: "Core operator skills",
    level: "core",
    items: [
      "Support operations",
      "Technical support",
      "Escalation management",
      "Incident handling",
      "Issue reproduction",
      "Feedback intelligence",
      "Knowledge base operations",
      "Cross-functional handoff quality",
    ],
  },
  {
    title: "Technical stack",
    level: "shipped",
    items: [
      "Python",
      "FastAPI",
      "SQLite",
      "Next.js",
      "React",
      "TypeScript",
      "HTML/CSS/JS",
      "Webhook-based automation",
      "Telegram bot workflows",
      "LLM orchestration",
    ],
    note:
      "Technical claims are grounded in shipped side-project work and automation-heavy support systems, not inflated senior-engineer signaling.",
  },
  {
    title: "Working knowledge",
    level: "working-knowledge",
    items: [
      "SQL",
      "Pandas",
      "Vector retrieval / Chroma",
      "QA regression thinking",
      "Product signal clustering",
    ],
  },
];

const resumeExperience: ResumeExperience[] = [
  {
    company: "Heapp Games",
    title: "Customer Success Lead",
    period: "Jan 2024 - Current",
    bullets: [
      "Turned fragmented player and community feedback into a Dig Dig Die escalation view with 23 structured priorities, 6 critical issues, and clearer routing between support, product, and execution.",
      "Built a bilingual Darkest AFK recovery tool with 112+ indexed items and standardized package-prep logic, reducing repetitive operator work and making compensation handling more consistent.",
      "Translated recurring Vacation Cafe friction signals into backlog-ready hypotheses and decision support for product conversations without exposing internal-only workflow detail.",
    ],
  },
  {
    company: "Mover Bridge (Aptos Ecosystem)",
    title: "Customer Success Lead / Senior Support Specialist",
    period: "Sep 2022 - Dec 2023",
    bullets: [
      "Reduced repetitive tier-1 volume by 45% by implementing AI-assisted support workflows and tightening the knowledge base around recurring bridge, wallet, and transaction issues.",
      "Improved first response time by 35% through webhook-based routing, issue tagging, and escalation triage tied to trust-sensitive transaction troubleshooting.",
      "Built an internal failed-transaction compensation workflow that cut manual operational load by 70% while improving consistency in recovery handling.",
      "Investigated and resolved high-stakes incidents involving wallets, stuck transactions, and user funds while keeping communication clear during stressful user-facing recovery cases.",
    ],
  },
  {
    company: "Phaver / CoinList / Mover",
    title: "Community & Customer Success Manager",
    period: "Jan 2021 - Aug 2022",
    bullets: [
      "Managed launch, onboarding, and high-volume support communication across Web3 products and time-sensitive token events.",
      "Guided non-technical users through wallets, KYC, deposits, and first-use troubleshooting by turning complex product behavior into clear support guidance.",
      "Protected 10,000+ member communities with moderation, anti-scam hygiene, and cleaner onboarding communication.",
    ],
  },
];

const resumeProjects: ResumeProject[] = [
  {
    title: "Darkest AFK",
    note:
      "Bilingual operator tool with 112+ indexed items for faster compensation handling and repeatable recovery workflows.",
    href: "/cases/darkest-afk",
  },
  {
    title: "Dig Dig Die",
    note:
      "Feedback intelligence pack that turned noisy community signals into 23 structured priorities and 6 critical issues.",
    href: "/cases/dig-dig-die",
  },
  {
    title: "Jarvis v1",
    note:
      "Telegram-first assistant with FastAPI, SQLite, Chroma, and typed LLM flows shipped as a working personal ops system.",
    href: "https://github.com/CodeAvd/jarvis",
  },
  {
    title: "Vacation Dashboard React",
    note:
      "Next.js / React dashboard package for packaging player feedback, risk, and triage into decision-ready views.",
    href: "https://github.com/CodeAvd/vacation_dashboard",
  },
];

const homeContent: HomeContent = {
  hero: {
    eyebrow: "Support-first. Systems-shaped. Recruiter-ready.",
    title: "Technical support specialist building calmer systems.",
    accessibleTitle: "Technical support specialist building calmer systems.",
    titleLead: "Technical support specialist",
    titleBridge: "building calmer",
    typewriterWords: ["clarity", "evidence", "handoffs", "systems"],
    description:
      "I turn repeated support pain into clearer workflows, stronger escalations, and public-safe proof a recruiter can scan in one sitting.",
    positioning:
      "Technical support, support operations, escalation management, and AI-enabled internal workflow design.",
    ctas: [
      { label: "Resume", href: "/resume", variant: "primary" },
      { label: "Contact", href: "#contact", variant: "secondary" },
    ],
    availability:
      "Remote-first and interview-ready for support ops, technical support, escalation-heavy support, and AI-adjacent operations roles.",
    note:
      "This site is designed to feel cinematic on first contact and disciplined on the second read.",
    proofLine:
      "45% lower repetitive tier-1 volume / 35% faster first response / 70% less manual ops load",
    signals: [
      {
        value: "45%",
        label: "lower repetitive tier-1 volume",
        context: "From AI-assisted workflows and tighter knowledge-base routing in a prior high-volume support environment.",
      },
      {
        value: "35%",
        label: "faster first response time",
        context: "Delivered through cleaner issue tagging, escalation triage, and routing discipline.",
      },
      {
        value: "70%",
        label: "less manual ops load",
        context: "Measured on an internal compensation workflow reworked into a repeatable support system.",
      },
    ],
    scene: {
      label: "Scene 01",
      title: "Support systems dossier",
      caption:
        "A studio-white dossier sequence that turns hidden support complexity into a visible operating story.",
      poster: "/scroll-sequences/dossier/book-poster-start.jpg",
      posterEnd: "/scroll-sequences/dossier/book-poster-end.jpg",
      posterAlt:
        "Studio-white archival dossier sequence showing a closed book opening into an exploded support systems diagnosis.",
      sources: [
        {
          src: "/scroll-sequences/dossier/book-sequence.mp4",
          type: "video/mp4",
        },
        {
          src: "/scroll-sequences/dossier/book-sequence.webm",
          type: "video/webm",
        },
      ],
      sequence: {
        manifest: "/scroll-sequences/dossier/manifest.json",
        framesDir: "/scroll-sequences/dossier/frames",
      },
      stages: [
        {
          label: "Closed dossier",
          start: 0,
          end: 0.2,
          copy: "Turning support noise into evidence",
        },
        {
          label: "Opening reveal",
          start: 0.2,
          end: 0.4,
          copy: "Manual routing, payment friction, and unclear ownership start to surface.",
        },
        {
          label: "Exploded diagnosis",
          start: 0.4,
          end: 0.6,
          copy: "Under pressure, broken handoffs and hidden operational debt become visible.",
        },
        {
          label: "Ordered intervention",
          start: 0.6,
          end: 0.8,
          copy: "I redesign routing, ownership, and support flows into a clearer operating system.",
        },
        {
          label: "Resolved state",
          start: 0.8,
          end: 1,
          copy: "The result is calmer operations, clearer decisions, and a more stable customer experience.",
        },
      ],
      duration: 12.166667,
      pinRange: 2.6,
      mobileBehavior: "poster",
      reducedMotionFallback: "poster",
    },
  },
  bridge: {
    eyebrow: "Transition / thesis bridge",
    title: "Support credibility first. Systems leverage immediately after.",
    intro:
      "The point is not to look like an agency portfolio. The point is to make support proof feel decisive, contemporary, and easy to trust.",
    detail:
      "The strongest signal here is repeated operator work translated into cleaner tooling, cleaner escalation handoffs, and artifacts that product or ops teams can actually use.",
    cta: {
      label: "See selected proof",
      href: "#cases",
      variant: "secondary",
    },
  },
  featuredCases: ["darkest-afk", "dig-dig-die", "vacation-cafe"],
  capabilities: {
    eyebrow: "What I actually do",
    title: "Three capability pillars recruiters can verify fast.",
    intro:
      "The site leads with visual confidence, but the hiring read is still anchored in a small set of repeatable operating strengths.",
    items: [
      {
        eyebrow: "Escalation systems",
        title: "Calmer paths through messy, trust-sensitive support work",
        description:
          "Issue framing, escalation routing, and operator structure that reduce confusion when the underlying situation is noisy.",
        proof:
          "Best evidenced by the Dig Dig Die escalation view and prior transaction-heavy support operations.",
        href: "/cases/dig-dig-die",
      },
      {
        eyebrow: "Operator tooling",
        title: "Internal tools that make repetitive recovery work less manual",
        description:
          "Workflow packaging, bilingual operator UX, and repeatable artifacts designed for the people doing the work every day.",
        proof:
          "Best evidenced by Darkest AFK and the 70% lower manual ops load compensation workflow.",
        href: "/cases/darkest-afk",
      },
      {
        eyebrow: "Feedback intelligence",
        title: "Signal packaging that moves user pain toward action",
        description:
          "Clustered complaints, named patterns, and public-safe analysis that turns fragmented noise into a shared decision surface.",
        proof:
          "Best evidenced by Vacation Cafe and the cross-functional packaging style used across the case studies.",
        href: "/cases/vacation-cafe",
      },
    ],
  },
  trustStrip: {
    eyebrow: "Recruiter snapshot",
    title: "The short hiring read.",
    intro:
      "If you are hiring for support systems, escalations, or AI-enabled internal workflows, this is the fast scan.",
    metrics: [
      {
        value: "45%",
        label: "lower repetitive tier-1 volume",
        note: "Achieved through AI-assisted workflows and tighter routing.",
      },
      {
        value: "35%",
        label: "faster first response time",
        note: "Driven by clearer issue tagging and escalation design.",
      },
      {
        value: "70%",
        label: "less manual operational load",
        note: "Measured on a compensation workflow that previously required repetitive handling.",
      },
      {
        value: "112+",
        label: "indexed support items",
        note: "Packaged into a bilingual operator tool for compensation handling.",
      },
    ],
    snapshot: {
      eyebrow: "Hiring view",
      title: "What this profile is strongest at",
      intro:
        "Support-first credibility with wider systems leverage. The builder read is real, but it stays secondary to operator proof.",
      items: [
        {
          label: "Primary fit",
          value: "Support ops, technical support, incident-heavy support, escalation pipelines",
        },
        {
          label: "Operating style",
          value: "Calm, systems-minded, proof-led, and practical under messy user-facing pressure",
        },
        {
          label: "Differentiator",
          value: "Can package noisy support reality into artifacts product, QA, and ops can actually act on",
        },
        {
          label: "Location",
          value: "Russia / Remote",
        },
      ],
      note:
        "Public-safe examples only. Internal workflow detail is abstracted, but the logic, metrics, and evidence remain visible.",
    },
  },
  flagship: {
    eyebrow: "Flagship case chapter",
    title: "One example where support work became product-grade proof.",
    intro:
      "Darkest AFK is the clearest demonstration of operator tooling, workflow packaging, and evidence-led case narration.",
    caseSlug: "darkest-afk",
    summary:
      "A compensation-heavy support task was reframed as a repeatable artifact: searchable, bilingual, and easier to execute without internal noise.",
    bullets: [
      "Shows operator empathy without becoming soft or vague.",
      "Proves systems thinking through a concrete internal workflow.",
      "Reads well for support leaders, product-minded operators, and hiring managers scanning quickly.",
    ],
    scene: {
      label: "Scene 02",
      title: "Flagship chapter",
      caption:
        "A film-still treatment for the strongest case, designed to feel premium without hiding the proof.",
      poster: "/images/cases/project-darkest-afk.svg",
      posterAlt: "Illustrated poster frame for the Darkest AFK case study.",
      sources: [],
      duration: 12,
      pinRange: 1.9,
      mobileBehavior: "poster",
      reducedMotionFallback: "poster",
    },
    ctas: [
      {
        label: "Open flagship case",
        href: "/cases/darkest-afk",
        note: "Read the full narrative with proof box, artifacts, and next-step framing.",
      },
      {
        label: "Open resume",
        href: "/resume",
        note: "Jump directly into the hiring dossier if you already understand the visual pitch.",
      },
    ],
  },
  caseGrid: {
    eyebrow: "Proof appendix",
    title: "Three public-safe cases, each packaged for fast reading.",
    intro:
      "Each case keeps a strict narrative format: situation, intervention, proof, result, and next step.",
  },
  resumePreview: {
    eyebrow: "Resume preview",
    title: "What the dossier says when the visuals stop.",
    intro:
      "The portfolio carries the visual hook. The resume page closes the conversion with direct hiring language, evidence, and printable structure.",
    highlights: resumeHighlights,
  },
  finalCta: {
    eyebrow: "Final CTA",
    title: "If you need support credibility with stronger systems leverage, the next step is simple.",
    intro:
      "Open the resume for the strict hiring read, or go straight to contact if the fit is already clear.",
    ctas: [
      { label: "Open resume", href: "/resume", variant: "primary" },
      { label: "Contact", href: "#contact", variant: "secondary" },
    ],
    note:
      "The site is intentionally two-speed: memorable first impression, disciplined proof on the second read.",
    meta: [
      {
        label: "GitHub",
        value: "github.com/CodeAvd",
        href: "https://github.com/CodeAvd",
      },
      {
        label: "Location",
        value: "Russia / Remote",
      },
      {
        label: "Availability",
        value: "Interview-ready now",
      },
    ],
  },
};

const systemsSection: SystemsSection = {
  eyebrow: "Systems proof",
  title: "Builder evidence that supports the operator claim.",
  intro:
    "These projects are not there to cosplay as a software engineer portfolio. They prove the stack behind the workflow claims.",
  items: systemsProofItems,
};

const roleFitSection: RoleFitSection = {
  eyebrow: "Recruiter fit",
  title: "Where this profile lands best.",
  intro:
    "The strongest read is still support-first, but with better leverage in automation, internal tooling, and signal packaging.",
  items: [
    {
      eyebrow: "Support systems",
      title: "Workflow automation and operator tooling",
      description:
        "Repeatable recovery flows, internal tools, and lower-friction processes where consistency matters as much as speed.",
    },
    {
      eyebrow: "Escalation quality",
      title: "Incident handling and issue reproduction",
      description:
        "Trust-sensitive cases, clearer issue reproduction, and cleaner handoffs between support, QA, product, and engineering.",
    },
    {
      eyebrow: "Signal packaging",
      title: "Feedback intelligence and AI leverage",
      description:
        "LLM-assisted workflows, structured feedback clustering, and artifacts that help teams act faster instead of rereading the same noise.",
    },
  ],
};

const contactSection: ContactSection = {
  eyebrow: "Contact",
  title: "Open to remote-first roles where support work has operational weight.",
  intro:
    "Especially strong fit for technical support, support ops, escalation-heavy environments, trust-sensitive workflows, and AI-enabled internal tooling.",
  links: [
    {
      label: "Email",
      value: "grigorii584@gmail.com",
      href: "mailto:grigorii584@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/CodeAvd",
      href: "https://github.com/CodeAvd",
    },
    {
      label: "Resume",
      value: "Public resume",
      href: "/resume",
    },
    {
      label: "Portfolio source",
      value: "github.com/CodeAvd/portfolio_v3",
      href: "https://github.com/CodeAvd/portfolio_v3",
    },
    {
      label: "Location",
      value: "Russia | Remote",
    },
  ],
};

const promptPack: PromptPack = {
  documents: [
    {
      title: "Concept brief",
      purpose: "Defines the editorial cinema direction and the dual role of the site as showcase plus trust document.",
      path: "/docs/prompts/concept-brief.md",
    },
    {
      title: "Home generation prompt",
      purpose: "Generates or critiques the home page against showcase and recruiter-conversion goals.",
      path: "/docs/prompts/home-generation.md",
    },
    {
      title: "Resume generation prompt",
      purpose: "Generates or critiques the resume page as a premium hiring dossier.",
      path: "/docs/prompts/resume-generation.md",
    },
    {
      title: "Critique rubric",
      purpose: "Scores visuals, clarity, proof, narrative quality, and CTA persuasiveness.",
      path: "/docs/prompts/critique-rubric.md",
    },
    {
      title: "Revision prompt",
      purpose: "Turns critique output into a concrete next iteration request.",
      path: "/docs/prompts/revision-prompt.md",
    },
  ],
  critiqueWeights: {
    visualDistinction: 25,
    profileClarity: 25,
    proofOfCompetence: 20,
    caseNarrative: 15,
    ctaPersuasiveness: 15,
  },
  reviewEvidenceChecklist: [
    "State what a recruiter sees above the fold in concrete terms, not vague impressions.",
    "List which proof signals are visible before the second scroll.",
    "Name the dominant CTA and explain whether it is obvious without hunting.",
    "Call out what improves trust versus what only improves aesthetics.",
    "Point to any motion or visuals that interfere with scanning or clarity.",
  ],
};

const resumeContent: ResumeContent = {
  headline:
    "Support systems operator with technical support, escalation, and AI workflow leverage.",
  summary:
    "Support operations and technical support specialist with 3.5+ years across Web3, FinTech, gamedev, and customer-facing operations. Reduced repetitive tier-1 volume by 45%, improved first response time by 35%, and cut manual operational load by 70% through automation, routing, and internal tooling. Strong in escalation management, incident communication, knowledge base improvement, feedback intelligence, and turning repeated support pain into calmer systems.",
  contactNote:
    "Russia | Remote | grigorii584@gmail.com | +7-988-492-9938",
  languages: "Russian (native), English (B2)",
  contactLinks: [
    {
      label: "GitHub",
      value: "github.com/CodeAvd",
      href: "https://github.com/CodeAvd",
    },
    {
      label: "Portfolio",
      value: "premium portfolio",
      href: "/",
    },
    {
      label: "Email",
      value: "grigorii584@gmail.com",
      href: "mailto:grigorii584@gmail.com",
    },
  ],
  snapshot: homeContent.trustStrip.snapshot,
  highlights: resumeHighlights,
  skillGroups: resumeSkillGroups,
  experience: resumeExperience,
  selectedProjects: resumeProjects,
  education: [
    {
      title: "Volgograd State Medical University",
      detail: "General Medicine, 2019-2024",
    },
    {
      title: "QA Engineer Training",
      detail: "Manual testing, bug tracking, SDLC fundamentals",
    },
  ],
};

export const siteContent: SiteContent = {
  meta: {
    name: "Grigorii",
    role: "Support systems operator for technical support, escalations, and AI-enabled workflows",
    location: "Russia | Remote",
    email: "grigorii584@gmail.com",
    phone: "+7-988-492-9938",
    githubUrl: "https://github.com/CodeAvd",
    portfolioRepoUrl: "https://github.com/CodeAvd/portfolio_v3",
    legacyPortfolioUrl: "https://codeavd.github.io/Portfolio/",
    resumeUrl: "/resume",
  },
  profileMedia: {
    src: "/images/profile/grigorii-portrait.png",
    alt: "Portrait of Grigorii against a warm city skyline at sunset.",
    width: 1792,
    height: 2400,
  },
  description:
    "Premium portfolio and hiring dossier for Grigorii, focused on technical support, escalation systems, workflow automation, and public-safe proof.",
  nav: [
    { label: "Cases", href: "#cases" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "#contact" },
  ],
  home: homeContent,
  systems: systemsSection,
  roleFit: roleFitSection,
  contact: contactSection,
  footer:
    "Designed as a premium first impression that still behaves like a disciplined hiring document on the second read.",
  resume: resumeContent,
  promptPack,
  caseStudies,
};

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug) ?? null;
}

export function getAdjacentCaseStudies(slug: string) {
  const index = caseStudies.findIndex((caseStudy) => caseStudy.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: caseStudies[index - 1] ?? null,
    next: caseStudies[index + 1] ?? null,
  };
}
