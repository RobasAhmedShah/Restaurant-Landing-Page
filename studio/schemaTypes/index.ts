import { defineType, defineField, defineArrayMember } from 'sanity';
import { TagIcon } from '@sanity/icons/Tag';
import { CogIcon } from '@sanity/icons/Cog';

const categoryOptions = [
  { title: 'Calzones', value: 'calzones' }, { title: 'Signature Pizzas', value: 'signature-pizzas' },
  { title: 'Pizzas', value: 'pizzas' }, { title: 'Combos', value: 'combos' },
  { title: 'Special Combos', value: 'special-combos' }, { title: 'Deals', value: 'deals' },
  { title: 'Individuals', value: 'individuals' }, { title: 'Desserts', value: 'desserts' },
];

export const menuItem = defineType({
  name: 'menuItem', title: 'Menu Item', type: 'document', icon: TagIcon,
  initialValue: { availability: 'available', order: 100 },
  fields: [
    defineField({ name: 'name', title: 'Item Name', type: 'string', validation: R => R.required() }),
    defineField({ name: 'category', type: 'string', options: { list: categoryOptions }, validation: R => R.required() }),
    defineField({ name: 'description', title: 'Ingredients / Description', type: 'text', rows: 3 }),
    defineField({ name: 'prices', title: 'Prices (CAD)', type: 'object', description: 'Use Single Price for deals, combos, sides and desserts. For pizzas and calzones, fill all four sizes.', fields: [
      ...(['single', 'small', 'medium', 'large', 'extraLarge'] as const).map(name => defineField({
        name, title: name === 'single' ? 'Single Price' : name === 'extraLarge' ? 'Extra Large' : name[0].toUpperCase() + name.slice(1),
        type: 'number', validation: R => R.min(0).precision(2),
      })),
    ], validation: R => R.required().custom((value, context) => {
      const sizes = ['calzones', 'pizzas', 'signature-pizzas'].includes(String(context.document?.category));
      if (!value) return 'Add prices';
      const prices = value as Record<string, unknown>;
      if (sizes && prices.single != null) return 'Clear Single Price for pizzas and calzones';
      return (sizes ? ['small', 'medium', 'large', 'extraLarge'] : ['single']).every(key => typeof prices[key] === 'number') || 'Fill the applicable prices';
    }) }),
    defineField({ name: 'items', title: 'Included Items (Deals)', type: 'array', of: [defineArrayMember({ type: 'string' })], hidden: ({ document }) => document?.category !== 'deals', validation: R => R.custom((value, context) => context.document?.category !== 'deals' || (value && value.length > 0) || 'Add the included items') }),
    defineField({ name: 'image', title: 'Photo (Optional)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'availability', title: 'Visibility', type: 'string', options: { list: [{ title: 'Show on Menu', value: 'available' }, { title: 'Hide from Menu', value: 'hidden' }], layout: 'radio' }, validation: R => R.required() }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', description: 'Smaller numbers appear first.', validation: R => R.required().integer().min(0) }),
    defineField({ name: 'legacyId', title: 'Import Identifier', type: 'string', readOnly: true, hidden: true }),
  ],
  preview: { select: { title: 'name', subtitle: 'category', media: 'image' } },
  orderings: [{ title: 'Display Order', name: 'displayOrder', by: [{ field: 'order', direction: 'asc' }] }],
});

export const siteSettings = defineType({
  name: 'siteSettings', title: 'Website Settings', type: 'document', icon: CogIcon,
  fields: [
    ...['name', 'welcome', 'tagline', 'address', 'phone'].map(name => defineField({ name, title: ({ name: 'Restaurant Name', welcome: 'Welcome Text', tagline: 'Tagline', address: 'Address', phone: 'Phone Number' } as Record<string, string>)[name], type: 'string', validation: R => R.required() })),
    defineField({ name: 'email', type: 'string', validation: R => R.required().email() }),
    defineField({ name: 'website', type: 'url', validation: R => R.required().uri({ scheme: ['https'] }) }),
    defineField({ name: 'hours', title: 'Opening Hours', type: 'array', of: [defineArrayMember({ type: 'string' })], validation: R => R.required().min(1), description: 'One line per group of days, e.g. Monday–Thursday: 4 PM–11 PM.' }),
    defineField({ name: 'toppings', title: 'Available Toppings', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
    defineField({ name: 'logo', type: 'image', description: 'Leave empty to keep the current logo.' }),
    defineField({ name: 'videoUrl', title: 'Background Video URL', type: 'url', description: 'A direct MP4 URL hosted by your video provider. Leave empty for a plain background.', validation: R => R.uri({ scheme: ['https'] }) }),
    defineField({ name: 'seoTitle', title: 'Browser / Search Title', type: 'string', validation: R => R.required() }),
    defineField({ name: 'seoDescription', title: 'Search Description', type: 'text', rows: 3, validation: R => R.required() }),
  ], preview: { prepare: () => ({ title: 'Calzone Point Website Settings' }) },
});
