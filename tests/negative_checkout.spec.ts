import { test, expect } from '@playwright/test';

test.describe('Negative Checkout Flow', () => {
    test('should display validation errors for incomplete fields during checkout', async ({ page }) => {
        await page.goto('https://magento-2.showcase-wallee.com');

        // Proceed to checkout directly (no product in cart)
        await page.goto('https://magento-2.showcase-wallee.com/checkout');

        // Attempt checkout with empty required fields
        await page.waitForTimeout(7000);
        await page.locator('.button.action.continue').click();

        // Assert error messages
        const errorMessages = await page.locator('.field-error').allInnerTexts();
        expect(errorMessages).toContain('This is a required field.');
    });
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

});