// Mock data for Your Market clone

export const categories = [
  { id: 1, name: 'Electronics', icon: 'Laptop', subcategories: ['Phones', 'Computers', 'Gaming', 'Cameras'] },
  { id: 2, name: 'Fashion', icon: 'Shirt', subcategories: ['Men', 'Women', 'Kids', 'Accessories'] },
  { id: 3, name: 'Home & Garden', icon: 'Home', subcategories: ['Furniture', 'Kitchen', 'Decor', 'Garden'] },
  { id: 4, name: 'Sports', icon: 'Dumbbell', subcategories: ['Fitness', 'Outdoor', 'Cycling', 'Swimming'] },
  { id: 5, name: 'Toys & Games', icon: 'Gamepad2', subcategories: ['Educational', 'Action Figures', 'Puzzles', 'Board Games'] },
  { id: 6, name: 'Beauty', icon: 'Sparkles', subcategories: ['Makeup', 'Skincare', 'Hair Care', 'Fragrance'] },
  { id: 7, name: 'Automotive', icon: 'Car', subcategories: ['Parts', 'Accessories', 'Tools', 'Electronics'] },
  { id: 8, name: 'Books', icon: 'BookOpen', subcategories: ['Fiction', 'Non-Fiction', 'Educational', 'Comics'] }
];

export const flashDeals = [
  {
    id: 101,
    name: 'Wireless Earbuds Pro',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80',
    price: 29.99,
    originalPrice: 89.99,
    discount: 67,
    rating: 4.5,
    reviews: 2340,
    sold: 15000,
    shipping: 'Free'
  },
  {
    id: 102,
    name: 'Smart Watch Series 8',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80',
    price: 89.99,
    originalPrice: 299.99,
    discount: 70,
    rating: 4.7,
    reviews: 5678,
    sold: 22000,
    shipping: 'Free'
  },
  {
    id: 103,
    name: 'Portable Bluetooth Speaker',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80',
    price: 24.99,
    originalPrice: 79.99,
    discount: 69,
    rating: 4.4,
    reviews: 3210,
    sold: 18000,
    shipping: 'Free'
  },
  {
    id: 104,
    name: 'USB-C Fast Charger 65W',
    image: 'https://images.unsplash.com/photo-1591290619762-9b4c2e2d0c0d?w=400&q=80',
    price: 19.99,
    originalPrice: 49.99,
    discount: 60,
    rating: 4.6,
    reviews: 4567,
    sold: 30000,
    shipping: 'Free'
  }
];

export const products = [
  {
    id: 201,
    name: 'Premium Leather Wallet',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80',
    price: 15.99,
    originalPrice: 35.99,
    discount: 56,
    rating: 4.3,
    reviews: 890,
    sold: 5600,
    shipping: 'Free',
    category: 'Fashion'
  },
  {
    id: 202,
    name: 'LED Desk Lamp with USB',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80',
    price: 22.99,
    originalPrice: 59.99,
    discount: 62,
    rating: 4.5,
    reviews: 1234,
    sold: 8900,
    shipping: 'Free',
    category: 'Home & Garden'
  },
  {
    id: 203,
    name: 'Yoga Mat Non-Slip',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&q=80',
    price: 18.99,
    originalPrice: 45.99,
    discount: 59,
    rating: 4.6,
    reviews: 2100,
    sold: 12000,
    shipping: 'Free',
    category: 'Sports'
  },
  {
    id: 204,
    name: 'Stainless Steel Water Bottle',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80',
    price: 12.99,
    originalPrice: 29.99,
    discount: 57,
    rating: 4.4,
    reviews: 1567,
    sold: 9800,
    shipping: 'Free',
    category: 'Sports'
  },
  {
    id: 205,
    name: 'Wireless Gaming Mouse',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80',
    price: 34.99,
    originalPrice: 79.99,
    discount: 56,
    rating: 4.7,
    reviews: 3456,
    sold: 15600,
    shipping: 'Free',
    category: 'Electronics'
  },
  {
    id: 206,
    name: 'Mechanical Keyboard RGB',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=80',
    price: 45.99,
    originalPrice: 119.99,
    discount: 62,
    rating: 4.8,
    reviews: 4321,
    sold: 18900,
    shipping: 'Free',
    category: 'Electronics'
  },
  {
    id: 207,
    name: 'Phone Stand Adjustable',
    image: 'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=400&q=80',
    price: 9.99,
    originalPrice: 24.99,
    discount: 60,
    rating: 4.2,
    reviews: 678,
    sold: 7800,
    shipping: 'Free',
    category: 'Electronics'
  },
  {
    id: 208,
    name: 'Backpack Laptop 15.6"',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    price: 28.99,
    originalPrice: 69.99,
    discount: 59,
    rating: 4.5,
    reviews: 2890,
    sold: 14500,
    shipping: 'Free',
    category: 'Fashion'
  }
];

export const productDetails = {
  101: {
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80',
      'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80',
      'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=600&q=80',
      'https://images.unsplash.com/photo-1649859394614-dc4bcd7bca7c?w=600&q=80'
    ],
    description: 'Experience premium sound quality with our Wireless Earbuds Pro. Features active noise cancellation, touch controls, and up to 30 hours of battery life with charging case.',
    specifications: [
      { label: 'Battery Life', value: '30 hours (with case)' },
      { label: 'Bluetooth Version', value: '5.3' },
      { label: 'Water Resistance', value: 'IPX7' },
      { label: 'Driver Size', value: '10mm' },
      { label: 'Charging Port', value: 'USB-C' }
    ],
    reviews: [
      { id: 1, user: 'John D.', rating: 5, date: '2025-01-15', comment: 'Amazing sound quality! Best earbuds I\'ve owned.', helpful: 234, images: [] },
      { id: 2, user: 'Sarah M.', rating: 4, date: '2025-01-10', comment: 'Great value for money. Noise cancellation works well.', helpful: 156, images: [] },
      { id: 3, user: 'Mike T.', rating: 5, date: '2025-01-08', comment: 'Battery lasts forever! Perfect for travel.', helpful: 189, images: [] }
    ]
  },
  102: {
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80',
      'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&q=80',
      'https://images.unsplash.com/photo-1617625802912-caf048736d4f?w=600&q=80'
    ],
    description: 'Stay connected with the Smart Watch Series 8. Track your fitness, receive notifications, and monitor your health with advanced sensors.',
    specifications: [
      { label: 'Display', value: '1.9" AMOLED' },
      { label: 'Battery Life', value: '7 days' },
      { label: 'Water Resistance', value: '5ATM' },
      { label: 'Sensors', value: 'Heart Rate, SpO2, GPS' },
      { label: 'Compatibility', value: 'iOS & Android' }
    ],
    reviews: [
      { id: 1, user: 'Emily R.', rating: 5, date: '2025-01-12', comment: 'Perfect fitness tracker! Love the display.', helpful: 345, images: [] },
      { id: 2, user: 'David L.', rating: 4, date: '2025-01-09', comment: 'Good features but takes time to learn.', helpful: 198, images: [] }
    ]
  }
};

// Function to get cart from localStorage
export const getCart = () => {
  const cart = localStorage.getItem('yourMarketCart');
  return cart ? JSON.parse(cart) : [];
};

// Function to save cart to localStorage
export const saveCart = (cart) => {
  localStorage.setItem('yourMarketCart', JSON.stringify(cart));
};

// Function to add item to cart
export const addToCart = (product, quantity = 1) => {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  saveCart(cart);
  return cart;
};

// Function to remove item from cart
export const removeFromCart = (productId) => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== productId);
  saveCart(updatedCart);
  return updatedCart;
};

// Function to update cart item quantity
export const updateCartQuantity = (productId, quantity) => {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);

  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }

  return cart;
};
