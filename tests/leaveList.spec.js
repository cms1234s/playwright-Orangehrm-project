import { test, expect } from "@playwright/test";
import { userNames } from "../utils/userNames";
import LeavePage from "../pages/LeavePage";

// import LoginPage from "../pages/LoginPage";
test("verify apply leave flow", async ({ page }) => {
  const { username, password } = userNames.USER1;
  const leavePage = new LeavePage(page);

  await leavePage.goto();

  await leavePage.login(username, password);
  await leavePage.waitForDashboard();
  // Open leave
  await page.locator("//span[text()='Leave']").click();
  // click apply
  await page.locator("//a[text()='Leave List']").click();
  // verify apply leave label

  // leave type label

  await expect(page.locator("//label[text()='From Date']")).toBeVisible();
  await expect(page.locator("//label[text()='To Date']")).toBeVisible();
  await expect(
    page.locator("//label[text()='Show Leave with Status']"),
  ).toBeVisible();
  await expect(page.locator("//label[text()='Leave Type']")).toBeVisible();
  await expect(page.locator("//label[text()='Employee Name']")).toBeVisible();
  await expect(page.locator("//label[text()='Sub Unit']")).toBeVisible();
  await expect(page.locator(" //p[text()=' * Required']")).toBeVisible();
  // from date

  await page
    .locator('//label[text()="From Date"]/following::input[1]')
    .fill("2026-05-20");
  // to date
  await page
    .locator('//label[text()="To Date"]/following::input[1]')
    .fill("2026-12-31");

  // show leave with status
  await page
    .locator(
      '(//label[text()="Show Leave with Status"]/following::div[contains(@class,"oxd-select-text")])[1]',
    )
    .click();
  await page.locator('//div[@role="listbox"]//span').allTextContents();

  // fill the data in leave type
  await page
    .locator(
      '//label[text()="Leave Type"]/following::div[contains(@class,"oxd-select-text")][1]',
    )
    .click();
  await page.getByText("US - Bereavement").click();
  // employee name
  await page
    .locator("//label[text()='Employee Name']/following::input[1]")
    .fill("John Doe");
  // sub unit
  await page
    .locator(
      '//label[text()="Sub Unit"]/following::div[contains(@class,"oxd-select-text")][1]',
    )
    .click();
  await page.getByText("Engineering").click();
  // search
  await page.locator("//button[@type='submit']").click();
});
