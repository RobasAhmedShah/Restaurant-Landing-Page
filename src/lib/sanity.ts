import { createClient } from '@sanity/client';
import { defineQuery } from 'groq';
import type { ContentItem } from '../data/content';
import type { SiteSettings } from '../data/site';

export const sanity = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'vpdloifa',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2026-10-10',
  useCdn: true,
  perspective: 'published',
});

export const CONTENT_QUERY = defineQuery(`{
  "settings": *[_type == "siteSettings" && _id == "siteSettings"][0]{
    name, welcome, tagline, address, phone, email, website, hours, videoUrl,
    "logoUrl": logo.asset->url, seoTitle, seoDescription, toppings
  },
  "menuItems": *[_type == "menuItem" && availability != "hidden"] | order(order asc, _createdAt asc){
    "id": _id, name, "description": coalesce(description, ""), category, prices,
    "imageUrl": image.asset->url, items
  }
}`);

export interface SanityContent {
  settings: (Partial<SiteSettings> & { toppings?: string[] }) | null;
  menuItems: ContentItem[];
}
