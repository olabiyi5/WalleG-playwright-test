import { test, expect } from '@playwright/test';

test.describe('Search for a Product', () => {
    test('should return results for a valid product search', async ({ page }) => {
        await page.goto('https://magento-2.showcase-wallee.com');

        // Enter search query
        await page.locator('#search').fill('shirt'); // Modify the search term based on available products
        await page.locator('#search').press('Enter');

        // Verify search results are displayed
        const productsFound = await page.locator('.product-item').count();
        expect(productsFound).toBeGreaterThan(0);
    });

    test('should display no results for an invalid product search', async ({ page }) => {
        await page.goto('https://magento-2.showcase-wallee.com');

        // Enter an invalid product search query
        await page.locator('#search').fill('invalidProductName123');
        await page.locator('#search').press('Enter');

        // Verify no products message
        const noResultsMessage = await page.locator('.message.notice').innerText();
        expect(noResultsMessage).toContain('Your search returned no results.');
    });

    });

