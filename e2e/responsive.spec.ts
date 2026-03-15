import { expect, test } from "@playwright/test";

test.describe("Responsive Design", () => {
  test.describe("Desktop (1280px)", () => {
    test.use({ viewport: { width: 1280, height: 900 } });

    test("dossier hero is first and becomes interactive on desktop", async ({ page }) => {
      await page.goto("/");

      const firstSection = page.locator("main > section").first();
      await expect(firstSection).toHaveAttribute("data-home-hero", "true");
      await expect(page.locator("[data-home-hero] h1")).toBeVisible();
      await expect(page.locator("[data-home-hero] [data-scroll-sequence]")).toHaveAttribute(
        "data-scroll-mode",
        "interactive",
      );
      await expect(page.locator("[data-home-hero]").getByRole("link", { name: "Resume" })).toBeVisible();
      await expect(page.locator("[data-home-hero]").getByRole("link", { name: "Contact" })).toBeVisible();
    });

    test("selected cases and floating contact are visible on desktop", async ({ page }) => {
      await page.goto("/");

      await expect(page.locator("#cases")).toBeVisible();
      await expect(page.locator("[data-floating-contact]")).toBeVisible();
    });

    test("editorial bridge and capability section are present", async ({ page }) => {
      await page.goto("/");
      await expect(page.getByText("Support credibility first. Systems leverage immediately after.")).toBeVisible();
      await expect(page.getByText("What I actually do")).toBeVisible();
    });
  });

  test.describe("Tablet (768px)", () => {
    test.use({ viewport: { width: 768, height: 1024 } });

    test("dossier hero keeps CTA access in poster mode on tablet", async ({ page }) => {
      await page.goto("/");

      await expect(page.locator("[data-home-hero]")).toBeVisible();
      await expect(page.locator("[data-home-hero] [data-scroll-sequence]")).toHaveAttribute(
        "data-scroll-mode",
        "poster",
      );
      await expect(page.locator("[data-home-hero]").getByRole("link", { name: "Resume" })).toBeVisible();
      await expect(page.locator("[data-home-hero]").getByRole("link", { name: "Contact" })).toBeVisible();
    });

    test("selected case stage remains readable", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("#cases")).toBeVisible();
    });
  });

  test.describe("Mobile (375px)", () => {
    test.use({ viewport: { width: 375, height: 812 } });

    test("topbar remains compact on mobile", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("nav[aria-label='Primary']")).toBeVisible();
      await expect(page.locator("[data-floating-contact]")).toBeVisible();
    });

    test("dossier hero falls back to poster mode", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("[data-home-hero] [data-scroll-sequence]")).toHaveAttribute(
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
  test("reduced motion keeps hero media in poster mode", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const sequences = page.locator("[data-scroll-sequence]");
    const count = await sequences.count();

    for (let i = 0; i < count; i += 1) {
      await expect(sequences.nth(i)).toHaveAttribute("data-scroll-mode", "poster");
    }
  });

  test("hero media does not block the selected cases stage", async ({ page }) => {
    await page.goto("/");
    await page.locator("#cases").scrollIntoViewIfNeeded();
    await expect(page.locator("#cases")).toBeInViewport();
  });

  test("resume page renders in print mode", async ({ page }) => {
    await page.goto("/resume");
    await page.emulateMedia({ media: "print" });

    await expect(page.locator("[data-resume-page]")).toBeVisible();
    await expect(page.locator("text=Print or save as PDF from browser.")).toBeHidden();
  });
});
