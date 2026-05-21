import { test, expect } from "@playwright/test";
import { userNames } from "../utils/userNames";
import LoginPage from "../pages/LoginPage";

test("user management module for user", async ({ page }) => {
  const { username, password } = userNames.user1;
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(username, password);
  await loginPage.waitForDashboard();
  // Open Admin
  await page.locator('//span[text()="Admin"]').click();
  // Verify System Users page
  await expect(page.locator('//h5[text()="System Users"]')).toBeVisible();
  // Click Add
  await page.locator('//button[normalize-space()="Add"]').click();
  // Verify Add User page
  // await expect(page.locator('//h6[text()="Add User"]')).toBeVisible();
  await expect(page.locator('//h6[text()="Add User"]')).toBeVisible();
  // User Role
  await page.locator('(//div[contains(@class,"oxd-select-text")])[1]').click();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  // Employee Name
  await page.locator('input[placeholder="Type for hints..."]').fill("a");
  await page.waitForTimeout(3000);
  // await page.waitForSelector('.oxd-autocomplete-dropdown');
  await page.locator(".oxd-autocomplete-option").first().click();
  // Status
  // await page.locator('(//div[contains(@class,"oxd-select-text")])[2]').click();
  //  await page.waitForTimeout(1000);
  // await page.keyboard.press('ArrowDown');
  // await page.keyboard.press('Enter');
  await page
    .locator(
      '//label[text()="Status"]/following::div[contains(@class,"oxd-select-text-input")][1]',
    )
    .click();
  await page.locator('//span[text()="Enabled"]').click();
  // const statusDropdown = page.locator('(//div[contains(@class,"oxd-select-text")])[2]');
  // await statusDropdown.click();
  // await page.locator('//span[text()="Enabled"]').click();
  // await expect(statusDropdown).toContainText('Enabled');
  // Username
  await page
    .locator('//label[text()="Username"]/following::input[1]')
    .fill("testuser" + Date.now());
  // Password
  await page.locator('(//input[@type="password"])[1]').fill("Test@123");
  // Confirm Password
  await page.locator('(//input[@type="password"])[2]').fill("Test@123");
  // await page.pause();
  // Save
  await page.locator('//button[normalize-space()="Save"]').click();
  // Success Message
  await expect(page.getByText("Successfully Saved")).toBeVisible({
    timeout: 15000,
  });
});
