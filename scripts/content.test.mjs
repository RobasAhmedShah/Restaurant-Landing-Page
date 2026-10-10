import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';
import ts from 'typescript';

const code = ts.transpileModule(readFileSync(new URL('../src/lib/normalizeContent.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { normalizeContent } = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
const seed = JSON.parse(readFileSync(new URL('../studio/seed/content.json', import.meta.url), 'utf8'));
const fallback = { settings: { ...seed.settings, logoUrl: '' }, menuItems: seed.items, toppings: seed.settings.toppings, deals: [] };

test('uninitialized project preserves the existing menu', () => {
  assert.equal(normalizeContent({ settings: null, menuItems: [] }, fallback), fallback);
});
test('published content can intentionally remove every menu item', () => {
  const content = normalizeContent({ settings: { name: 'Updated Name' }, menuItems: [] }, fallback);
  assert.equal(content.settings.name, 'Updated Name');
  assert.equal(content.settings.phone, fallback.settings.phone);
  assert.equal(content.menuItems.length, 0);
  assert.equal(fallback.settings.name, 'Calzone Point');
});
test('updated deal contents and price agree across menu and carousel', () => {
  const content = normalizeContent({ settings: {}, menuItems: [{ id: 'test', name: 'Deal', category: 'deals', description: 'Old contents', items: ['New contents'], prices: { single: 0 } }] }, fallback);
  assert.equal(content.menuItems[0].description, 'New contents');
  assert.equal(content.deals[0].price, 0);
  assert.deepEqual(content.deals[0].items, ['New contents']);
});
test('incomplete prices are excluded and all supplied menu items survive conversion', () => {
  const content = normalizeContent({ settings: {}, menuItems: [...seed.items, { name: 'Broken Pizza', category: 'pizzas', prices: { small: 5 } }] }, fallback);
  assert.equal(content.menuItems.length, 53);
  assert.equal(content.deals.length, 5);
  assert.equal(content.menuItems.filter(item => item.category === 'signature-pizzas').length, 2);
});
