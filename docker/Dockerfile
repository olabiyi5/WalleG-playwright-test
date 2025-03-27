# Base image: Use Node.js with Playwright installed
FROM mcr.microsoft.com/playwright:v1.39.0

WORKDIR /app

# Copy package and dependencies
COPY package.json package-lock.json tsconfig.json playwright.config.ts ./

# Install dependencies
RUN npm install

# Copy test files
COPY tests ./tests

# Run tests
CMD ["npx", "playwright", "test"]