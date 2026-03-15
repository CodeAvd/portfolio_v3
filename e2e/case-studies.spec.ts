import { expect, test } from "@playwright/test";

test.describe("Case Study Pages", () => {
  test("case study page has hero, proof box, and narrative template", async ({ page }) => {
    await page.goto("/cases/darkest-afk");

    await expect(page.locator("[data-case-page] h1")).toBeVisible();
    await expect(page.locator("[data-case-proof-box]")).toBeVisible();
    await expect(page.locator("text=Narrative template")).toBeVisible();
    await expect(page.locator("text=Situation, intervention, proof, result, artifacts, next step.")).toBeVisible();
  });

  test("all case pages are accessible and have proof boxes", async ({ page }) => {
    for (const slug of ["darkest-afk", "dig-dig-die", "vacation-cafe"]) {
      await page.goto(`/cases/${slug}`);
      await expect(page.locator("[data-case-page] h1")).toBeVisible();
      await expect(page.locator("[data-case-proof-box]")).toBeVisible();
    }
  });

  test("artifacts remain external and open safely", async ({ page }) => {
    await page.goto("/cases/darkest-afk");

    const artifactLinks = page.locator("a", { hasText: "Legacy public case page" }).or(
      page.locator("a", { hasText: "Original one-pager on GitHub" }),
    );
    const count = await artifactLinks.count();

    for (let i = 0; i < count; i += 1) {
      const link = artifactLinks.nth(i);
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  test("footer navigation exposes adjacent case links", async ({ page }) => {
    await page.goto("/cases/darkest-afk");

    await expect(page.locator("text=Continue reading")).toBeVisible();
    await expect(page.locator("a", { hasText: "Next:" })).toBeVisible();
  });

  test("theme toggle works on case pages", async ({ page }) => {
    await page.goto("/cases/darkest-afk");
    await page.locator("[aria-label='Use dark theme']").click();

    const theme = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
    expect(theme).toBe("dark");
  });
});
