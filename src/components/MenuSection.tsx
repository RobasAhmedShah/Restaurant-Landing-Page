import { useEffect, useState, useRef } from 'react';
import { Info, X, Search } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  prices: {
    small?: number;
    medium?: number;
    large?: number;
    single?: number;
  };
  category: string;
}

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('calzones');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef<HTMLElement>(null);

  const categories = [
    { id: 'calzones', name: 'Calzones' },
    { id: 'pizzas', name: 'Pizzas' },
    { id: 'combos', name: 'Combos' },
    { id: 'individuals', name: 'Individuals' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const menuItems: MenuItem[] = [
    // Calzones
    {
      id: 'chicken-calzone',
      name: 'Chicken Calzone (Special)',
      description: 'Chicken, Coleslaw, Garlic Sauce',
      prices: { small: 11.99, medium: 14.99, large: 17.99 },
      category: 'calzones'
    },
    {
      id: 'beef-calzone',
      name: 'Beef Calzone',
      description: 'Ground Beef, Coleslaw, Garlic Sauce',
      prices: { small: 11.99, medium: 14.99, large: 17.99 },
      category: 'calzones'
    },
    {
      id: 'mix-calzone',
      name: 'Mix Calzone',
      description: 'Chicken, Beef, Coleslaw, Garlic Sauce',
      prices: { small: 11.99, medium: 14.99, large: 17.99 },
      category: 'calzones'
    },
    {
      id: 'meaty-calzone',
      name: 'Meaty Calzone',
      description: 'Chicken, Beef, Pepperoni, Coleslaw, Garlic Sauce',
      prices: { small: 11.99, medium: 14.99, large: 17.99 },
      category: 'calzones'
    },
    {
      id: 'chicken-spinach-calzone',
      name: 'Chicken and Spinach Calzone',
      description: 'Chicken, Spinach melted with Feta Cheese, Garlic Sauce',
      prices: { small: 11.99, medium: 14.99, large: 17.99 },
      category: 'calzones'
    },
    {
      id: 'veggie-calzone',
      name: 'Veggie Calzone',
      description: 'Onion, Olive, Tomato, Green Pepper, Coleslaw, Garlic Sauce',
      prices: { small: 11.99, medium: 14.99, large: 17.99 },
      category: 'calzones'
    },
    {
      id: 'spinach-calzone',
      name: 'Spinach Calzone',
      description: 'Spinach melted with Feta Cheese, Garlic Sauce',
      prices: { small: 11.99, medium: 14.99, large: 17.99 },
      category: 'calzones'
    },
    {
      id: 'cheese-calzone',
      name: 'Cheese Calzone',
      description: 'Feta Cheese, Mayonnaise, Garlic Sauce, Hot Sauce',
      prices: { small: 11.99, medium: 14.99, large: 17.99 },
      category: 'calzones'
    },

    // Pizzas
    {
      id: 'garden-pizza',
      name: 'Garden Pizza',
      description: 'Tomato, Onion, Black Olives, Green Pepper',
      prices: { small: 13.99, medium: 16.99, large: 19.99 },
      category: 'pizzas'
    },
    {
      id: 'california-pizza',
      name: 'California Pizza',
      description: 'Chicken, Sun-Dried Tomatoes, Jalapeno',
      prices: { small: 13.99, medium: 16.99, large: 19.99 },
      category: 'pizzas'
    },
    {
      id: 'chicken-fajita-pizza',
      name: 'Chicken Fajita Pizza',
      description: 'Chicken Tikka, Green Pepper, Onion, Cheddar Cheese',
      prices: { small: 13.99, medium: 16.99, large: 19.99 },
      category: 'pizzas'
    },
    {
      id: 'dream-pizza',
      name: 'Dream Pizza',
      description: 'Chicken, Beef Pepperoni, Onions, Mushrooms, Green Pepper',
      prices: { small: 13.99, medium: 16.99, large: 19.99 },
      category: 'pizzas'
    },
    {
      id: 'meat-lovers-pizza',
      name: 'Meat Lovers Pizza',
      description: 'Beef Pepperoni, Chicken, Beef, Cheese',
      prices: { small: 13.99, medium: 16.99, large: 19.99 },
      category: 'pizzas'
    },
    {
      id: 'mexican-pizza',
      name: 'Mexican Pizza',
      description: 'Beef, Tomato, Onion, Hot Banana Peppers, Cheese',
      prices: { small: 13.99, medium: 16.99, large: 19.99 },
      category: 'pizzas'
    },
    {
      id: 'greek-pizza',
      name: 'Greek Pizza',
      description: 'Spinach, Feta, Green Olives, Onion',
      prices: { small: 13.99, medium: 16.99, large: 19.99 },
      category: 'pizzas'
    },

    // Combos
    {
      id: 'combo-1',
      name: 'Combo 1',
      description: 'Small Chicken Calzone, 6 Wings, 1 Can of Pop, 1 Dipping Sauce',
      prices: { single: 17.99 },
      category: 'combos'
    },
    {
      id: 'combo-2',
      name: 'Combo 2',
      description: 'Medium Chicken Calzone, 10 Wings, 2 Cans of Pop, 2 Dipping Sauces',
      prices: { single: 24.99 },
      category: 'combos'
    },
    {
      id: 'combo-3',
      name: 'Combo 3',
      description: '2 Medium Chicken Calzones, 16 Wings, 2L Pop, 3 Dipping Sauces',
      prices: { single: 39.99 },
      category: 'combos'
    },
    {
      id: 'combo-4',
      name: 'Combo 4',
      description: 'Small One Topping Pizza, 6 Wings, 1 Can of Pop, 1 Dipping Sauce',
      prices: { single: 17.99 },
      category: 'combos'
    },
    {
      id: 'combo-5',
      name: 'Combo 5',
      description: '1 Medium One Topping Pizza, 10 Wings, 2 Cans of Pop, 2 Dipping Sauces',
      prices: { single: 24.99 },
      category: 'combos'
    },
    {
      id: 'combo-6',
      name: 'Combo 6',
      description: '2 Medium One Topping Pizzas, 16 Wings, 2L Pop, 3 Dipping Sauces',
      prices: { single: 39.99 },
      category: 'combos'
    },
    // New "Add-in Combo" Section from Image
    {
      id: 'combo-7',
      name: 'Combo 7',
      description: 'Small Calzone, Small Fries, 1 Can of Pop, 1 Dipping Sauce',
      prices: { single: 13.99 },
      category: 'combos'
    },
    {
      id: 'combo-8',
      name: 'Combo 8',
      description: 'Medium Calzone, Medium Fries, 2 Cans of Pop, 2 Dipping Sauces',
      prices: { single: 19.99 },
      category: 'combos'
    },
    {
      id: 'combo-9',
      name: 'Combo 9',
      description: 'Large Calzone, Large Fries, 2L Pop, 3 Dipping Sauces',
      prices: { single: 24.99 },
      category: 'combos'
    },

    // Individuals
    {
      id: 'small-pizza',
      name: 'One Small One Topping Pizza',
      description: '',
      prices: { single: 11.99 },
      category: 'individuals'
    },
    {
      id: 'medium-pizza',
      name: 'One Medium One Topping Pizza',
      description: '',
      prices: { single: 13.99 },
      category: 'individuals'
    },
    {
      id: 'large-pizza',
      name: 'One Large One Topping Pizza',
      description: '',
      prices: { single: 17.99 },
      category: 'individuals'
    },
    {
      id: 'chicken-burger',
      name: 'Chicken Burger',
      description: '',
      prices: { single: 6.99 },
      category: 'individuals'
    },
    {
      id: '6-wings',
      name: '6 Wings',
      description: '',
      prices: { single: 9.99 },
      category: 'individuals'
    },
    {
      id: '12-wings',
      name: '12 Wings',
      description: '',
      prices: { single: 18.99 },
      category: 'individuals'
    },
    {
      id: '18-wings',
      name: '18 Wings',
      description: '',
      prices: { single: 26.99 },
      category: 'individuals'
    },
    {
      id: 'onion-rings',
      name: '10 Onion Rings',
      description: '',
      prices: { single: 5.99 },
      category: 'individuals'
    },
    {
      id: 'poutine',
      name: 'Regular Poutine',
      description: '',
      prices: { single: 4.99 },
      category: 'individuals'
    },
    {
      id: 'small-fries',
      name: 'Small Fries',
      description: '',
      prices: { single: 1.99 },
      category: 'individuals'
    },
    {
      id: 'medium-fries',
      name: 'Medium Fries',
      description: '',
      prices: { single: 3.99 },
      category: 'individuals'
    },
    {
      id: 'large-fries',
      name: 'Large Fries',
      description: '',
      prices: { single: 4.99 },
      category: 'individuals'
    },
    {
      id: 'can-pop',
      name: 'Can of Pop',
      description: '',
      prices: { single: 1.99 },
      category: 'individuals'
    },
    {
      id: 'bottle-pop',
      name: 'Bottle of Pop',
      description: '',
      prices: { single: 2.99 },
      category: 'individuals'
    },
    {
      id: '2l-pop',
      name: '2L Pop',
      description: '',
      prices: { single: 4.99 },
      category: 'individuals'
    },
    {
      id: 'water-bottle',
      name: 'Water Bottle',
      description: '',
      prices: { single: 0.99 },
      category: 'individuals'
    },
    {
      id: 'dipping-sauce',
      name: 'Dipping Sauce',
      description: '',
      prices: { single: 0.5 },
      category: 'individuals'
    },

    // Desserts
    {
      id: 'falooda',
      name: 'Falooda',
      description: 'Traditional dessert drink with rose syrup, basil seeds, and vermicelli',
      prices: { single: 7.99 },
      category: 'desserts'
    },
    {
      id: 'cheesecake',
      name: 'Cheesecake',
      description: 'Classic New York style cheesecake',
      prices: { single: 2.99 },
      category: 'desserts'
    },
    {
      id: 'mango-shake',
      name: 'Mango Shake',
      description: '',
      prices: { single: 4.99 },
      category: 'desserts'
    },
    {
      id: 'oreo-shake',
      name: 'Oreo Shake',
      description: '',
      prices: { single: 5.99 },
      category: 'desserts',
    },
    {
      id: 'vanilla-shake',
      name: 'Vanilla Shake',
      description: '',
      prices: { single: 5.99 },
      category: 'desserts',
    },
    {
      id: 'banana-milk-shake',
      name: 'Banana Milk Shake',
      description: '',
      prices: { single: 5.99 },
      category: 'desserts',
    },
    {
      id: 'strawberry-shake',
      name: 'Strawberry Shake',
      description: '',
      prices: { single: 5.99 },
      category: 'desserts',
    },
    {
      id: 'chocolate-shake',
      name: 'Chocolate Shake',
      description: '',
      prices: { single: 5.99 },
      category: 'desserts',
    },
  ];

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
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-orange-500 line-clamp-1">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="p-1 hover:bg-orange-500 rounded-full transition-colors ml-2 flex-shrink-0"
                    >
                      <Info className="h-5 w-5 text-white" />
                    </button>
                  </div>
                  <p className={`text-gray-300 mb-4 ${item.description ? 'line-clamp-2' : 'text-sm italic'}`}>
                    {item.description || ''}
                  </p>
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      {item.prices.single !== undefined ? (
                        <p className="text-white font-semibold">${item.prices.single.toFixed(2)}</p>
                      ) : (
                        <div className="flex flex-col space-y-1">
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <span className="text-sm text-gray-400">S</span>
                              <p className="text-white font-semibold">${item.prices.small?.toFixed(2)}</p>
                            </div>
                            <div>
                              <span className="text-sm text-gray-400">M</span>
                              <p className="text-white font-semibold">${item.prices.medium?.toFixed(2)}</p>
                            </div>
                            <div>
                              <span className="text-sm text-gray-400">L</span>
                              <p className="text-white font-semibold">${item.prices.large?.toFixed(2)}</p>
                            </div>
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
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-black border border-orange-500 rounded-lg max-w-md w-full p-6 relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-1 hover:bg-orange-500 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">{selectedItem.name}</h3>
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
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Small</span>
                      <span className="text-white font-semibold">${selectedItem.prices.small?.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Medium</span>
                      <span className="text-white font-semibold">${selectedItem.prices.medium?.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Large</span>
                      <span className="text-white font-semibold">${selectedItem.prices.large?.toFixed(2)}</span>
                    </div>
                  </>
                )}
              </div>
              <button className="w-full mt-6 bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        )}

        {/* Extra Info Sections */}
        {(activeCategory === 'calzones' || activeCategory === 'pizzas') && (
          <div className="mt-12 p-6 bg-white/5 rounded-lg border border-orange-500/10">
            <h4 className="text-xl font-semibold text-orange-500 mb-4">
              Extra {activeCategory === 'calzones' ? 'Filling' : 'Toppings'}
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <span className="text-gray-400">Small</span>
                <p className="text-white font-semibold">$0.99</p>
              </div>
              <div>
                <span className="text-gray-400">Medium</span>
                <p className="text-white font-semibold">$1.99</p>
              </div>
              <div>
                <span className="text-gray-400">Large</span>
                <p className="text-white font-semibold">$2.99</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;