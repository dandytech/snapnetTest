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

    // User
    this.testMan = page.locator(
      "(//p[normalize-space()='qadan@forliion.com'])[1]",
    );

    // First Approve button
    this.rejectButton = page
      .getByRole("button", {
        name: "Reject",
        exact: true,
      })
      .first();

    // Approval reason textarea
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

    // Approval confirmation
    this.applicationRejected = page.getByText("Application Rejected", {
      exact: true,
    });
  }

  async reject() {
    // 1. Click Review Applications
    await this.reviewApplications.click();

    // 2. Wait for TEST MAN to appear
    await expect(this.testMan.first()).toBeVisible();

    // 3. Click the first Approve button
    await this.rejectButton.click();

    // 4. Wait for approval dialog
    await expect(this.rejectionReason).toBeVisible();

    // 5. Enter approval reason
    await this.rejectionReason.fill(
      "Sorry, your application has been reviewed and rejected.",
    );

    // 6. Click final Approve Application button
    await this.rejectApplication.click();

    // 7. Confirm that the application was approved
    await expect(this.applicationRejected).toBeVisible();
  }
}

module.exports = { RejectUser };
