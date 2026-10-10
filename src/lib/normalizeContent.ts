import type { SiteContent } from '../data/content';
import type { SanityContent } from './sanity';

export function normalizeContent(result: SanityContent, fallback: SiteContent): SiteContent {
  if (!result.settings) return fallback;
  const settings = { ...fallback.settings };
  for (const key of Object.keys(settings) as (keyof typeof settings)[]) {
    const value = result.settings[key];
    if (value !== undefined && value !== null) Object.assign(settings, { [key]: value });
  }
  settings.videoUrl = result.settings.videoUrl ?? '';
  settings.logoUrl = result.settings.logoUrl ?? '';
  const menuItems = result.menuItems.filter(item => {
    const sizes = ['calzones', 'pizzas', 'signature-pizzas'].includes(item.category);
    const keys = sizes ? ['small', 'medium', 'large', 'extraLarge'] as const : ['single'] as const;
    return item.name && item.category && item.prices && keys.every(key => {
      const price = item.prices[key];
      return typeof price === 'number' && Number.isFinite(price) && price >= 0;
    });
  }).map(item => {
    if (['calzones', 'pizzas', 'signature-pizzas'].includes(item.category)) {
      const prices = { ...item.prices };
      delete prices.single;
      return { ...item, prices };
    }
    return item.category === 'deals' && item.items ? { ...item, description: item.items.join(', ') } : item;
  });
  return {
    settings, menuItems,
    toppings: result.settings.toppings ?? fallback.toppings,
    deals: menuItems.filter(item => item.category === 'deals').map(item => ({
      id: item.id, name: item.name, price: item.prices.single!, items: item.items ?? [item.description],
    })),
  };
}
