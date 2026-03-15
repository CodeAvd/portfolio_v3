import { expect, test } from "@playwright/test";

test.describe("Responsive Design", () => {
  test.describe("Desktop (1280px)", () => {
    test.use({ viewport: { width: 1280, height: 900 } });

    test("hero shows editorial copy and sequence together", async ({ page }) => {
      await page.goto("/");

      await expect(page.locator("[data-home-hero] h1")).toBeVisible();
      await expect(page.locator("[data-home-hero] [data-scroll-sequence]").first()).toBeVisible();
    });

    test("trust strip and dossier preview are visible on desktop", async ({ page }) => {
      await page.goto("/");

      await expect(page.locator("[data-trust-strip]")).toBeVisible();
      await expect(page.locator("[data-resume-preview]")).toBeVisible();
    });

    test("brand role remains visible on desktop", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("text=Support systems operator for technical support")).toBeVisible();
    });
  });

  test.describe("Tablet (768px)", () => {
    test.use({ viewport: { width: 768, height: 1024 } });

    test("hero still renders CTA and scroll scene", async ({ page }) => {
      await page.goto("/");

      await expect(page.locator("[data-home-hero]")).toBeVisible();
      await expect(page.locator("[data-primary-cta='true']")).toBeVisible();
      await expect(page.locator("[data-scroll-sequence]").first()).toBeVisible();
    });

    test("flagship chapter remains readable", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("[data-flagship-chapter]")).toBeVisible();
    });
  });

  test.describe("Mobile (375px)", () => {
    test.use({ viewport: { width: 375, height: 812 } });

    test("brand role is hidden to keep the topbar compact", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("text=Support systems operator for technical support")).toBeHidden();
    });

    test("scroll sequence falls back to poster mode", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("[data-scroll-sequence]").first()).toHaveAttribute(
        "data-scroll-mode",
        "poster",
      );
    });

    test("primary CTA remains visible without scrolling", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("[data-primary-cta='true']")).toBeInViewport();
    });

    test("touch targets stay usable", async ({ page }) => {
      await page.goto("/");

      const navLinks = page.locator("nav[aria-label='Primary'] a");
      const count = await navLinks.count();

      for (let i = 0; i < count; i += 1) {
        const link = navLinks.nth(i);
        const box = await link.boundingBox();

        if (box) {
          expect(box.height).toBeGreaterThanOrEqual(36);
        }
      }
    });
  });
});

test.describe("Motion And Print", () => {
  test("reduced motion keeps sequences in poster mode", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const sequences = page.locator("[data-scroll-sequence]");
    const count = await sequences.count();

    for (let i = 0; i < count; i += 1) {
      await expect(sequences.nth(i)).toHaveAttribute("data-scroll-mode", "poster");
    }
  });

  test("pinned scene does not block the trust section", async ({ page }) => {
    await page.goto("/");
    await page.locator("[data-trust-strip]").scrollIntoViewIfNeeded();
    await expect(page.locator("[data-trust-strip]")).toBeInViewport();
  });

  test("resume page renders in print mode", async ({ page }) => {
    await page.goto("/resume");
    await page.emulateMedia({ media: "print" });

    await expect(page.locator("[data-resume-page]")).toBeVisible();
    await expect(page.locator("text=Print or save as PDF from browser.")).toBeHidden();
  });
});
