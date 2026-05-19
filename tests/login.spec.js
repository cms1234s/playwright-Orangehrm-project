import { test, expect } from "@playwright/test";

// Verify login page displayed

test("Validating OrangeHRM login form functionality", async ({ page }) => {
  test.setTimeout(60000);
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  const logo = await page.getByAltText("company-branding");
  await expect(logo).toBeVisible();
  await page.pause();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
});
