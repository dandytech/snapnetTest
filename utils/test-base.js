const base = require("@playwright/test");

exports.test = base.test.extend({
  loginData: {
    username: "admin",
    password: "hcmatrix2025",
  },

  registerData: async ({}, use) => {
    const timestamp = Date.now();

    const registerData = {
      firstName: "Daniel",
      lastName: "Tester",
      companyName: "Your Company Inc.",
      email: `dannkow${timestamp}@gmail.com`,
      phone: "+2347065123746",
    };

    await use(registerData);
  },
});

exports.expect = base.expect;
