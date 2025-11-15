// Sample shop data for development
const sampleShops = {
  clinic: [
    {
      id: 'clinic1',
      title: 'City Health Clinic',
      tagline: 'Your Family Healthcare Partner',
      description: 'Comprehensive healthcare services for the whole family with experienced doctors and modern facilities.',
      images: [
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
        'https://images.unsplash.com/photo-1631549916768-4119c2c15659?w=800',
      ],
      address: {
        line1: '123 Health Street',
        city: 'Mumbai',
        pincode: '400001',
        formatted: '123 Health Street, Mumbai - 400001'
      },
      phone: '+91 98765 43210',
      email: 'info@cityhealthclinic.com',
      hours: [
        'Monday - Friday: 8:00 AM - 8:00 PM',
        'Saturday: 9:00 AM - 5:00 PM',
        'Sunday: Closed'
      ],
      features: [
        'General Medicine',
        'Pediatrics',
        'Gynecology',
        '24/7 Emergency',
        'Lab Services'
      ]
    },
    {
      id: 'clinic2',
      title: 'Wellness Medical Center',
      tagline: 'Holistic Healthcare Solutions',
      description: 'Integrative healthcare center offering both traditional and alternative medicine approaches.',
      images: [
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800'
      ],
      address: {
        line1: '456 Wellness Avenue',
        city: 'Delhi',
        pincode: '110001',
        formatted: '456 Wellness Avenue, Delhi - 110001'
      },
      phone: '+91 98765 11223',
      email: 'contact@wellnessmd.com',
      hours: [
        'Monday - Saturday: 9:00 AM - 7:00 PM',
        'Sunday: 10:00 AM - 4:00 PM'
      ],
      features: [
        'Ayurveda',
        'Physiotherapy',
        'Acupuncture',
        'Yoga Therapy',
        'Diet & Nutrition'
      ]
    }
  ],
  'bakery': [
    {
      id: 'bakery1',
      name: 'Sweet Delights Bakery',
      description: 'Artisan bakery specializing in French pastries, custom cakes, and organic breads.',
      images: [
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
        'https://images.unsplash.com/photo-1511018631021-edcbb9b1ee07?w=800'
      ],
      address: {
        line1: '456 Baker Street',
        city: 'Mumbai',
        pincode: '400001',
        formatted: '456 Baker Street, Mumbai - 400001'
      },
      phone: '+91 98765 12345',
      email: 'orders@sweetdelights.com',
      hours: [
        'Monday - Sunday: 7:00 AM - 10:00 PM',
        'Public Holidays: 8:00 AM - 9:00 PM'
      ],
      features: [
        'Custom Cakes',
        'Artisan Breads',
        'French Pastries',
        'Coffee & Beverages',
        'Gluten-free Options'
      ]
    },
    {
      id: 'bakery2',
      name: 'Bread & Butter',
      description: 'Cozy neighborhood bakery known for sourdough bread and buttery croissants.',
      images: [
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800',
        'https://images.unsplash.com/photo-1509440539514-1c036e98d5a3?w=800'
      ],
      address: {
        line1: '89 Loaf Lane',
        city: 'Bangalore',
        pincode: '560001',
        formatted: '89 Loaf Lane, Bangalore - 560001'
      },
      phone: '+91 98765 67890',
      email: 'hello@breadnbutter.in',
      hours: [
        'Tuesday - Sunday: 7:30 AM - 9:30 PM',
        'Monday: Closed'
      ],
      features: [
        'Sourdough Bread',
        'Viennoiserie',
        'Breakfast Menu',
        'Coffee Bar',
        'Baking Classes'
      ]
    },
    {
      id: 'bakery3',
      name: 'The Cake Studio',
      description: 'Boutique bakery specializing in custom cakes, cupcakes, and desserts for special occasions.',
      images: [
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
        'https://images.unsplash.com/photo-1511018631021-edcbb9b1ee07?w=800'
      ],
      address: {
        line1: '321 Cake Street',
        city: 'Hyderabad',
        pincode: '500001',
        formatted: '321 Cake Street, Hyderabad - 500001'
      },
      phone: '+91 98765 11111',
      email: 'orders@thecakestudiobakery.com',
      hours: [
        'Monday - Saturday: 10:00 AM - 7:00 PM',
        'Sunday: Closed'
      ],
      features: [
        'Custom Cakes',
        'Cupcakes',
        'Desserts',
        'Cake Decorating Classes',
        'Wedding Cakes'
      ]
    }
  ],
  'restaurant': [
    {
      id: 'rest1',
      name: 'Spice Garden',
      description: 'Authentic Indian cuisine with a modern twist, offering both vegetarian and non-vegetarian dishes.',
      images: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800'
      ],
      address: {
        line1: '123 Food Street',
        city: 'Mumbai',
        pincode: '400001',
        formatted: '123 Food Street, Mumbai - 400001'
      },
      phone: '+91 98765 33333',
      email: 'dine@spicegarden.com',
      hours: [
        'Monday - Sunday: 11:00 AM - 11:00 PM',
        'Last Order: 10:30 PM'
      ],
      features: [
        'North Indian',
        'South Indian',
        'Mughlai',
        'Desserts',
        'Full Bar Available'
      ]
    },
    {
      id: 'rest2',
      name: 'Pizza Palace',
      description: 'Wood-fired pizzas and Italian classics in a casual, family-friendly setting.',
      images: [
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
      ],
      address: {
        line1: '45 Italian Lane',
        city: 'Bangalore',
        pincode: '560001',
        formatted: '45 Italian Lane, Bangalore - 560001'
      },
      phone: '+91 98765 44444',
      email: 'hello@pizzapalace.in',
      hours: [
        'Monday - Sunday: 12:00 PM - 11:30 PM',
        'Happy Hour: 4:00 PM - 7:00 PM'
      ],
      features: [
        'Wood-fired Pizzas',
        'Pasta',
        'Salads',
        'Desserts',
        'Wine & Beer'
      ]
    }
  ],
  'electronics': [
    {
      id: 'elec1',
      name: 'Tech Haven',
      description: 'Your one-stop shop for all electronics, gadgets, and accessories.',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800'
      ],
      address: {
        line1: '789 Tech Park',
        city: 'Hyderabad',
        pincode: '500001',
        formatted: '789 Tech Park, Hyderabad - 500001'
      },
      phone: '+91 98765 55555',
      email: 'support@techhaven.in',
      hours: [
        'Monday - Saturday: 10:00 AM - 9:00 PM',
        'Sunday: 11:00 AM - 8:00 PM'
      ],
      features: [
        'Smartphones',
        'Laptops',
        'Audio Devices',
        'Wearables',
        'Accessories'
      ]
    }
  ]
};

export const sampleProducts = [
  {
    id: 'prod1',
    title: 'Premium Running Shoes',
    description: 'High-performance running shoes with advanced cushioning technology for maximum comfort.',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    category: 'shoes',
    rating: 4.5
  },
  {
    id: 'prod2',
    title: 'Wireless Earbuds',
    description: 'Crystal clear sound with noise cancellation and 24-hour battery life.',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    category: 'electronics',
    rating: 4.3
  }
];

// Helper function to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API implementation
export const mockApi = {
  async getShopsByCategory(category) {
    return sampleShops[category] || [];
  },
  
  async getShopById(category, id) {
    const shops = sampleShops[category] || [];
    return shops.find(shop => shop.id === id) || null;
  },
  
  async searchShops(query) {
    const results = [];
    const searchTerm = query.toLowerCase();
    
    for (const [category, shops] of Object.entries(sampleShops)) {
      for (const shop of shops) {
        const shopName = (shop.title || shop.name || '').toLowerCase();
        if (shopName.includes(searchTerm)) {
          results.push({ ...shop, category });
        }
      }
    }
    return results;
  }
};

export default sampleShops;
