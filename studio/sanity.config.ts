import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { menuItem, siteSettings } from './schemaTypes';

export default defineConfig({
  name: 'calzonepoint', title: 'Calzone Point Admin',
  projectId: 'vpdloifa', dataset: 'production',
  plugins: [structureTool({ structure: S => S.list().title('Calzone Point').items([
    S.listItem().title('Hours, Contact & Homepage').id('settings').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    S.divider(),
    ...['calzones', 'signature-pizzas', 'pizzas', 'combos', 'special-combos', 'deals', 'individuals', 'desserts'].map(category =>
      S.listItem().id(category).title(category.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')).child(
        S.documentTypeList('menuItem').title('Menu Items').apiVersion('2026-10-10').filter('_type == "menuItem" && category == $category').params({ category })
      )
    ),
    S.documentTypeListItem('menuItem').title('All Menu Items'),
  ]) })],
  schema: { types: [menuItem, siteSettings] },
  document: {
    newDocumentOptions: options => options.filter(option => option.templateId !== 'siteSettings'),
    actions: (actions, context) => context.schemaType === 'siteSettings'
      ? actions.filter(action => !['delete', 'duplicate', 'unpublish'].includes(action.action || '')) : actions,
  },
});
