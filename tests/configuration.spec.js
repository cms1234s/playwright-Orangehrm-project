import { test, expect } from "@playwright/test";

test("Verify configuration dropdown", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");

  // Login
  await page.locator('input[name="username"]').fill("Admin");

  await page.locator('input[name="password"]').fill("admin123");

  await page.locator('button[type="submit"]').click();
  await page.locator('//span[text()="PIM"]').click();

  //   click configuration
  await page.locator("//span[text()='Configuration ']").click();

  await expect(page.locator("//a[text()='Optional Fields']")).toBeVisible();
  await expect(page.locator("//a[text()='Custom Fields']")).toBeVisible();
  await expect(page.locator("//a[text()='Custom Fields']")).toBeVisible();

  await expect(page.locator("//a[text()='Data Import']")).toBeVisible();

  await expect(page.locator("//a[text()='Reporting Methods']")).toBeVisible();
  await page.pause();
  await expect(page.locator("//a[text()='Termination Reasons']")).toBeVisible();
});
