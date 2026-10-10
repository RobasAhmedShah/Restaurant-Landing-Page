export interface MenuItem {
  id: string;
  name: string;
  description: string;
  prices: { small?: number; medium?: number; large?: number; extraLarge?: number; single?: number };
  category: string;
}

export const categories = [
  { id: 'calzones', name: 'Calzones' },
  { id: 'signature-pizzas', name: 'Signature Pizzas' },
  { id: 'pizzas', name: 'Pizzas' },
  { id: 'combos', name: 'Combos' },
  { id: 'special-combos', name: 'Special Combos' },
  { id: 'deals', name: 'Deals' },
  { id: 'individuals', name: 'Individuals' },
  { id: 'desserts', name: 'Desserts' },
];

const calzonePrices = { small: 13.99, medium: 17.99, large: 23.99, extraLarge: 29.99 };
const pizzaPrices = { small: 14.99, medium: 17.99, large: 21.99, extraLarge: 25.99 };
const signaturePrices = { small: 15.99, medium: 19.99, large: 24.99, extraLarge: 29.99 };

export const deals = [
  { id: 'deal-1', name: 'Deal 1', price: 17.49, items: ['Small Chicken Calzone', 'Small Fries', '1 Can of Pop', '1 Dip'] },
  { id: 'deal-2', name: 'Deal 2', price: 24.99, items: ['1 Medium Chicken Calzone', '1 Medium Fries', '2 Cans of Pop', '2 Dips'] },
  { id: 'deal-3', name: 'Deal 3', price: 34.99, items: ['Large Chicken Calzone', 'Large Fries', '3 Cans of Pop', '3 Dips'] },
  { id: 'fish-deal', name: 'Fish Deal', price: 11.99, items: ['4 Pieces of Fish (Basa)', 'Small Fries', '1 Can of Pop', '1 Dip'] },
  { id: 'slice-deal', name: 'Slice Deal', price: 9.99, items: ['1 Malai Boti Slice', '2 Pieces of Fish', 'Small Fries', '1 Can of Pop', '1 Dip'] },
];

export const toppings = ['Chicken', 'Beef Pepperoni', 'Beef', 'Green Pepper', 'Red Onion', 'Green Olives', 'Black Olives', 'Mushrooms', 'Hot Banana Pepper', 'Jalapeño', 'Pineapple', 'Spinach', 'Cheese'];

export const menuItems: MenuItem[] = [
  ...[
    ['chicken-calzone', 'Chicken Calzone (Special)', 'Chicken, Coleslaw, Garlic Sauce'],
    ['beef-calzone', 'Beef Calzone', 'Ground Beef, Coleslaw, Garlic Sauce'],
    ['mix-calzone', 'Mix Calzone', 'Chicken, Ground Beef, Coleslaw, Garlic Sauce'],
    ['meaty-calzone', 'Meaty Calzone', 'Ground Beef, Chicken, Beef Pepperoni, Coleslaw, Garlic Sauce'],
    ['chicken-spinach-calzone', 'Chicken and Spinach Calzone', 'Chicken, Spinach, Melted Mozzarella Cheese, Garlic Sauce'],
    ['veggie-calzone', 'Veggie Calzone', 'Green Pepper, Red Onion, Black Olives, Hot Banana Pepper, Coleslaw, Garlic Sauce'],
    ['spinach-calzone', 'Spinach Calzone', 'Spinach, Loaded Mozzarella Cheese, Garlic Sauce'],
    ['cheese-calzone', 'Cheese Calzone', 'Mozzarella Cheese, Coleslaw, Garlic Sauce'],
  ].map(([id, name, description]) => ({ id, name, description, prices: calzonePrices, category: 'calzones' })),
  ...[
    ['malai-boti-pizza', 'Malai Boti Pizza (Most Famous Signature Pizza)', 'Creamy White Sauce, Loaded White Juicy Chicken Malai Boti, Green Pepper, Red Onion, Black Olives, Hot Banana Pepper, Loaded Mozzarella Cheese'],
    ['tandoori-pizza', 'Tandoori Style Pizza (Spicy Special)', 'Loaded Chunks of Tandoori Chicken, Tandoori Style Sauce, Jalapeño, Mushrooms, Red Onion, Green Pepper, Black Olives, Loaded Mozzarella Cheese'],
  ].map(([id, name, description]) => ({ id, name, description, prices: signaturePrices, category: 'signature-pizzas' })),
  ...[
    ['garden-pizza', 'Garden Pizza (Veggie)', 'Green Pepper, Red Onion, Hot Banana Pepper, Black Olives'],
    ['meat-lovers-pizza', 'Meat Lovers Pizza', 'Beef Pepperoni, Chicken, Ground Beef'],
    ['dream-pizza', 'Dream Pizza', 'Chicken, Beef Pepperoni, Red Onion, Mushroom, Green Pepper'],
    ['chicken-fajita-pizza', 'Chicken Fajita Pizza', 'Chicken, Green Pepper, Red Onion'],
    ['mexican-pizza', 'Mexican Pizza', 'Beef, Hot Banana Pepper, Onion, Green Pepper'],
    ['california-pizza', 'California Pizza', 'Chicken, Sun-Dried Tomato, Jalapeño'],
    ['greek-pizza', 'Greek Pizza', 'Spinach, Green Olives, Red Onion, Cheese'],
  ].map(([id, name, description]) => ({ id, name, description, prices: pizzaPrices, category: 'pizzas' })),
  ...[
    ['combo-1', 'Combo 1', 'Small Chicken Calzone, 6 Chicken Wings, 1 Can of Pop, 1 Dip', 23.99],
    ['combo-2', 'Combo 2', 'Medium Chicken Calzone, 12 Chicken Wings, 2 Cans of Pop, 2 Dips', 34.99],
    ['combo-3', 'Combo 3', '2 Medium Chicken Calzones, 18 Chicken Wings, 4 Cans of Pop, 4 Dipping Sauces', 64.99],
    ['combo-4', 'Combo 4', 'Small 3 Topping Pizza, 6 Chicken Wings, 1 Can of Pop, 1 Dip', 23.99],
    ['combo-5', 'Combo 5', 'Medium 3 Topping Pizza, 12 Chicken Wings, 2 Cans of Pop, 2 Dips', 34.99],
    ['combo-6', 'Combo 6', '2 Medium 3 Topping Pizzas, 18 Chicken Wings, 4 Cans of Pop, 4 Dips', 64.99],
    ['combo-7', 'Combo 7', 'Large Malai Boti Pizza, Large 4 Topping Pizza, Large Fries, 6 Wings or 4 Pieces of Fish, 5 Cans of Pop, 5 Dipping Sauces', 64.99],
    ['combo-8', 'Combo 8', 'Large Malai Boti Pizza, Large Chicken Calzone, 6 Chicken Wings or 4 Pieces of Fish, Large Fries, 5 Cans of Pop, 5 Dipping Sauces', 69.99],
  ].map(([id, name, description, price], index) => ({ id: String(id), name: String(name), description: String(description), prices: { single: Number(price) }, category: index < 6 ? 'combos' : 'special-combos' })),
  ...deals.map(deal => ({ id: deal.id, name: deal.name, description: deal.items.join(', '), prices: { single: deal.price }, category: 'deals' })),
  ...([
    ['small-pizza', '1 Small 3 Topping Pizza', 12.99],
    ['medium-pizza', '1 Medium 3 Topping Pizza', 14.99],
    ['large-pizza', '1 Large 3 Topping Pizza', 16.99],
    ['6-wings', '6 Chicken Wings', 9.99],
    ['12-wings', '12 Chicken Wings', 17.99],
    ['18-wings', '18 Chicken Wings', 26.99],
    ['4-fish', '4 Pieces of Fish', 9.99],
    ['8-fish', '8 Pieces of Fish', 17.99],
    ['12-fish', '12 Pieces of Fish', 26.99],
    ['poutine', 'Regular Poutine', 6.99],
    ['small-fries', 'Small Fries', 2.99],
    ['medium-fries', 'Medium Fries', 3.99],
    ['large-fries', 'Large Fries', 6.99],
    ['can-pop', 'Can of Pop', 1.99],
    ['water-bottle', 'Water Bottle', 1],
    ['mango-juice', 'Mango Juice', 2.99],
    ['dipping-sauce', 'Dipping Sauce', 0.50],
  ] satisfies [string, string, number][]).map(([id, name, price]) => ({ id, name, description: '', prices: { single: price }, category: 'individuals' })),
  ...([
    ['falooda', 'Falooda (Special)', 9.99],
    ['mango-shake', 'Mango Shake', 6.99],
    ['oreo-shake', 'Oreo Shake', 6.99],
    ['strawberry-shake', 'Strawberry Shake', 6.99],
    ['banana-shake', 'Banana Shake', 6.99],
    ['chocolate-shake', 'Chocolate Shake', 6.99],
  ] satisfies [string, string, number][]).map(([id, name, price]) => ({ id, name, description: '', prices: { single: price }, category: 'desserts' })),
];

export function sizeLabel(item: MenuItem, size: 'small' | 'medium' | 'large' | 'extraLarge') {
  const labels = { small: 'Small', medium: 'Medium', large: 'Large', extraLarge: 'Extra Large' };
  const inches = { small: 10, medium: 12, large: 14, extraLarge: 16 };
  return item.category.includes('pizzas') ? `${labels[size]} ${inches[size]}”` : labels[size];
}
