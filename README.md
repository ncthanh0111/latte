# LATTE - Playwright Automation Framework

## Overview
**LATTE** is a scalable end-to-end automation framework developed for the DemoBlaze web application. Built with **Playwright** and **TypeScript**, this framework showcases a professional approach to hybrid testing, covering both UI and API layers with a focus on maintainability and clear execution reporting.

## Project Structure
The framework follows a modular folder hierarchy to ensure a clean separation of concerns:

```text
LATTE/
├── .github/workflows/   # CI/CD pipeline configurations
├── api-service/         # Logic for API request handling
├── config/              # Environment and global settings
├── pages/               # Page Object Model (POM) implementations
│   └── modules/         # Reusable UI components (Navigation Bar,...)
├── tests/               # Test suites
│   ├── api/             # Functional API tests
│   │   └── testData/    # API-specific datasets
│   └── ui/              # End-to-end UI tests
├── utils/               # Common utility and helper functions
├── .gitignore           # Git exclusion rules
├── package.json         # Project dependencies and scripts
└── playwright.config.ts # Global Playwright configuration
```

## Key Features
* **Hybrid Testing Strategy:** Unified automation for UI and API validation within a single repository.
* **Modular Page Objects:** Component-based architecture using modules for highly reusable UI elements.
* **Data-Driven Testing:** Support for multiple test scenarios by decoupling test data from execution logic.
* **Cross-Platform Emulation:** Built-in configuration for testing across desktop browsers and mobile viewports.
* **Automated CI/CD:** Ready-to-use GitHub Actions for continuous integration and automated test execution.

## Getting Started

### Prerequisites
* **Node.js** (v18 or higher)
* **npm**

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ncthanh0111/latte
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Install Playwright browsers:**
    ```bash
    npx playwright install
    ```

### Execution
* **Run all tests:** `npm run test`
* **Run UI tests:** `npm run test:ui`
* **Run API tests:** `npm run test:api`

## Reporting
The framework generates detailed execution reports to facilitate debugging and quality assessment:
* **HTML Report:** `npx playwright show-report`

## Future Roadmap
To further enhance the testing ecosystem, the framework is designed for future integration with **Appium**. This will enable native mobile application testing while sharing existing utilities and API helpers across platforms.

---
**Author:** Nguyen Chi Thanh
