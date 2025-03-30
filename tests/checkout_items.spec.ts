import { test, expect } from '@playwright/test';

test.describe('Positive Checkout Flow', () => {
  test('should successfully complete the checkout process', async ({ page }) => {
    await page.goto('https://magento-2.showcase-wallee.com');

    // Navigate to the first product category
    await page.locator('.level-top > a').first().click();
    await page.waitForSelector('.product-item-link');

    // Add the first product to the cart
    await page.locator('.product-item-link').first().click()
    await page.locator('#product-addtocart-button').click();

    // Proceed to checkout
    await page.locator('.showcart').click();
    await page.waitForTimeout(1000);
    await page.getByText("Proceed to Checkout", { exact: true }).click();
    // Fill in customer details
    await page.locator('#customer-email').fill('gbengaolabiyi5@gmail..com');
    await page.locator('[name="firstname"]').fill('Gbenga');
    await page.locator('[name="lastname"]').fill('Olabiyi');
    await page.locator('[name="street[0]"]').fill('Paryziaus komunos 10');
    await page.locator('[name="city"]').fill('Klaipeda');
    await page.locator('[name="postcode"]').fill('91101');
    await page.locator('[name="telephone"]').fill('37063080240');

    // Continue to payment
    await page.locator('.button.action.continue').click();

    // Place the order (assuming default payment method is selected)
    await page.waitForSelector('.place-order-button');
    await page.locator('.place-order-button').click();

    // Verify successful checkout
    await expect(page.locator('.checkout-success')).toHaveText('Thank you for your order!');
  });
});
