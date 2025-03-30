# Playwright E2E Testing Suite for Magento-2 Showcase

## Overview

This project contains automated tests using Playwright and TypeScript to validate key functionalities of the Magento-2 showcase website.

## Features

- Test Scenarios:
    - checkout items flow.
    - Empty cart spec
    - search product
- Dockerized testing environment.
- CI pipeline-ready configuration.

---

## Prerequisites

1. Install [Node.js](https://nodejs.org/) (v16 or above).
2. Install [Docker](https://www.docker.com/) (optional for containerized execution).

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the tests:
    - Local machine:
      ```bash
      npx playwright test
      ```
    - With Docker:
      ```bash
      ./docker/run-tests.sh
      ```

---

## CI Integration

Add the following steps to your CI pipeline:
1. Build the Docker image.
2. Execute `docker-compose up` to run the suite.