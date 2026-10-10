import { readFileSync } from 'node:fs';
import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2026-10-10' }).withConfig({ projectId: 'vpdloifa', dataset: 'production', useCdn: false });
const content = JSON.parse(readFileSync(new URL('./seed/content.json', import.meta.url), 'utf8'));
const existing = await client.fetch('*[_type == "menuItem" && defined(legacyId)]{legacyId}');
const imported = new Set(existing.map(item => item.legacyId));
let count = 0;
for (const item of content.items) {
  if (imported.has(item.legacyId)) continue;
  // Sanity assigns each ordinary document its own ID. Never overwrite edits on reruns.
  await client.create(item);
  count++;
}
// Publish settings last: the website switches from its bundled menu only once import succeeds.
await client.createIfNotExists(content.settings);
console.log(`Imported ${count} menu items; preserved ${content.items.length - count} previously imported items.`);
