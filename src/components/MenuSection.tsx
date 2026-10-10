import { useSiteContent } from '../data/content';
import { useEffect, useState, useRef } from 'react';
import { Info, X, Search } from 'lucide-react';

import { categories, sizeLabel, type MenuItem } from '../data/menu';

const MenuSection = () => {
  const { menuItems, toppings, settings } = useSiteContent();
  const orderPhone = settings.phone.replace(/[^+\d]/g, '');
  const [activeCategory, setActiveCategory] = useState('calzones');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef<HTMLElement>(null);

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
  
    // If there's a search query, ignore the category filter
    if (searchQuery !== '') {
      return matchesSearch;
    }
  
    // If no search query, filter by active category
    const matchesCategory = activeCategory === item.category;
    return matchesSearch && matchesCategory;
  });
  
  // Automatically switch to the category of the first search result (if any)
  useEffect(() => {
    if (searchQuery !== '' && filteredItems.length > 0) {
      setActiveCategory(filteredItems[0].category);
    }
  }, [searchQuery, filteredItems]);
  
  const [isSticky, setIsSticky] = useState(false);
  
  // Sticky navigation logic
  useEffect(() => {
    const menuSection = document.getElementById('menu');
    const navBar = document.getElementById('category-nav');
    const searchBar = document.getElementById('search-bar');
    
    if (!menuSection || !navBar || !searchBar) return;
    
    const handleScroll = () => {
      const menuRect = menuSection.getBoundingClientRect();
      const searchBarBottom = searchBar.getBoundingClientRect().bottom;
      const menuBottom = menuRect.bottom;
      
      // Make nav sticky when scroll passes search bar and menu section is still visible
      if (searchBarBottom <= 0 && menuBottom > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle category change and scroll
  // Function to handle category change and scroll
const handleCategoryChange = (categoryId: string) => {
  setActiveCategory(categoryId);
  
  // Scroll to search bar
  const searchBar = document.getElementById('search-bar');
  if (searchBar) {
    // Adding a small delay to ensure state updates before scrolling
    setTimeout(() => {
      searchBar.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }
};

  return (
    <section id="menu" className="py-20 bg-black" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Our </span>
          <span className="text-orange-500">Menu</span>
        </h2>
        {/* Search Bar */}
        <div id="search-bar" className="relative max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 text-white border border-orange-500/30 rounded-full py-3 px-6 pl-12 focus:outline-none focus:border-orange-500 transition-colors"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
          </div>
        </div>

        {/* Category Tabs - Sticky when scrolling */}
        <div 
          id="category-nav"
          className={`${
            isSticky 
              ? 'fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm shadow-lg px-4 py-3' 
              : ''
          } transition-all duration-300`}
        >
          <div className={`flex justify-start space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-orange-500 snap-x snap-mandatory ${
            isSticky ? 'max-w-7xl mx-auto' : 'pl-4 pr-4'
          }`}>
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-1 text-sm rounded-full transition-colors duration-300 whitespace-nowrap shrink-0 snap-start ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/5 text-white hover:bg-orange-500 hover:text-white'
                }`}
              >
                {category.name}
              </button>
              ))}
            </div>
          </div>
        </div>

        {/* Add spacer when nav is sticky to prevent content jump */}
        {isSticky && <div className="h-16"></div>}

        {/* Menu Items Grid */}
        <div id="menu-items-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors duration-300 spotlight border border-orange-500/10"
              >
                {item.imageUrl && <img src={item.imageUrl} alt={item.name} loading="lazy" className="w-full aspect-video object-cover" />}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-orange-500">
                      {item.name}
                    </h3>
                    <button
                      aria-label={`View details for ${item.name}`}
                      onClick={() => setSelectedItem(item)}
                      className="p-1 hover:bg-orange-500 rounded-full transition-colors ml-2 flex-shrink-0"
                    >
                      <Info className="h-5 w-5 text-white" />
                    </button>
                  </div>
                  <p className={`text-gray-300 mb-4 ${item.description ? '' : 'text-sm italic'}`}>
                    {item.description || ''}
                  </p>
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      {item.prices.single !== undefined ? (
                        <p className="text-white font-semibold">${item.prices.single.toFixed(2)}</p>
                      ) : (
                        <div className="flex flex-col space-y-1">
                          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                            {(['small', 'medium', 'large', 'extraLarge'] as const).map(size => (
                              <div key={size}>
                                <span className="text-sm text-gray-400">{sizeLabel(item, size)}</span>
                                <p className="text-white font-semibold">${item.prices[size]?.toFixed(2)}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No items found matching your search.</p>
            </div>
          )}
        </div>
        
        {/* Info Dialog */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[60]">
            <div role="dialog" aria-modal="true" aria-label={selectedItem.name} className="bg-black border border-orange-500 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto p-6 relative">
              <button
                aria-label="Close menu details"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-1 hover:bg-orange-500 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
              <h3 className="text-2xl font-bold text-orange-500 mb-4 pr-10">{selectedItem.name}</h3>
              <p className="text-gray-300 mb-6">
                {selectedItem.description || 'No description available'}
              </p>
              <div className="space-y-4">
                {selectedItem.prices.single !== undefined ? (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Price</span>
                    <span className="text-white font-semibold">${selectedItem.prices.single.toFixed(2)}</span>
                  </div>
                ) : (
                  <>
                    {(['small', 'medium', 'large', 'extraLarge'] as const).map(size => (
                      <div key={size} className="flex justify-between items-center">
                        <span className="text-gray-400">{sizeLabel(selectedItem, size)}</span>
                        <span className="text-white font-semibold">${selectedItem.prices[size]?.toFixed(2)}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <a href={`tel:${orderPhone}`} className="block text-center w-full mt-6 bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition-colors">
                Call to Order
              </a>
            </div>
          </div>
        )}

        {/* Toppings available for pizzas and combos */}
        {['pizzas', 'signature-pizzas', 'combos', 'special-combos'].includes(activeCategory) && (
          <div className="mt-12 p-6 bg-white/5 rounded-lg border border-orange-500/10">
            <h4 className="text-xl font-semibold text-orange-500 mb-4">Toppings Selection</h4>
            <p className="text-gray-300">{toppings.join(', ')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;