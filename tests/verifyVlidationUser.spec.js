import { test, expect } from "@playwright/test";
test("Verify validation message for invalid username", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page.locator("text=Forgot your password?").click();
  await expect(page).toHaveURL(/requestPasswordResetCode/);
  await page.locator('input[name="username"]').fill("InvalidUser123");
  await page.getByRole("button", { name: "Reset Password" }).click();
});
