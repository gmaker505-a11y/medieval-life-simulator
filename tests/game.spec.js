const { test, expect } = require('@playwright/test');

async function beginLife(page, name = 'Rowan') {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.getByLabel('Character name').fill(name);
  await page.getByRole('button', { name: /Begin your life/ }).click();
  await expect(page.getByRole('heading', { name: /What will you do\?/ })).toBeVisible();
}

test('new life, yearly event, and event choice work @visual', async ({ page }, testInfo) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.setViewportSize(testInfo.project.name.startsWith('mobile')
    ? { width: 390, height: 844 } : { width: 1440, height: 1000 });

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Begin a new life' })).toBeVisible();
  await page.getByLabel('Character name').fill('Rowan');
  await page.getByLabel('Family background').selectOption('Peasant family');
  await page.getByRole('button', { name: /Begin your life/ }).click();
  await expect(page.getByRole('heading', { name: /What will you do\?/ })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('01-life-start.png'), fullPage: true });

  await page.getByRole('button', { name: /Live another year/ }).click();
  await expect(page.locator('.eyebrow')).toHaveText('A year in your life');
  await expect(page.locator('[data-event-choice]').first()).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('02-year-event.png'), fullPage: true });

  await page.locator('[data-event-choice]').first().click();
  await expect(page.getByRole('heading', { name: /What will you do\?/ })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('03-event-result.png'), fullPage: true });
  expect(errors, 'game should not throw browser JavaScript errors').toEqual([]);
});

test('all main sections render and mobile layout has no horizontal overflow @visual', async ({ page }, testInfo) => {
  const mobile = testInfo.project.name.startsWith('mobile');
  await page.setViewportSize(mobile ? { width: 360, height: 800 } : { width: 1365, height: 900 });
  await beginLife(page, 'Eleanor');

  for (const section of ['Character', 'Career', 'People', 'Wealth', 'Biography']) {
    await page.getByRole('button', { name: new RegExp(section) }).click();
    await expect(page.locator('#pageContent')).toBeVisible();
    await page.screenshot({ path: testInfo.outputPath(section.toLowerCase() + '.png'), fullPage: true });
  }

  const layout = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    document: document.documentElement.scrollWidth,
    main: document.querySelector('.main')?.getBoundingClientRect().width || 0
  }));
  expect(layout.document, 'page should not overflow horizontally').toBeLessThanOrEqual(layout.viewport);
  expect(layout.main, 'main game panel should have a visible width').toBeGreaterThan(0);
});

test('save and reload preserve the current character @visual', async ({ page }, testInfo) => {
  await page.setViewportSize(testInfo.project.name.startsWith('mobile')
    ? { width: 390, height: 844 } : { width: 1440, height: 1000 });
  await beginLife(page, 'Eleanor');
  await page.getByRole('button', { name: /Save/ }).click();
  await page.reload();
  await expect(page.locator('#sideName')).toHaveText('Eleanor');
  await expect(page.getByRole('heading', { name: /What will you do\?/ })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('saved-life.png'), fullPage: true });
});
