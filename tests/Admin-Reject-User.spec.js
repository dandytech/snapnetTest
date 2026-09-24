const { test } = require("../utils/test-base");

const { POManager } = require("../pageobjects/POManager");

test("Admin Reject User", async ({ page, loginData }) => {
  const poManager = new POManager(page);

  // Login
  const loginPage = poManager.getLoginPage();

  await loginPage.loginAsAdmin(loginData.username, loginData.password);

  // Reject User
  const rejectUser = poManager.getRejectUser();

  await rejectUser.reject();
});
