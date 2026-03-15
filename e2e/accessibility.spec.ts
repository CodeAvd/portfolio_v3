import { expect, test } from "@playwright/test";

test.describe("Accessibility", () => {
  test("skip link is visible on focus and moves to main content", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");
    const skipLink = page.locator("a[href='#main-content']");

    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();

    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();
  });

  test("skip link works on core pages", async ({ page }) => {
    for (const path of ["/", "/resume", "/cases/darkest-afk"]) {
      await page.goto(path);
      await page.keyboard.press("Tab");
      await expect(page.locator("a[href='#main-content']")).toBeFocused();
    }
  });

  test("theme toggle preserves radiogroup semantics", async ({ page }) => {
    await page.goto("/");

    const themeToggle = page.locator("[role='radiogroup']");
    await expect(themeToggle).toHaveAttribute("aria-label", "Theme selection");
    await expect(page.locator("[role='radio']")).toHaveCount(3);
  });

  test("primary navigation is labeled and main is focusable", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("nav[aria-label='Primary']")).toBeVisible();
    await expect(page.locator("#main-content")).toHaveAttribute("tabindex", "-1");
  });

  test("keyboard focus can reach CTA and theme controls", async ({ page }) => {
    await page.goto("/");

    await page.locator("[data-primary-cta='true']").focus();
    await expect(page.locator("[data-primary-cta='true']")).toBeFocused();

    await page.locator("[aria-label='Use dark theme']").focus();
    await expect(page.locator("[aria-label='Use dark theme']")).toBeFocused();
  });
});
