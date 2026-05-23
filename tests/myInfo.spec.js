import { test, expect } from "@playwright/test";
import { userNames } from "../utils/userNames";
import LoginPage from "../pages/LoginPage";
import MyInfoPage from "../pages/MyInfoPage";

test("my info  module section ", async ({ page }) => {
  const { username, password } = userNames.user1;
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(username, password);
  await loginPage.waitForDashboard();

  const myInfoPage = new MyInfoPage(page);
  await myInfoPage.clickMyInfo();
  await myInfoPage.verifyPersonalDetailsVisible();

  await expect(
    page.locator("//label[@class='oxd-label oxd-input-field-required']"),
  ).toBeVisible();
  // employee id label
  await expect(page.locator("//label[text()='Employee Id']")).toBeVisible();
  await expect(page.locator("//label[text()='Other Id']")).toBeVisible();
  await expect(page.locator("//label[text()='Nationality']")).toBeVisible();
  await expect(page.locator("//label[text()='Marital Status']")).toBeVisible();
  // custome fields
  await expect(page.locator("//h6[text()='Custom Fields']")).toBeVisible();
  await expect(page.locator("//label[text()='Blood Type']")).toBeVisible();
  await expect(page.locator("//label[text()='Test_Field']")).toBeVisible();

  await expect(page.locator("//label[text()='Date of Birth']")).toBeVisible();
  await expect(page.locator("//label[text()='Gender']")).toBeVisible();

  // fill the firstname,middlename,n lastname
  await page.locator("//input[@placeholder='First Name']").fill("madhu");
  await page.locator("//input[@placeholder='Middle Name']").fill("Iravant");
  await page.locator("//input[@placeholder='Last Name']").fill("testLastName");

  // filled employee id
  await page
    .locator("(//input[@class='oxd-input oxd-input--active'])[2]")
    .fill("1598");
  await page
    .locator("(//input[@class='oxd-input oxd-input--active'])[3]")
    .fill("1111");

  // nationality dropdown
  await page.locator("(//div[contains(@class,'oxd-select-text')])[1]").click();
  await page.locator("//span[text()='Brazilian']").click();
  await page
    .locator(
      "//label[text()='Marital Status']/following::div[contains(@class,'oxd-select-text')][1]",
    )
    .click();
  // save button
  await page.locator("(//button[@type='submit'])[1]").click();
});
