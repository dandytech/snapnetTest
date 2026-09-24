const { ApproveUser } = require("./Approve-user");
const { LoginPage } = require("./LoginPage");
const { Register } = require("./Register");
const { RejectUser } = require("./Reject-User");

class POManager {
  constructor(page) {
    this.page = page;

    this.loginPage = new LoginPage(this.page);

    this.approveUser = new ApproveUser(this.page);

    this.rejectUser = new RejectUser(this.page);

    this.registerUser = new Register(this.page);
  }

  // Create custom methods for each page object class
  getLoginPage() {
    return this.loginPage;
  }

  getApproveUser() {
    return this.approveUser;
  }

  getRejectUser() {
    return this.rejectUser;
  }

  getRegister() {
    return this.registerUser;
  }
}

module.exports = { POManager };
