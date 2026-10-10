import { createContext, useContext } from 'react';
import { menuItems, toppings, deals, type MenuItem } from './menu';
import { defaultSettings, type SiteSettings } from './site';

export type ContentItem = MenuItem & { imageUrl?: string; items?: string[] };
export interface SiteContent {
  settings: SiteSettings;
  menuItems: ContentItem[];
  toppings: string[];
  deals: typeof deals;
}
export const fallbackContent: SiteContent = { settings: defaultSettings, menuItems, toppings, deals };
export const ContentContext = createContext<SiteContent>(fallbackContent);
export const useSiteContent = () => useContext(ContentContext);
