const { test, expect } = require('@playwright/test');
const path = require('path');

test('new life, choice and year advancement work @visual', async ({ page }, testInfo) => {
  await page.setViewportSize(testInfo.project.name.startsWith('mobile')
    ? { width: 390, height: 844 } : { width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Begin a new life' })).toBeVisible();
  await page.getByLabel('Character name').fill('Rowan');
  await page.getByLabel('Family background').selectOption('Peasant family');
  await page.getByRole('button', { name: /Begin your life/ }).click();
  await expect(page.getByRole('heading', { name: /What will you do\?/ })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('life-start.png'), fullPage: true });
  await page.getByRole('button', { name: /Live another year/ }).click();
  await expect(page.getByRole('heading', { name: /A year in your life/ })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('year-event.png'), fullPage: true });
});

test('navigation sections render and mobile layout has no horizontal overflow @visual', async ({ page }, testInfo) => {
  await page.setViewportSize(testInfo.project.name.startsWith('mobile')
    ? { width: 360, height: 800 } : { width: 1365, height: 900 });
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.getByRole('button', { name: /Begin your life/ }).click();
  for (const section of ['Character', 'Career', 'People', 'Wealth', 'Biography']) {
    await page.getByRole('button', { name: new RegExp(section) }).click();
    await expect(page.locator('#pageContent')).toBeVisible();
    await page.screenshot({ path: testInfo.outputPath(section.toLowerCase() + '.png'), fullPage: true });
  }
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow, 'page should not overflow horizontally at this viewport').toBe(false);
});

test('save and reload preserve the current character @visual', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.getByLabel('Character name').fill('Eleanor');
  await page.getByRole('button', { name: /Begin your life/ }).click();
  await page.getByRole('button', { name: /Save/ }).click();
  await page.reload();
  await expect(page.locator('#sideName')).toHaveText('Eleanor');
  await page.screenshot({ path: testInfo.outputPath('saved-life.png'), fullPage: true });
});