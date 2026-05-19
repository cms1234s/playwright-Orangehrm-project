import { expect } from "@playwright/test";

class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.submit = page.locator('button[type="submit"]');
    this.adminMenu = page.locator('//span[text()="Admin"]');
  }

  async goto() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/");
  }

  async login(userName, password) {
    await this.username.fill(userName);
    await this.password.fill(password);
    await this.submit.click();
  }

  async waitForDashboard() {
    await expect(this.adminMenu).toBeVisible({ timeout: 15000 });
  }
}

export default LoginPage;
