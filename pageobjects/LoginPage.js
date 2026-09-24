const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = page.getByPlaceholder("Enter your username");

    this.password = page.getByPlaceholder("Enter your password");

    this.signInButton = page.locator('button[type="submit"]');
  }

  async goTo() {
    await this.page.goto("https://partner.snapnetsolutions.com/admin/signin");
  }

  async validLogin(username, password) {
    await this.username.fill(username);

    await this.password.fill(password);

    await this.signInButton.click();
  }

  async loginAsAdmin(username, password) {
    await this.goTo();

    await this.validLogin(username, password);

    await expect(
      this.page.getByText(
        "You have successfully signed in as an administrator.",
        { exact: true },
      ),
    ).toBeVisible();
  }
}

module.exports = { LoginPage };
