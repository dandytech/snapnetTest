const base = require("@playwright/test");

exports.test = base.test.extend({
  loginData: {
    username: "admin",
    password: "hcmatrix2025",
  },

  registerData: {
    firstName: "John",
    lastName: "Doe",
    companyName: "Your Company Inc.",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
  },
});
