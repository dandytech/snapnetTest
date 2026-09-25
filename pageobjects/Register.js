const { expect } = require("@playwright/test");

class Register {
  constructor(page) {
    this.page = page;

    this.signUpButton = page.getByText("Sign Up", { exact: true });

    this.registerWithEmailButton = page.getByRole("button", {
      name: "Register with Email",
    });

    this.firstNameInput = page.locator('input[name="firstName"]');

    this.lastNameInput = page.locator('input[name="lastName"]');

    this.companyNameInput = page.getByPlaceholder("Your Company Inc.");

    this.emailInput = page.getByPlaceholder("daniel@example.com");

    this.phoneInput = page.getByPlaceholder("+1 (555) 123-4567");

    this.checkbox = page.getByRole("checkbox");

    this.submitApplicationButton = page.getByRole("button", {
      name: "Submit Application",
    });

    this.successMessage = page.getByText("Success!", { exact: true });
  }

  // URL
  async goTo() {
    await this.page.goto("https://partner.snapnetsolutions.com");
  }

  // Registration flow
  async register(registerData) {
    await this.goTo();

    await expect(this.signUpButton).toBeVisible();

    await this.signUpButton.click();

    await this.registerWithEmailButton.click();

    await this.firstNameInput.fill(registerData.firstName);

    await this.lastNameInput.fill(registerData.lastName);

    await this.companyNameInput.fill(registerData.companyName);

    await this.emailInput.fill(registerData.email);

    await this.phoneInput.fill(registerData.phone);

    await this.checkbox.check();

    await this.submitApplicationButton.click();

    await expect(this.successMessage).toBeVisible();
  }
}

module.exports = { Register };
