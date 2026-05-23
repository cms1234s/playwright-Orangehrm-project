import { test } from "@playwright/test";
import TimePage from "../pages/TimePage";
import { userNames } from "../utils/userNames";

test("verify time module", async ({ page }) => {
  const { username, password } = userNames.USER1;
  const timepage = new TimePage(page);
  timepage.addTimeSheet();
  await timepage.goto();

  await timepage.login(username, password);
  await timepage.waitForDashboard();

  await timepage.timePage.click();
});
