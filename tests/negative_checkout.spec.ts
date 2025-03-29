import { test, expect } from '@playwright/test';
test.describe('Invalid Login Attempt', () => {
        test('should display errors for invalid login credentials', async ({ page }) => {
            await page.goto('https://magento-2.showcase-wallee.com');

            // Navigate to login page
            await page.locator('a', { hasText: 'Sign In' }).click();


            // Fill in invalid credentials
            await page.locator('#email').fill('bad@example.com');
            await page.locator('#pass').fill('ghhfghhjhdh');

            // Submit login form
            await page.locator('#send2').click();

            // Verify error message
            const errorMessage = await page.locator('.message-error .messages').innerText();
            expect(errorMessage).toContain('The account sign-in was incorrect or your account is disabled temporarily.');
        });
    });

