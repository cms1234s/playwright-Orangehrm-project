import { test, expect } from "@playwright/test";

// Click Forgot your password? link

test(" verifying forgot password functinality", async ({ page }) => {
  test.setTimeout(60000);
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.locator("text=Forgot your password?").click();
  await expect(page).toHaveURL(/PasswordResetCode/);
  await page.locator('input[name="username"]').fill("Admin");
  await page.locator("input").nth(1).fill("vjhgfbnvvk");
  await page.getByRole("button", { name: "Reset Password" }).click();
});
