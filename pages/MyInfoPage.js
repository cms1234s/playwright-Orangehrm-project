import { expect } from "@playwright/test";
class MyInfoPage {
  constructor(page) {
    this.page = page;

    // locators
    this.myInfoMenu = page.locator("//span[text()='My Info']");

    this.personalDetailsHeader = page.locator(
      "//h6[text()='Personal Details']",
    );

    this.firstNameInput = page.locator("//input[@placeholder='First Name']");

    this.middleNameInput = page.locator("//input[@placeholder='Middle Name']");

    this.lastNameInput = page.locator("//input[@placeholder='Last Name']");

    this.employeeIdInput = page.locator(
      "(//input[@class='oxd-input oxd-input--active'])[2]",
    );

    this.otherIdInput = page.locator(
      "(//input[@class='oxd-input oxd-input--active'])[3]",
    );

    this.nationalityDropdown = page.locator(
      "(//div[contains(@class,'oxd-select-text')])[1]",
    );

    this.maritalStatusDropdown = page.locator(
      "(//div[contains(@class,'oxd-select-text')])[2]",
    );

    this.saveButton = page.locator("(//button[@type='submit'])[1]");
  }

  async clickMyInfo() {
    await this.myInfoMenu.click();
    await this.page.waitForLoadState("networkidle");
  }

  async verifyPersonalDetailsVisible() {
    await expect(this.personalDetailsHeader).toBeVisible();
  }

  async fillEmployeeName(first, middle, last) {
    await this.firstNameInput.fill(first);
    await this.middleNameInput.fill(middle);
    await this.lastNameInput.fill(last);
  }

  async fillEmployeeIds(empId, otherId) {
    await this.employeeIdInput.fill(empId);
    await this.otherIdInput.fill(otherId);
  }

  async selectNationality(nationality) {
    await this.nationalityDropdown.click();

    await this.page.locator(`//span[text()='${nationality}']`).click();
  }

  async selectMaritalStatus(status) {
    await this.maritalStatusDropdown.click();

    await this.page.locator(`//span[text()='${status}']`).click();
  }

  async clickSave() {
    await this.saveButton.click();
  }
}

export default MyInfoPage;
