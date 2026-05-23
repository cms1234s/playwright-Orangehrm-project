import { test, expect } from "@playwright/test";

test("verify employee list ", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  // Login
  await page.locator('input[name="username"]').fill("Admin");
  await page.locator('input[name="password"]').fill("admin123");
  await page.locator('button[type="submit"]').click();
  // Click PIM
  await page.locator('//span[text()="PIM"]').click();

  // click employee list
  await page.locator("//a[text()='Employee List']").click();
  //   await page
  //     .locator("//h5[@class='oxd-text oxd-text--h5 oxd-table-filter-title']")
  //     .toBeVisible();
  await expect(
    page.locator("//h5[@class='oxd-text oxd-text--h5 oxd-table-filter-title']"),
  ).toBeVisible();

  // employees list labels
  await expect(page.locator("//label[text()='Employee Name']")).toBeVisible();
  await expect(page.locator("//label[text()='Employee Id']")).toBeVisible();
  await expect(
    page.locator("//label[text()='Employment Status']"),
  ).toBeVisible();
  await expect(page.locator('//label[text()="Include"]')).toBeVisible();
  await expect(page.locator('//label[text()="Supervisor Name"]')).toBeVisible();
  await expect(page.locator('//label[text()="Job Title"]')).toBeVisible();
  await expect(page.locator('//label[text()="Sub Unit"]')).toBeVisible();

  // employee name human
  await page
    .locator("(//input[@placeholder='Type for hints...'])[1]")
    .fill("human");

  // employee id
  await page
    .locator('//label[text()="Employee Id"]/following::input[1]')
    .fill("1598");

  // employment status full time permanent
  await page
    .locator(
      '//label[text()="Employment Status"]/following::div[contains(@class,"oxd-select-text")][1]',
    )
    .click();
  // await page.locator('//span[contains(text(),"Full-Time Permanent")]').click();

  await page.getByText("Full-Time Permanent").click();
  //   await expect(page.getByText("Full-time Permanent")).toBeVisible();
  //   await page.keyboard.press("ArrowDown");
  //   await page.keyboard.press("Enter");

  //   await page.locator('(//div[contains(@class,"oxd-select-text")])[1]').click();

  // includes
  await page
    .locator(
      '//label[text()="Include"]/following::div[contains(@class,"oxd-select-text-input")][1]',
    )
    .click();
  await page
    .locator('//span[contains(text(),"Current Employees Only")]')
    .click();

  //   await page
  //     .locator("(//div[@class='oxd-select-text oxd-select-text--active'])[2]")
  //     .click();
  //   await page
  //     .locator('//span[contains(text(),"Current Employee Only")]')
  //     .click();

  // Supervisor Name
  await page
    .locator(" (//input[@placeholder='Type for hints...'])[2]")
    .fill("Sam  Taylor");

  // job title
  await page
    .locator(
      '//label[text()="Job Title"]/following::div[contains(@class,"oxd-select-text-input")][1]',
    )
    .click();
  await page.locator('//span[text()="QA Engineer"]').click();

  //   await page.locator('(//div[contains(@class,"oxd-select-text")])[3]').click();
  //   await page.getByText("QA Engineer").click();

  // sub unit
  await page
    .locator(
      '//label[text()="Sub Unit"]/following::div[contains(@class,"oxd-select-text--after")][1]',
    )
    .click();
  await page.locator('//span[text()="Engineering"]').click();
  //
  // div[contains(@class,"oxd-select-text--after")]
  // search
  await page.locator(" //button[@type='submit'].click()");

  // input[@placeholder='Type for hints...'])[2] .fill("Automaton Tester")
  //  await page
  // .locator('//label[text()="Employee Id"]/following::input[1]')
  // .fill(empId.toString())
});
