import { useEffect, useState, type ReactNode } from 'react';
import { ContentContext, fallbackContent, type SiteContent } from '../data/content';
import { normalizeContent } from '../lib/normalizeContent';
import { CONTENT_QUERY, sanity, type SanityContent } from '../lib/sanity';

export default function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(fallbackContent);
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    sanity.fetch<SanityContent>(CONTENT_QUERY, {}, { signal: controller.signal }).then(result => {
      // Until the initial settings document is published, keep the existing site intact.
      if (!result.settings) return;
      if (controller.signal.aborted) return;
      const updated = normalizeContent(result, fallbackContent);
      const { settings } = updated;
      setContent(updated);
      document.title = settings.seoTitle;
      document.querySelector('meta[name="description"]')?.setAttribute('content', settings.seoDescription);
    }).catch(error => {
      if (!controller.signal.aborted) console.warn('Sanity content could not load; using the bundled menu.', error.message);
    }).finally(() => clearTimeout(timeout));
    return () => { clearTimeout(timeout); controller.abort(); };
  }, []);
  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}
