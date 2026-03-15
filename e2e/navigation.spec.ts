import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  test("primary nav moves through cases, resume, and contact", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("nav[aria-label='Primary']");

    await nav.getByRole("link", { name: "Cases" }).click();
    await expect(page.locator("#cases")).toBeInViewport();

    await nav.getByRole("link", { name: "Resume" }).click();
    await page.waitForURL("**/resume");
    await expect(page.locator("[data-resume-page] h1")).toContainText("Grigorii");

    await page.getByRole("link", { name: "Back to portfolio" }).click();
    await page.waitForURL("/");

    await page.locator("nav[aria-label='Primary']").getByRole("link", { name: "Contact" }).click();
    await expect(page.locator("#contact")).toBeInViewport();
  });

  test("primary CTA opens the resume dossier", async ({ page }) => {
    await page.goto("/");

    await page.locator("[data-primary-cta='true']").click();
    await page.waitForURL("**/resume");
    await expect(page.locator("[data-resume-page]")).toBeVisible();
  });

  test("case cards link to case pages", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Open case study" }).first().click();
    await expect(page.locator("[data-case-page]")).toBeVisible();
  });

  test("case page back link returns to the homepage cases section", async ({ page }) => {
    await page.goto("/cases/darkest-afk");

    await page.getByRole("link", { name: "Back to portfolio" }).click();
    await page.waitForURL("/#cases");
  });

  test("hash navigation to contact is reachable directly", async ({ page }) => {
    await page.goto("/#contact");
    await expect(page.locator("#contact")).toBeInViewport();
  });
});

test.describe("External Links", () => {
  test("github links open in a new tab", async ({ page }) => {
    await page.goto("/");

    const githubLink = page.locator("a[href*='github.com']").first();
    await expect(githubLink).toHaveAttribute("target", "_blank");
    await expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("mailto links preserve mailto hrefs", async ({ page }) => {
    await page.goto("/resume");

    const emailLink = page.locator("a[href^='mailto:']").first();
    await expect(emailLink).toHaveAttribute("href", /mailto:/);
  });
});
