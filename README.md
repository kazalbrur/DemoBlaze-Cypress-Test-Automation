# DemoBlaze Cypress JS Test Automation with Cypress 

This project automates end-to-end testing for the [DemoBlaze](https://www.demoblaze.com/) e-commerce application using [Cypress](https://www.cypress.io/), a testing framework built for modern web applications.

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running Tests](#running-tests)
    - [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Continuous Integration](#continuous-integration)
- [Contributing](#contributing)


---

## Project Overview
This project provides a comprehensive suite of automated tests for the DemoBlaze application, covering:
- User interactions, including signing up, logging in, and navigating categories.
- Functional tests for modals like *About Us*, *Contact*, *Sign Up*, and *Place Order*.
- Page-specific tests, such as *Product Page* and *Shopping Cart Page*.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/kazalbrur/DemoBlaze-Cypress-Test-Automation.git
   cd DemoBlaze-Cypress-Test-Automation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Tests

#### Open Cypress Test Runner
```bash
npx cypress open
```
This will open the Cypress Test Runner, where you can choose specific tests to run.

#### Run Tests in Headless Mode
```bash
npx cypress run
```

#### Run Specific Test Files
To run a specific test:
```bash
npx cypress run --spec "cypress/e2e/01.signUpModal/signUpModal.cy.js"
```

### Configuration
Edit `cypress.config.js` for custom configurations:
```javascript
module.exports = {
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    supportFile: 'cypress/support/e2e.js',
    // additional configurations
  }
};
```

## Project Structure

The directory structure is organized as follows:

```
DemoBlaze-Cypress-Test-Automation
│
├── cypress/                    # Cypress test directory
│   ├── e2e/                    # Test cases by feature
│   │   ├── 01.signUpModal/     
│   │   │   └── signUpModal.cy.js
│   │   ├── 02.logInModal/
│   │   │   └── logInModal.cy.js
│   │   ├── 03.categoriesNavigation/
│   │   │   └── categories.navigation.cy.js
│   │   ├── 04.aboutUsModal/
│   │   │   └── aboutUsModal.cy.js
│   │   ├── 05.contactModal/
│   │   │   └── contactModal.cy.js
│   │   ├── 06.shoppingCartPage/
│   │   │   └── shoppingCartPage.cy.js
│   │   ├── 07.placeOrderModal/
│   │   │   └── placeOrderModal.cy.js
│   │   ├── 08.productPage/
│   │   │   └── productPage.cy.js
│   │   └── pages/              # Page Object Model files
│   │       ├── AboutUsModal.js
│   │       ├── ContactModal.js
│   │       ├── LoginPage.js
│   │       ├── PlaceOrderModal.js
│   │       ├── ProductPage.js
│   │       ├── ShoppingCart.js
│   │       └── SignUpModal.js
│   ├── fixtures/               # Test data
│   │   ├── credentials.json
│   │   └── paymentData.json
│   ├── reports/                # Test report outputs
│   │   └── html/
│   │       ├── assets/         # Report assets
│   │       └── index.html      # Test summary report
│   └── support/                # Cypress custom commands and setup
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js           # Cypress configuration file
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Dependency lock file
└── README.md                   # Project documentation
```

### Key Directories

- **`cypress/e2e/`**: Contains test cases organized by feature. Each folder represents a test category (e.g., sign-up, login) with a `.cy.js` file for test scripts.
- **`cypress/e2e/pages/`**: Implements Page Object Models (POM) for key components, improving code reusability and readability.
- **`cypress/fixtures/`**: Holds data files (e.g., `credentials.json`) for mocking data in tests.
- **`cypress/reports/`**: Stores generated HTML reports after test runs.
- **`cypress/support/`**: Contains custom commands (`commands.js`) and setup files (`e2e.js`).

## Writing Tests
Tests in `cypress/e2e` cover specific UI components, organized by modal, page, or functionality. The Page Object Model (POM) in `cypress/e2e/pages` abstracts common actions, improving test structure.

### Sample Test
Here’s a basic test from `signUpModal.cy.js`:
```javascript
describe('Sign Up Modal Tests', () => {
  it('Should successfully sign up a new user', () => {
    cy.visit('/');
    cy.get('#signin2').click();
    cy.get('#sign-username').type('newUser');
    cy.get('#sign-password').type('password123');
    cy.get('.btn-primary').contains('Sign up').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Sign up successful.');
    });
  });
});
```

## Continuous Integration
This project supports CI/CD with GitHub Actions. A `.yml` workflow file in `.github/workflows` can be set up to automate test runs upon push or pull requests.

Example GitHub Actions Workflow:
```yaml
name: Cypress Tests
on: [push, pull_request]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v2
    - name: Install dependencies
      run: npm install
    - name: Run Cypress tests
      run: npx cypress run
```

## Contributing
1. **Fork** the repository.
2. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit** your changes:
   ```bash
   git commit -m "Add a descriptive commit message"
   ```
4. **Push** to your branch:
   ```bash
   git push origin feature-name
   ```
5. **Create a Pull Request** on GitHub.
