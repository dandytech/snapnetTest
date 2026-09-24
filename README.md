# snapnetTest

Overview
snapnetTest is a Playwright-based web automation testing project designed to validate key user and administrative workflows within the application.

**Automated Test Scenarios**

The test suite covers:
1. User Registration – Verifies that a new user can successfully register.
2. Admin Login – Verifies that an administrator can successfully log in.
3. Admin Approves User – Verifies that an administrator can review and approve a registered user.
4. Admin Rejects User – Verifies that an administrator can review and reject a registered user.

**Testing Framework**
Playwright
JavaScript
Node.js

**Prerequisites**
Before running the tests, ensure the following are installed:
Node.js
npm

**Installation**
Clone the repository and install the project dependencies:
git clone <repository-url>
cd snapnetTest
npm install

**Install the Playwright browsers:**
npx playwright install

**Running the Tests**
Run all Playwright tests:
npx playwright test

Run the tests in headed mode:
npx playwright test --headed

Run a specific test file:
npx playwright test <test-file-name>

**Test Report**
After execution, generate or view the Playwright HTML report:
npx playwright show-report

**Test Coverage**
The automation suite currently covers:
1. User registration
2. Admin login
3. Admin user approval
4. Admin user rejection

The project can be extended with additional test scenarios as the application evolves.
