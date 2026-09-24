const { expect } = require("@playwright/test");

class RejectUser {
  constructor(page) {
    this.page = page;

    // Review Applications button
    this.reviewApplications = page
      .getByRole("button", {
        name: "Review Applications",
      })
      .first();

    // First Reject button
    this.rejectButton = page
      .getByRole("button", {
        name: "Reject",
        exact: true,
      })
      .first();

    // Rejection reason textarea
    this.rejectionReason = page.locator(
      'textarea[placeholder="Provide a detailed reason for rejection..."]',
    );

    // Final Reject Application button
    this.rejectApplication = page
      .getByRole("button", {
        name: "Reject Application",
        exact: true,
      })
      .first();

    // Rejection confirmation
    this.applicationRejected = page.getByText("Application Rejected", {
      exact: true,
    });
  }

  async reject(email) {
    // Remove timestamp from the email
    const emailPrefix = email.split("@")[0].replace(/\d+$/, "");

    // User
    this.testMan = this.page.locator(
      `(//p[starts-with(normalize-space(), '${emailPrefix}')])[1]`,
    );

    // 1. Click Review Applications
    await this.reviewApplications.click();

    // 2. Wait for TEST MAN to appear
    await expect(this.testMan).toBeVisible();

    // 3. Click the first Reject button
    await this.rejectButton.click();

    // 4. Wait for rejection dialog
    await expect(this.rejectionReason).toBeVisible();

    // 5. Enter rejection reason
    await this.rejectionReason.fill(
      "Sorry, your application has been reviewed and rejected.",
    );

    // 6. Click final Reject Application button
    await this.rejectApplication.click();

    // 7. Confirm that the application was rejected
    await expect(this.applicationRejected).toBeVisible();
  }
}

module.exports = { RejectUser };
