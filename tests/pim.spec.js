import { test, expect } from "@playwright/test";

test("pim admin user management module pim", async ({ page }) => {
  // Login
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page.locator('input[name="username"]').fill("Admin");
  await page.locator('input[name="password"]').fill("admin123");
  await page.locator('button[type="submit"]').click();
  // PIM Module
  await page.locator('//span[text()="PIM"]').click();
  // Click Add Employee
  await page.getByText("Add Employee").click();

  // Verify Add Employee page
  await expect(
    page.getByRole("heading", { name: "Add Employee" }),
  ).toBeVisible();

  // Verify Employee Full Name label
  await expect(
    page.locator('//label[text()="Employee Full Name"]'),
  ).toBeVisible();

  //
  // Fill employee details
  await page.locator('//input[@placeholder="First Name"]').fill("dd");

  await page.locator('//input[@placeholder="Middle Name"]').fill("dd");

  await page.locator('//input[@placeholder="Last Name"]').fill("dd");

  // Employee ID
  const empId = Math.floor(Math.random() * 10000);
  await page
    .locator('//label[text()="Employee Id"]/following::input[1]')
    .fill(empId.toString());
  // Save
  await page.getByRole("button", { name: "Save" }).click();

  // Verification after save
  //   await expect(
  //     page.getByText('Personal Details')
  //   ).toBeVisible();
});
