import { test, expect } from '@playwright/test';
test.describe('Empty Cart Checkout Attempt', () => {
    test('should display error message for empty cart checkout', async ({ page }) => {
        await page.goto('https://magento-2.showcase-wallee.com/checkout/cart');

        // Attempt checkout without items in the cart
        await page.locator('.showcart').click();

        // Verify error message for empty cart
        const errorMessage = await page.locator('.cart-empty').innerText();
        expect(errorMessage).toContain('You have no items in your shopping cart.');
    });
});