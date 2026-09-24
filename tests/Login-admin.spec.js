const { test } = require("../utils/test-base");
const { expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test("@web Login", async ({ page, loginData }) => {
  // Create POManager object
  const poManager = new POManager(page);

  // Create LoginPage object
  const loginPage = poManager.getLoginPage();

  // Go to login page
  await loginPage.goTo();

  // Login using username and password from test-base.js
  await loginPage.validLogin(loginData.username, loginData.password);

  // Verify successful login
  await expect(page.locator("div.text-sm.opacity-90")).toHaveText(
    "You have successfully signed in as an administrator.",
  );
});
