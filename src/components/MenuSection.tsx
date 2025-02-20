import React, { useEffect, useState } from 'react';
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
    {
      id: 'burger-deal',
      name: 'Burger Deal',
      description: 'Chicken Burger, Small Fries, Can of Pop',
      prices: { single: 10.99 },
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
    }
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

  return (
    <section id="menu" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Our </span>
          <span className="text-orange-500">Menu</span>
        </h2>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
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

        {/* Category Tabs */}
        <div className="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-orange-500">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/5 text-white hover:bg-orange-500 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    {item.description || 'No description available'}
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
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm">
                      Order Now
                    </button>
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