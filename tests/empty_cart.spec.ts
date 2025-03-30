import { test, expect } from '@playwright/test';

// //test.describe('Positive Checkout Flow', () => {
//     test('should successfully complete the checkout process', async ({ page }) => {
//         await page.goto('https://magento-2.showcase-wallee.com');
//
//         // Navigate to the first product category
//         await page.locator('.level-top > a').first().click();
//         await page.waitForSelector('.product-item-link');
//
//         // Add the first product to the cart
//         await page.locator('.product-item-link').first().click();
//         await page.locator('#product-addtocart-button').click();
//
//         // Proceed to checkout
//         await page.locator('.showcart').click();
//         await page.getByText('Proceed to Checkout', { exact: true }).click();
//
//         // Fill in customer details
//         await page.locator('#customer-email').fill('testuser@example.com');
//         await page.locator('[name="firstname"]').fill('Test');
//         await page.locator('[name="lastname"]').fill('User');
//         await page.locator('[name="street[0]"]').fill('123 Test Street');
//         await page.locator('[name="city"]').fill('Test City');
//         await page.locator('[name="postcode"]').fill('90001');
//         await page.locator('[name="telephone"]').fill('1234567890');
//
//         // Continue to payment
//         await page.locator('.button.action.continue').click();
//
//         // Place the order (assuming default payment method is selected)
//         await page.waitForSelector('.place-order-button');
//         await page.locator('.place-order-button').click();
//
//         // Verify successful checkout
//         await expect(page.locator('.checkout-success')).toHaveText('Thank you for your order!');
//     });
// });

test.describe('Empty Cart Checkout Attempt', () => {
    test('should display error message for empty cart checkout', async ({ page }) => {
        await page.goto('https://magento-2.showcase-wallee.com/checkout/cart');

        // Attempt checkout without items in the cart
        await page.locator('.checkout').click();

        // Verify error message for empty cart
        const errorMessage = await page.locator('.cart-empty').innerText();
        expect(errorMessage).toContain('You have no items in your shopping cart.');
    });
});