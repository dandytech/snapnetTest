class APIUtils {
  constructor(apiContext, loginPayload) {
    this.apiContext = apiContext; //make this accessible in all methods
    this.loginPayload = loginPayload;
  }

  async getToken() {
    const loginResponse = await this.apiContext.post(
      "https://partner.snapnetsolutions.com/admin/signin",
      { data: this.loginPayload },
    ); // API call using login endpoint

    const loginResponseJSON = await loginResponse.json(); // store response in JSON

    const token = loginResponseJSON.token; // grab token from the object

    console.log("Login token: ", token);

    return token;
  }
}
module.exports = { APIUtils }; //export to be visible globally
