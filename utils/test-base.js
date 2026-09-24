const base = require("@playwright/test");

exports.test = base.test.extend({
  loginData: {
    username: "admin",
    password: "hcmatrix2025",
  },

  registerData: async ({}, use) => {
    const timestamp = Date.now();

    const registerData = {
      firstName: "John",
      lastName: "Doe",
      companyName: "Your Company Inc.",
      email: `john${timestamp}@example.com`,
      phone: "+1 (555) 123-4567",
    };

    await use(registerData);
  },
});

exports.expect = base.expect;
