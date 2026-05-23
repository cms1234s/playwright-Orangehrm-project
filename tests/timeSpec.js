import { test } from "@playwright/test";
import timePage from "../pages/timePage";
import { userNames } from "../utils/userNames";

test("verify time module", async ({ page }) => {
  const { username, password } = userNames.user1;
  const timepage = new timePage(page);
  timepage.addTimeSheet();
  await timePage.goto();

  await timePage.login(username, password);
  await timePage.waitForDashboard();

  await timePage.timePage.click();
});
