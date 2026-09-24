const { test } = require("../utils/test-base");

const { POManager } = require("../pageobjects/POManager");

test("Admin Approve User", async ({ page, loginData }) => {
  const poManager = new POManager(page);

  // Login
  const loginPage = poManager.getLoginPage();

  await loginPage.loginAsAdmin(loginData.username, loginData.password);

  // Approve User
  const approveUser = poManager.getApproveUser();

  await approveUser.approve();
});
