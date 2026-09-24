const { expect } = require("@playwright/test");

class ApproveUser {
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
    this.approveButton = page
      .getByRole("button", {
        name: "Approve",
        exact: true,
      })
      .first();

    // Approval reason textarea
    this.approvalReason = page.locator(
      'textarea[placeholder="Add any notes about this approval..."]',
    );

    // Final Approve Application button
    this.approveApplication = page
      .getByRole("button", {
        name: "Approve Application",
        exact: true,
      })
      .first();

    // Approval confirmation
    this.applicationApproved = page.getByText("Application Approved", {
      exact: true,
    });
  }

  async approve() {
    // 1. Click Review Applications
    await this.reviewApplications.click();

    // 2. Wait for TEST MAN to appear
    await expect(this.testMan.first()).toBeVisible();

    // 3. Click the first Approve button
    await this.approveButton.click();

    // 4. Wait for approval dialog
    await expect(this.approvalReason).toBeVisible();

    // 5. Enter approval reason
    await this.approvalReason.fill(
      "Congrats, your application has been reviewed and approved.",
    );

    // 6. Click final Approve Application button
    await this.approveApplication.click();

    // 7. Confirm that the application was approved
    await expect(this.applicationApproved).toBeVisible();
  }
}

module.exports = { ApproveUser };
