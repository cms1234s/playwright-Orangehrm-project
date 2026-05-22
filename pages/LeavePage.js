export default class LeavePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/");
  }

  async login(username, password) {
    await this.page.locator('input[name="username"]').fill(username);

    await this.page.locator('input[name="password"]').fill(password);

    await this.page.locator('button[type="submit"]').click();
  }

  async waitForDashboard() {
    await this.page.waitForURL(/dashboard/);
  }
}
