// import  from "@playwright/test";

export class timePage {
  constructor(page) {
    this.page = page;
    this.timePage = this.page.locator("//span[text()='Time']");
  }
}
