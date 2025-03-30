import { test, expect } from '@playwright/test';

test.describe('Account creation', () => {
    test('create account', async ({ page }) => {
        await page.goto('https://magento-2.showcase-wallee.com');
        await page.locator('[name="firstname"]').click();
        await page.locator('[name="firstname"]').fill('New');
        await page.locator('[name="lastname"]').click();
        await page.locator('[name="lastname"]').fill('User');
        const email = `newuser_${Date.now()}gbe@example.com`;
        await page.locator('[name="email"]').fill(email);
        await page.locator('[name="password"]').fill('Password123!');
        await page.locator('[name="password_confirmation"]').fill('Password123!');

        // Submit the form
        await page.getByRole('button', { name: 'Create an Account' }).click();


        // Step 3: Verify successful registration
        await expect(page.locator('h1.page-title')).toHaveText('My Account');

    });
});
