const { Register } = require("../pageobjects/Register");
const { test } = require("../utils/test-base");

test("User Registration", async ({ page, registerData }) => {
  const registerPage = new Register(page);

  await registerPage.register(registerData);
});
