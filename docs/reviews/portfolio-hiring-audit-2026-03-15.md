# Portfolio Hiring Audit

Date: 2026-03-15
Repo: `portfolio_true` / `Remgesuu/portfolio_new`

## Summary

This repo already ships a real portfolio, not a draft MVP. The immediate problem is not missing pages or missing theming. The immediate problem is drift between the hiring narrative, the source-of-truth links, and the QA layer that is supposed to protect the site.

Evidence gathered during audit:
- `npm test -- --run`: passed, 23/23 tests
- `npm run build`: passed
- `npx playwright test e2e/accessibility.spec.ts --reporter=line`: 11 failed, 29 passed
- `npx playwright test e2e/navigation.spec.ts --reporter=line`: repeated failures caused by stale routes and stale expectations
- `npx playwright test e2e/case-studies.spec.ts --reporter=line`: repeated failures caused by CSS Modules selector misuse and stale assumptions

The next implementation work should focus on content clarity, recruiter scan quality, and QA trustworthiness before any aesthetic expansion.

## Fast Read

- The portfolio is trying to sell "support-first operator with real systems leverage," but the homepage still makes the reader assemble that identity from multiple fragments.
- The visual system is strong enough already. The weaker part is proof packaging and naming discipline.
- The most urgent operational issue is that the E2E suite no longer reflects the actual site, so future edits cannot be validated confidently.

## Findings

### [CRITICAL] E2E coverage is no longer a trustworthy safety net
Where: [e2e/accessibility.spec.ts](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/e2e/accessibility.spec.ts#L29), [e2e/accessibility.spec.ts](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/e2e/accessibility.spec.ts#L77), [e2e/navigation.spec.ts](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/e2e/navigation.spec.ts#L8), [e2e/navigation.spec.ts](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/e2e/navigation.spec.ts#L40), [e2e/case-studies.spec.ts](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/e2e/case-studies.spec.ts#L15), [e2e/case-studies.spec.ts](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/e2e/case-studies.spec.ts#L55), [e2e/case-studies.spec.ts](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/e2e/case-studies.spec.ts#L119)

Why it hurts:
The QA layer is asserting against stale slugs like `/cases/ai-incident-workflow`, outdated navigation copy like `Cases`, and raw CSS Module class names like `.tag`, `.footerLink`, `.heroImage`, and `.topbar a` that do not exist in runtime DOM. That means future regressions can slip through while the suite fails for the wrong reasons.

Fix:
Rewrite the Playwright suite around stable selectors:
- roles and accessible names
- route URLs and headings
- `href`-based selectors
- explicit `data-testid` attributes only where semantics are not enough

Also update hardcoded route expectations to current slugs and current nav labels.

### [MAJOR] The H1 is too generic for first-scan hiring clarity
Where: [src/content/site-content.ts](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/src/content/site-content.ts#L623), [src/app/page.tsx](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/src/app/page.tsx#L65)

Why it hurts:
`Support systems that scale.` sounds polished, but it does not tell a recruiter who Grigorii is, what role cluster he fits, or why this portfolio is different from a generic ops site. The explicit role claim is demoted into supporting copy, so the first-screen read is weaker than it should be.

Fix:
Promote the real role claim into the H1 or merge the slogan with the role. Keep the current line only if it becomes supporting copy.

Example direction:
- `Technical support and support ops specialist who builds calmer systems with automation.`
- or `AI-enabled support operations specialist for escalation, tooling, and workflow design.`

### [MAJOR] Mobile removes the most explanatory piece of homepage copy
Where: [src/app/page.module.css](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/src/app/page.module.css#L950)

Why it hurts:
On mobile, the hero drops the sentence that explains ticket-noise reduction, operator tooling, and signal packaging. That makes the compact view more slogan-heavy and less convincing right where screen constraints already make interpretation harder.

Fix:
Do not `display: none` the hero description on mobile. Replace it with a shortened mobile variant, line clamp it, or split it into a shorter value proposition and a longer desktop paragraph.

### [MAJOR] Navigation labels are author-centric, not recruiter-centric
Where: [src/content/site-content.ts](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/src/content/site-content.ts#L616)

Why it hurts:
`Work`, `Systems`, and `Fit` require interpretation. A recruiter scanning quickly is looking for direct labels like case studies, projects, resume, and contact. The current labels add cognitive overhead without adding distinction.

Fix:
Rename the nav items to task-shaped language:
- `Case Studies`
- `Projects` or `Technical Work`
- `Role Fit` or `Why Me`
- `Resume`
- `Contact`

### [MAJOR] Homepage proof metrics are strong but under-anchored
Where: [src/content/site-content.ts](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/src/content/site-content.ts#L638), [src/app/page.tsx](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/src/app/page.tsx#L144)

Why it hurts:
The numbers are attention-grabbing, but the homepage does not tell the reader quickly enough where they came from. Without provenance, the strongest proof can read like unsupported marketing metrics rather than earned operational outcomes.

Fix:
Add a short provenance layer near the signals or in the hero panel:
- employer or context
- what period or workflow the number belongs to
- whether the metric came from shipped work, internal tooling, or public-safe packaging

### [MAJOR] The case-study rail spends premium space on generic meta copy
Where: [src/app/cases/[slug]/page.tsx](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/src/app/cases/[slug]/page.tsx#L157)

Why it hurts:
`This is the premium packaging of a public-safe case...` is the same on every case and says more about presentation than about evidence. The rail is one of the highest-value credibility zones on the page, and it currently does not improve understanding of role, scope, constraints, or proof.

Fix:
Replace the generic quick-read paragraph with case-specific fields such as:
- role in the work
- environment or team context
- what is intentionally redacted
- what changed
- why the artifact matters

### [MAJOR] Repo and identity references still point to outdated source-of-truth
Where: [src/content/site-content.ts](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/src/content/site-content.ts#L564), [src/content/site-content.ts](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/src/content/site-content.ts#L603), [src/content/site-content.ts](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/src/content/site-content.ts#L706), [src/app/page.tsx](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/src/app/page.tsx#L134)

Why it hurts:
The portfolio still surfaces `portfolio-v2`, `CodeAvd`, and `CodeAvd/portfolio_v2` in places where the current working source-of-truth is different. This is a credibility leak: a recruiter or reviewer clicking through can land on the wrong artifact and lose confidence in the freshness of the site.

Fix:
Centralize repo and profile display labels in content/meta and remove hardcoded strings from page components. Update every surfaced repo reference to the actual canonical public source.

### [MAJOR] Skip-link behavior is fragile across WebKit-based browsers
Where: [src/components/portfolio/skip-link.tsx](/Users/grisaavdeev/Desktop/digdigdie/portfolio_true/src/components/portfolio/skip-link.tsx#L21)

Why it hurts:
The current skip-link implementation prevents default navigation, manually focuses the target, then smooth-scrolls. Cross-browser test results show that this focus behavior is not stable in WebKit and Mobile Safari, which weakens confidence in keyboard accessibility exactly where the feature is supposed to be most reliable.

Fix:
Prefer native anchor behavior first. If focus management is still needed, set focus without smooth scrolling or defer the scroll separately. Add a stable test that validates the final focused element in Chromium and WebKit.

## Missing Proof

1. Missing: explicit provenance for the top-line metrics  
Why it matters: these are the strongest numbers on the site, but they are not quickly traceable to role/company/timeframe  
Best place to add it: hero panel on home and summary block on resume

2. Missing: per-case role and constraint metadata  
Why it matters: the cases read cleanly, but still underspecify Grigorii's exact role, artifact type, and redaction boundaries  
Best place to add it: case-study rail above metrics or as a small metadata row under the hero

3. Missing: current canonical source link and current portfolio naming  
Why it matters: outdated repo labels undermine trust  
Best place to add it: homepage contact section, resume links, and metadata content

## Quick Wins

- Replace the homepage H1 with an explicit role-and-leverage statement
- Rename nav labels from `Work / Systems / Fit` to recruiter-readable labels
- Replace `portfolio-v2` and old repo links with the current canonical source
- Remove the hardcoded `github.com/CodeAvd` string from the homepage profile panel
- Restore a shortened hero description on mobile instead of hiding it completely

## Structural Fixes

1. Rebuild the Playwright suite around stable selectors and current routes
2. Replace generic case-rail copy with case-specific credibility metadata
3. Add metric provenance across home and resume so the strongest proof does not float without context
4. Reconcile all public labels and links with the actual source-of-truth repo and profile identity

## Normalized Backlog

### Positioning / content

- [MAJOR] Rewrite the homepage H1 to surface the actual role claim first
- [MAJOR] Add provenance to the homepage hero metrics
- [MAJOR] Replace generic case quick-read copy with case-specific evidence framing
- [MAJOR] Update stale repo/profile labels in homepage, resume, and contact content

### Recruiter scan / IA

- [MAJOR] Rename homepage nav labels to recruiter-readable labels
- [MAJOR] Restore explanatory hero copy on mobile instead of hiding it

### Visual system / surface issues

- [MAJOR] Reclaim the case-study rail as a proof surface rather than a meta-design surface

### Implementation consistency / cleanup

- [CRITICAL] Rewrite stale Playwright selectors and route expectations
- [MAJOR] Fix skip-link focus behavior for WebKit and Mobile Safari
- [MINOR] Clean local duplicate `* 2.*` files in a separate cleanup pass so search results stop drifting during implementation

## Recommended Pass Order

### Pass A - Positioning and proof

- homepage H1
- hero metrics provenance
- stale repo/profile labels
- case rail metadata

### Pass B - Homepage / case / resume hierarchy

- nav labels
- mobile hero copy
- resume link labeling consistency

### Pass C - Theme and surfaces

- only after Pass A and Pass B are done
- use `portfolio-theme-adapter.mdc` for token delta and surface rules, not a full redesign

### Pass D - Cleanup, accessibility, tests

- skip-link stabilization
- Playwright selector rewrite
- outdated route expectation removal
- local duplicate file cleanup

## Direction Gate

Do not run a full direction-composer pass yet unless the portfolio still feels too vague after Pass A and Pass B. Right now the bigger problem is clarity and QA drift, not lack of aesthetic personality.
