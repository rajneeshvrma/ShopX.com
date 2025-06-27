// ----------------------------------------------------------------------------------
// Scroll to Top Button (common on all pages)
// ----------------------------------------------------------------------------------

const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  };

  scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}

// ----------------------------------------------------------------------------------
// Sample Product Data (shared across all pages)
// ----------------------------------------------------------------------------------

const products = [
  {
    id: 1,
    "name": "Wireless Bluetooth Headphones",
    "category": "Electronics",
    "price": 89.99,
    "rating": 4.4,
    "reviews": 210,
    "images": [
      "https://example.com/images/headphones1.jpg",
      "https://example.com/images/headphones2.jpg",
      "https://example.com/images/headphones3.jpg"
    ],
    "description": "High-quality noise-cancelling headphones with deep bass and long battery life.",
    "details": [
      "Bluetooth 5.0",
      "Active Noise Cancellation",
      "30-hour battery life",
      "USB-C fast charging",
      "Built-in mic"
    ]
  },
  {
    "id": 2,
    "name": "Smartphone Stand with Adjustable Angle",
    "category": "Electronics",
    "price": 15.99,
    "rating": 4.5,
    "reviews": 180,
    "images": [
      "https://example.com/images/stand1.jpg",
      "https://example.com/images/stand2.jpg",
      "https://example.com/images/stand3.jpg"
    ],
    "description": "Adjustable smartphone stand for hands-free viewing and video calls.",
    "details": [
      "360° rotation",
      "Non-slip base",
      "Compatible with most smartphones",
      "Foldable design",
      "Lightweight and portable"
    ]
  },
  {
    "id": 3,
    "name": "Men's Running Shoes",
    "category": "Clothing",
    "price": 59.99,
    "rating": 4.6,
    "reviews": 250,
    "images": [
      "https://example.com/images/shoes1.jpg",
      "https://example.com/images/shoes2.jpg",
      "https://example.com/images/shoes3.jpg"
    ],
    "description": "Lightweight and breathable running shoes for optimal performance.",
    "details": [
      "Breathable mesh upper",
      "Cushioned sole",
      "Available in sizes 7 to 12",
      "Available in multiple colors",
      "Ideal for running and gym workouts"
    ]
  },
  {
    "id": 4,
    "name": "Stainless Steel Cookware Set",
    "category": "Home & Living",
    "price": 129.99,
    "rating": 4.8,
    "reviews": 180,
    "images": [
      "https://example.com/images/cookware1.jpg",
      "https://example.com/images/cookware2.jpg",
      "https://example.com/images/cookware3.jpg"
    ],
    "description": "Durable stainless steel cookware set with non-stick coating.",
    "details": [
      "Includes 10 pieces",
      "Oven safe up to 500°F",
      "Dishwasher safe",
      "Ergonomic handles",
      "Compatible with all stovetops"
    ]
  },
  {
    "id": 5,
    "name": "Cookbook: 'Mastering the Art of Cooking'",
    "category": "Books",
    "price": 29.99,
    "rating": 4.9,
    "reviews": 120,
    "images": [
      "https://example.com/images/cookbook1.jpg",
      "https://example.com/images/cookbook2.jpg",
      "https://example.com/images/cookbook3.jpg"
    ],
    "description": "Comprehensive cookbook featuring over 200 recipes.",
    "details": [
      "Hardcover edition",
      "Full-color photographs",
      "Includes index and glossary",
      "Perfect for beginners and experts",
      "Published by Gourmet Press"
    ]
  },
  {
    "id": 6,
    "name": "Children's Storybook: 'The Adventures of Timmy'",
    "category": "Books",
    "price": 14.99,
    "rating": 4.8,
    "reviews": 150,
    "images": [
      "https://example.com/images/storybook1.jpg",
      "https://example.com/images/storybook2.jpg",
      "https://example.com/images/storybook3.jpg"
    ],
    "description": "Engaging storybook for children aged 4-8.",
    "details": [
      "Softcover edition",
      "Illustrated by Emily Green",
      "32 pages",
      "Rhyming text",
      "Published by Little Readers"
    ]
  },
  {
    "id": 7,
    "name": "Wooden Building Blocks Set",
    "category": "Toys & Games",
    "price": 24.99,
    "rating": 4.7,
    "reviews": 200,
    "images": [
      "https://example.com/images/blocks1.jpg",
      "https://example.com/images/blocks2.jpg",
      "https://example.com/images/blocks3.jpg"
    ],
    "description": "Classic wooden building blocks set for creative play.",
    "details": [
      "Includes 100 pieces",
      "Non-toxic paint",
      "Ages 3 and up",
      "Storage bag included",
      "CE certified"
    ]
  },
  {
    "id": 8,
    "name": "Facial Serum with Vitamin C",
    "category": "Beauty",
    "price": 39.99,
    "rating": 4.8,
    "reviews": 220,
    "images": [
      "https://example.com/images/serum1.jpg",
      "https://example.com/images/serum2.jpg",
      "https://example.com/images/serum3.jpg"
    ],
    "description": "Brightening facial serum with 20% Vitamin C.",
    "details": [
      "Suitable for all skin types",
      "Reduces dark spots",
      "Cruelty-free",
      "Paraben-free",
      "30ml bottle"
    ]
  },
  {
    "id": 9,
    "name": "Wireless Mouse with Ergonomic Design",
    "category": "Electronics",
    "price": 25.99,
    "rating": 4.4,
    "reviews": 210,
    "images": [
      "https://example.com/images/mouse1.jpg",
      "https://example.com/images/mouse2.jpg",
      "https://example.com/images/mouse3.jpg"
    ],
    "description": "Ergonomic wireless mouse with adjustable DPI settings.",
    "details": [
      "2.4GHz wireless connection",
      "Adjustable DPI up to 3200",
      "Ergonomic design",
      "Compatible with Windows and macOS",
      "Long battery life"
    ]
  },
  {
    "id": 10,
    "name": "Men's Leather Wallet",
    "category": "Clothing",
    "price": 29.99,
    "rating": 4.7,
    "reviews": 190,
    "images": [
      "https://example.com/images/wallet1.jpg",
      "https://example.com/images/wallet2.jpg",
      "https://example.com/images/wallet3.jpg"
    ],
    "description": "Genuine leather wallet with multiple card slots.",
    "details": [
      "RFID blocking technology",
      "Slim design",
      "Available in black and brown",
      "Measures 4.5\" x 3.5\"",
      "Gift box included"
    ]
  },
  {
    "id": 11,
    "name": "Yoga Mat with Non-Slip Surface",
    "category": "Sports",
    "price": 19.99,
    "rating": 4.6,
    "reviews": 230,
    "images": [
      "https://example.com/images/yogamat1.jpg",
      "https://example.com/images/yogamat2.jpg",
      "https://example.com/images/yogamat3.jpg"
    ],
    "description": "Durable yoga mat with a non-slip surface for stability.",
    "details": [
      "Measures 72\" x 24\"",
      "Eco-friendly material",
      "Available in multiple colors",
      "Includes carrying strap",
      "Ideal for yoga and Pilates"
    ]
  },
  {
    "id": 12,
    "name": "Adjustable Dumbbell Set",
    "category": "Sports",
    "price": 99.99,
    "rating": 4.7,
    "reviews": 210,
    "images": [
      "https://example.com/images/dumbbell1.jpg",
      "https://example.com/images/dumbbell2.jpg",
      "https://example.com/images/dumbbell3.jpg"
    ],
    "description": "Adjustable dumbbell set ranging from 5 to 50 lbs.",
    "details": [
      "Quick weight adjustment",
      "Durable construction",
      "Compact design",
      "Ideal for home workouts",
      "Includes storage tray"
    ]
  },
  {
    "id": 13,
    "name": "Electric Kettle with Auto Shut-Off",
    "category": "Home & Living",
    "price": 39.99,
    "rating": 4.5,
    "reviews": 180,
    "images": [
      "https://example.com/images/kettle1.jpg",
      "https://example.com/images/kettle2.jpg",
      "https://example.com/images/kettle3.jpg"
    ],
    "description": "1.7L electric kettle with auto shut-off feature.",
    "details": [
      "Boils water in 3-5 minutes",
      "Stainless steel interior",
      "Cordless design",
      "LED indicator light",
      "Overheat protection"
    ]
  },
  {
    "id": 14,
    "name": "Cordless Handheld Vacuum Cleaner",
    "category": "Home & Living",
    "price": 59.99,
    "rating": 4.6,
    "reviews": 200,
    "images": [
      "https://example.com/images/vacuum1.jpg",
      "https://example.com/images/vacuum2.jpg",
      "https://example.com/images/vacuum3.jpg"
    ],
    "description": "Lightweight cordless vacuum cleaner for quick clean-ups.",
    "details": [
      "Up to 30 minutes runtime",
      "HEPA filtration",
      "Includes crevice and brush tools",
      "Washable filter",
      "Ideal for pet hair"
    ]
  },
  {
    "id": 15,
    "name": "Portable Air Purifier",
    "category": "Home & Living",
    "price": 79.99,
    "rating": 4.6,
    "reviews": 195,
    "images": [
      "https://example.com/images/airpurifier1.jpg",
      "https://example.com/images/airpurifier2.jpg",
      "https://example.com/images/airpurifier3.jpg"
    ],
    "description": "Compact air purifier with HEPA filter ideal for bedrooms and offices.",
    "details": [
      "True HEPA filtration",
      "Covers up to 200 sq ft",
      "Quiet operation",
      "Filter change indicator",
      "USB power compatible"
    ]
  },
  {
    "id": 16,
    "name": "Convertible Car Seat",
    "category": "Automotive",
    "price": 159.99,
    "rating": 4.8,
    "reviews": 134,
    "images": [
      "https://example.com/images/carseat1.jpg",
      "https://example.com/images/carseat2.jpg",
      "https://example.com/images/carseat3.jpg"
    ],
    "description": "Safe and adjustable convertible car seat for infants and toddlers.",
    "details": [
      "Rear and forward-facing",
      "5-point harness system",
      "Easy to install",
      "Side-impact protection",
      "Removable and washable cover"
    ]
  },
  {
    "id": 17,
    "name": "Car Phone Mount",
    "category": "Automotive",
    "price": 18.99,
    "rating": 4.5,
    "reviews": 300,
    "images": [
      "https://example.com/images/phonemount1.jpg",
      "https://example.com/images/phonemount2.jpg",
      "https://example.com/images/phonemount3.jpg"
    ],
    "description": "Universal car phone mount with 360° rotation and strong suction.",
    "details": [
      "Fits most smartphones",
      "Windshield and dashboard mount",
      "One-hand operation",
      "Adjustable arm",
      "Shock-absorbing design"
    ]
  },
  {
    "id": 18,
    "name": "Modern Fabric Sofa",
    "category": "Furniture",
    "price": 699.00,
    "rating": 4.7,
    "reviews": 85,
    "images": [
      "https://example.com/images/sofa1.jpg",
      "https://example.com/images/sofa2.jpg",
      "https://example.com/images/sofa3.jpg"
    ],
    "description": "Stylish 3-seater fabric sofa with solid wood legs.",
    "details": [
      "Linen upholstery",
      "Tool-free assembly",
      "Removable cushions",
      "Modern minimalist design",
      "Available in gray, navy, and beige"
    ]
  },
  {
    "id": 19,
    "name": "Adjustable Office Chair",
    "category": "Furniture",
    "price": 129.99,
    "rating": 4.4,
    "reviews": 170,
    "images": [
      "https://example.com/images/officechair1.jpg",
      "https://example.com/images/officechair2.jpg",
      "https://example.com/images/officechair3.jpg"
    ],
    "description": "Ergonomic office chair with mesh back and adjustable armrests.",
    "details": [
      "Breathable mesh back",
      "Height & tilt adjustable",
      "Lumbar support",
      "360° swivel base",
      "Weight capacity: 250 lbs"
    ]
  },
  {
    "id": 20,
    "name": "Organic Coffee Beans - 2lb",
    "category": "Groceries",
    "price": 21.99,
    "rating": 4.9,
    "reviews": 330,
    "images": [
      "https://example.com/images/coffee1.jpg",
      "https://example.com/images/coffee2.jpg",
      "https://example.com/images/coffee3.jpg"
    ],
    "description": "Fresh-roasted organic Arabica beans with a smooth finish.",
    "details": [
      "100% Arabica beans",
      "USDA organic certified",
      "Whole beans for freshness",
      "Medium roast",
      "Sourced from Colombia"
    ]
  },
  {
    "id": 21,
    "name": "Natural Almond Butter - 16oz",
    "category": "Groceries",
    "price": 9.99,
    "rating": 4.6,
    "reviews": 210,
    "images": [
      "https://example.com/images/almondbutter1.jpg",
      "https://example.com/images/almondbutter2.jpg",
      "https://example.com/images/almondbutter3.jpg"
    ],
    "description": "Creamy almond butter made with roasted almonds and no additives.",
    "details": [
      "No sugar added",
      "Gluten-free",
      "Vegan friendly",
      "Non-GMO",
      "High protein snack"
    ]
  },
  {
    "id": 22,
    "name": "Electric Toothbrush with Timer",
    "category": "Beauty",
    "price": 49.99,
    "rating": 4.5,
    "reviews": 310,
    "images": [
      "https://example.com/images/toothbrush1.jpg",
      "https://example.com/images/toothbrush2.jpg",
      "https://example.com/images/toothbrush3.jpg"
    ],
    "description": "Rechargeable electric toothbrush with 2-minute timer and 3 brushing modes.",
    "details": [
      "Built-in timer",
      "3 brushing modes",
      "Lasts 2 weeks per charge",
      "Travel case included",
      "IPX7 waterproof"
    ]
  },
  {
    "id": 23,
    "name": "Kids' Educational Tablet",
    "category": "Electronics",
    "price": 99.99,
    "rating": 4.4,
    "reviews": 140,
    "images": [
      "https://example.com/images/kidstablet1.jpg",
      "https://example.com/images/kidstablet2.jpg",
      "https://example.com/images/kidstablet3.jpg"
    ],
    "description": "Durable tablet pre-loaded with educational games and parental controls.",
    "details": [
      "7-inch HD display",
      "Shockproof case",
      "Wi-Fi enabled",
      "Parental control settings",
      "8-hour battery life"
    ]
  },
  {
    "id": 24,
    "name": "Women's Winter Jacket",
    "category": "Clothing",
    "price": 129.99,
    "rating": 4.7,
    "reviews": 210,
    "images": [
      "https://example.com/images/winterjacket1.jpg",
      "https://example.com/images/winterjacket2.jpg",
      "https://example.com/images/winterjacket3.jpg"
    ],
    "description": "Insulated, waterproof jacket with removable hood for cold climates.",
    "details": [
      "Waterproof shell",
      "Adjustable waist",
      "Multiple pockets",
      "Removable faux fur hood",
      "Machine washable"
    ]
  },
  {
    "id": 25,
    "name": "Gaming Keyboard with RGB",
    "category": "Electronics",
    "price": 69.99,
    "rating": 4.6,
    "reviews": 450,
    "images": [
      "https://example.com/images/gamingkeyboard1.jpg",
      "https://example.com/images/gamingkeyboard2.jpg",
      "https://example.com/images/gamingkeyboard3.jpg"
    ],
    "description": "Mechanical gaming keyboard with customizable RGB backlighting.",
    "details": [
      "Mechanical switches",
      "Programmable keys",
      "USB connectivity",
      "Wrist rest included",
      "Windows/macOS compatible"
    ]
  },
  {
    "id": 26,
    "name": "Pet Hair Remover Roller",
    "category": "Home & Living",
    "price": 14.99,
    "rating": 4.3,
    "reviews": 280,
    "images": [
      "https://example.com/images/pethair1.jpg",
      "https://example.com/images/pethair2.jpg",
      "https://example.com/images/pethair3.jpg"
    ],
    "description": "Reusable roller that quickly removes pet hair from furniture and clothes.",
    "details": [
      "No sticky sheets",
      "Eco-friendly design",
      "Easy to clean",
      "Suitable for all fabrics",
      "Compact and portable"
    ]
  },
  {
    "id": 27,
    "name": "Kids’ Puzzle Set - 6 in 1",
    "category": "Toys & Games",
    "price": 17.99,
    "rating": 4.8,
    "reviews": 320,
    "images": [
      "https://example.com/images/kidspuzzle1.jpg",
      "https://example.com/images/kidspuzzle2.jpg",
      "https://example.com/images/kidspuzzle3.jpg"
    ],
    "description": "Colorful and educational wooden puzzle set for kids aged 2-5.",
    "details": [
      "6 puzzles in 1 box",
      "Non-toxic paint",
      "Improves motor skills",
      "Storage box included",
      "Made of wood"
    ]
  },
  {
    "id": 28,
    "name": "Outdoor Camping Tent - 4 Person",
    "category": "Sports",
    "price": 139.99,
    "rating": 4.7,
    "reviews": 180,
    "images": [
      "https://example.com/images/campingtent1.jpg",
      "https://example.com/images/campingtent2.jpg",
      "https://example.com/images/campingtent3.jpg"
    ],
    "description": "Spacious and waterproof tent perfect for family camping trips.",
    "details": [
      "Sleeps up to 4 people",
      "Rainfly included",
      "Easy 10-min setup",
      "Ventilated windows",
      "Storage pockets"
    ]
  },
  {
    "id": 29,
    "name": "Bluetooth Shower Speaker",
    "category": "Electronics",
    "price": 24.99,
    "rating": 4.5,
    "reviews": 260,
    "images": [
      "https://example.com/images/showerspeaker1.jpg",
      "https://example.com/images/showerspeaker2.jpg",
      "https://example.com/images/showerspeaker3.jpg"
    ],
    "description": "Waterproof Bluetooth speaker with suction cup and built-in mic.",
    "details": [
      "IPX7 waterproof",
      "Bluetooth 5.0",
      "Suction mount",
      "Built-in microphone",
      "6-hour playtime"
    ]
  },
  {
    "id": 30,
    "name": "Modern Coffee Table",
    "category": "Furniture",
    "price": 149.99,
    "rating": 4.6,
    "reviews": 90,
    "images": [
      "https://example.com/images/coffeetable1.jpg",
      "https://example.com/images/coffeetable2.jpg",
      "https://example.com/images/coffeetable3.jpg"
    ],
    "description": "Wood grain finish coffee table with open shelf and storage drawer.",
    "details": [
      "MDF with walnut veneer",
      "Storage drawer",
      "Open shelf design",
      "Easy assembly",
      "Mid-century modern style"
    ]
  },
  {
    "id": 31,
    "name": "Healthy Trail Mix - 1lb",
    "category": "Groceries",
    "price": 12.99,
    "rating": 4.9,
    "reviews": 340,
    "images": [
      "https://example.com/images/trailmix1.jpg",
      "https://example.com/images/trailmix2.jpg",
      "https://example.com/images/trailmix3.jpg"
    ],
    "description": "Nutritious trail mix with nuts, seeds, and dried fruits.",
    "details": [
      "No added sugar",
      "Non-GMO",
      "High protein",
      "Vegan friendly",
      "Recyclable packaging"
    ]
  },
  {
    "id": 32,
    "name": "Makeup Brush Set - 12pcs",
    "category": "Beauty",
    "price": 22.99,
    "rating": 4.8,
    "reviews": 270,
    "images": [
      "https://example.com/images/brushset1.jpg",
      "https://example.com/images/brushset2.jpg",
      "https://example.com/images/brushset3.jpg"
    ],
    "description": "Premium makeup brush set for professional or home use.",
    "details": [
      "Soft synthetic bristles",
      "Wooden handles",
      "Includes travel pouch",
      "For face and eyes",
      "Cruelty-free"
    ]
  },
  {
    "id": 33,
    "name": "LED Desk Lamp with USB Charging",
    "category": "Home & Living",
    "price": 36.99,
    "rating": 4.7,
    "reviews": 190,
    "images": [
      "https://example.com/images/desklamp1.jpg",
      "https://example.com/images/desklamp2.jpg",
      "https://example.com/images/desklamp3.jpg"
    ],
    "description": "Adjustable LED desk lamp with touch control and USB charging port.",
    "details": [
      "5 brightness levels",
      "Foldable design",
      "Eye protection light",
      "USB output",
      "Energy-saving LEDs"
    ]
  },
  {
    "id": 34,
    "name": "Women's Yoga Leggings",
    "category": "Clothing",
    "price": 29.99,
    "rating": 4.8,
    "reviews": 250,
    "images": [
      "https://example.com/images/leggings1.jpg",
      "https://example.com/images/leggings2.jpg",
      "https://example.com/images/leggings3.jpg"
    ],
    "description": "High-waist yoga leggings with side pockets and stretch fit.",
    "details": [
      "Moisture-wicking fabric",
      "Squat-proof",
      "Hidden waistband pocket",
      "Multiple colors",
      "Sizes XS–XXL"
    ]
  },
  {
    "id": 35,
    "name": "Stainless Steel Water Bottle - 32oz",
    "category": "Sports",
    "price": 18.99,
    "rating": 4.9,
    "reviews": 380,
    "images": [
      "https://example.com/images/waterbottle1.jpg",
      "https://example.com/images/waterbottle2.jpg",
      "https://example.com/images/waterbottle3.jpg"
    ],
    "description": "Double-wall insulated water bottle keeps drinks cold for 24 hours.",
    "details": [
      "BPA-free",
      "Sweat-free exterior",
      "Leak-proof cap",
      "Wide mouth",
      "Available in 10 colors"
    ]
  },
  {
    "id": 36,
    "name": "Remote Control Car for Kids",
    "category": "Toys & Games",
    "price": 34.99,
    "rating": 4.6,
    "reviews": 230,
    "images": [
      "https://example.com/images/rcar1.jpg",
      "https://example.com/images/rcar2.jpg",
      "https://example.com/images/rcar3.jpg"
    ],
    "description": "High-speed RC stunt car with 360° rotation and lights.",
    "details": [
      "2.4GHz remote",
      "Rechargeable battery",
      "Indoor/outdoor use",
      "LED lights",
      "Ages 6+"
    ]
  },
  {
    "id": 37,
    "name": "Fiction Book: 'The Silent City'",
    "category": "Books",
    "price": 18.99,
    "rating": 4.7,
    "reviews": 175,
    "images": [
      "https://example.com/images/book1.jpg",
      "https://example.com/images/book2.jpg",
      "https://example.com/images/book3.jpg"
    ],
    "description": "Thrilling dystopian novel set in a post-apocalyptic future.",
    "details": [
      "Paperback",
      "320 pages",
      "Bestselling author",
      "Published in 2024",
      "ISBN: 978-1234567890"
    ]
  },
  {
    "id": 38,
    "name": "Facial Cleansing Brush",
    "category": "Beauty",
    "price": 29.99,
    "rating": 4.6,
    "reviews": 160,
    "images": [
      "https://example.com/images/facebrush1.jpg",
      "https://example.com/images/facebrush2.jpg",
      "https://example.com/images/facebrush3.jpg"
    ],
    "description": "Rechargeable silicone cleansing brush for deep facial cleaning.",
    "details": [
      "Waterproof (IPX7)",
      "USB charging",
      "3 vibration modes",
      "Gentle on skin",
      "Compact size"
    ]
  },
  {
    "id": 39,
    "name": "All-Weather Car Floor Mats",
    "category": "Automotive",
    "price": 45.00,
    "rating": 4.8,
    "reviews": 205,
    "images": [
      "https://example.com/images/carmats1.jpg",
      "https://example.com/images/carmats2.jpg",
      "https://example.com/images/carmats3.jpg"
    ],
    "description": "Heavy-duty rubber car mats that protect against mud and spills.",
    "details": [
      "Trim-to-fit design",
      "Non-slip backing",
      "All-season protection",
      "Easy to clean",
      "Includes 4 pieces"
    ]
  },
  {
    "id": 40,
    "name": "Compact Blender for Smoothies",
    "category": "Home & Living",
    "price": 49.99,
    "rating": 4.7,
    "reviews": 340,
    "images": [
      "https://example.com/images/blender1.jpg",
      "https://example.com/images/blender2.jpg",
      "https://example.com/images/blender3.jpg"
    ],
    "description": "Personal blender with travel bottle for shakes and smoothies.",
    "details": [
      "600W motor",
      "One-touch operation",
      "BPA-free jar",
      "Dishwasher safe",
      "Includes 2 cups"
    ]
  },
  {
    "id": 41,
    "name": "Men's Analog Watch with Leather Strap",
    "category": "Clothing",
    "price": 79.99,
    "rating": 4.5,
    "reviews": 155,
    "images": [
      "https://example.com/images/watch1.jpg",
      "https://example.com/images/watch2.jpg",
      "https://example.com/images/watch3.jpg"
    ],
    "description": "Classic analog watch with genuine leather strap and quartz movement.",
    "details": [
      "Water-resistant (50m)",
      "Leather band",
      "Stainless steel case",
      "Quartz movement",
      "Gift-ready packaging"
    ]
  },
  {
    "id": 42,
    "name": "Mini Projector for Movies",
    "category": "Electronics",
    "price": 119.99,
    "rating": 4.4,
    "reviews": 230,
    "images": [
      "https://example.com/images/projector1.jpg",
      "https://example.com/images/projector2.jpg",
      "https://example.com/images/projector3.jpg"
    ],
    "description": "Portable projector supports 1080p HD input and smartphone connectivity.",
    "details": [
      "HDMI/USB/AV support",
      "Built-in speaker",
      "Remote control",
      "Up to 200” display",
      "Includes tripod"
    ]
  },
  {
    "id": 43,
    "name": "Non-Stick Frying Pan - 10 inch",
    "category": "Home & Living",
    "price": 32.99,
    "rating": 4.6,
    "reviews": 210,
    "images": [
      "https://example.com/images/fryingpan1.jpg",
      "https://example.com/images/fryingpan2.jpg",
      "https://example.com/images/fryingpan3.jpg"
    ],
    "description": "Durable non-stick pan for everyday cooking with even heat distribution.",
    "details": [
      "PFOA-free coating",
      "Compatible with all cooktops",
      "Ergonomic handle",
      "Oven-safe to 400°F",
      "Dishwasher safe"
    ]
  },
  {
    "id": 44,
    "name": "Children’s Coloring Book",
    "category": "Books",
    "price": 7.99,
    "rating": 4.9,
    "reviews": 180,
    "images": [
      "https://example.com/images/coloringbook1.jpg",
      "https://example.com/images/coloringbook2.jpg",
      "https://example.com/images/coloringbook3.jpg"
    ],
    "description": "Fun and educational coloring book with over 50 pages for kids aged 3–6.",
    "details": [
      "Softcover",
      "Animal and nature themes",
      "Thick paper",
      "Non-toxic ink",
      "50+ illustrations"
    ]
  },
  {
    "id": 45,
    "name": "Digital Meat Thermometer",
    "category": "Home & Living",
    "price": 16.99,
    "rating": 4.7,
    "reviews": 200,
    "images": [
      "https://example.com/images/thermometer1.jpg",
      "https://example.com/images/thermometer2.jpg",
      "https://example.com/images/thermometer3.jpg"
    ],
    "description": "Instant-read thermometer with backlight for grilling and baking.",
    "details": [
      "Reads temperature in 4-6 seconds",
      "Waterproof design",
      "Auto shut-off",
      "Foldable probe",
      "Suitable for meat, BBQ, and candy"
    ]
  },
  {
    "id": 46,
    "name": "Men’s Running Shoes",
    "category": "Sports",
    "price": 59.99,
    "rating": 4.5,
    "reviews": 150,
    "images": [
      "https://example.com/images/runningshoes1.jpg",
      "https://example.com/images/runningshoes2.jpg",
      "https://example.com/images/runningshoes3.jpg"
    ],
    "description": "Lightweight and breathable running shoes with cushioned soles.",
    "details": [
      "Mesh upper",
      "Shock-absorbing midsole",
      "Non-slip outsole",
      "Available sizes 7-13",
      "Multiple colors"
    ]
  },
  {
    "id": 47,
    "name": "Ceramic Essential Oil Diffuser",
    "category": "Beauty",
    "price": 34.99,
    "rating": 4.6,
    "reviews": 220,
    "images": [
      "https://example.com/images/diffuser1.jpg",
      "https://example.com/images/diffuser2.jpg",
      "https://example.com/images/diffuser3.jpg"
    ],
    "description": "Elegant ceramic diffuser with 7 LED colors and auto shut-off.",
    "details": [
      "Ultrasonic technology",
      "Up to 6 hours run time",
      "Water capacity 150ml",
      "Quiet operation",
      "Includes power adapter"
    ]
  },
  {
    "id": 48,
    "name": "Children’s Wooden Train Set",
    "category": "Toys & Games",
    "price": 45.99,
    "rating": 4.8,
    "reviews": 310,
    "images": [
      "https://example.com/images/trainset1.jpg",
      "https://example.com/images/trainset2.jpg",
      "https://example.com/images/trainset3.jpg"
    ],
    "description": "Classic wooden train set with 50+ pieces for imaginative play.",
    "details": [
      "Non-toxic paint",
      "Includes tracks, trains, and accessories",
      "Compatible with major brands",
      "Ages 3+",
      "Sturdy wood construction"
    ]
  },
  {
    "id": 49,
    "name": "Leather Wallet for Men",
    "category": "Clothing",
    "price": 24.99,
    "rating": 4.5,
    "reviews": 195,
    "images": [
      "https://example.com/images/wallet1.jpg",
      "https://example.com/images/wallet2.jpg",
      "https://example.com/images/wallet3.jpg"
    ],
    "description": "Slim, RFID-blocking leather wallet with multiple card slots.",
    "details": [
      "Genuine leather",
      "6 card slots",
      "Bill compartment",
      "ID window",
      "Compact design"
    ]
  },
  {
    "id": 50,
    "name": "Organic Green Tea Bags - 50 count",
    "category": "Groceries",
    "price": 15.99,
    "rating": 4.9,
    "reviews": 380,
    "images": [
      "https://example.com/images/greentea1.jpg",
      "https://example.com/images/greentea2.jpg",
      "https://example.com/images/greentea3.jpg"
    ],
    "description": "Premium organic green tea bags sourced from Japan for a refreshing brew.",
    "details": [
      "USDA Organic",
      "No artificial flavors",
      "Individually wrapped bags",
      "Rich antioxidants",
      "Gluten-free"
    ]
  },
  
  {
    "id": 51,
    "name": "Men's Casual Denim Jacket",
    "category": "Fashion",
    "price": 49.99,
    "rating": 4.5,
    "reviews": 320,
    "images": [
      "https://example.com/images/denim1.jpg",
      "https://example.com/images/denim2.jpg",
      "https://example.com/images/denim3.jpg"
    ],
    "description": "Stylish men's denim jacket perfect for casual wear.",
    "details": [
      "100% cotton",
      "Machine washable",
      "Slim fit design",
      "Available in multiple sizes",
      "Button-up front"
    ]
  },
  {
    "id": 52,
    "name": "Women's Floral Maxi Dress",
    "category": "Fashion",
    "price": 39.99,
    "rating": 4.6,
    "reviews": 210,
    "images": [
      "https://example.com/images/maxidress1.jpg",
      "https://example.com/images/maxidress2.jpg",
      "https://example.com/images/maxidress3.jpg"
    ],
    "description": "Elegant floral maxi dress suitable for all occasions.",
    "details": [
      "Breathable fabric",
      "Flared hemline",
      "Sleeveless design",
      "Available in S to XL",
      "Zipper closure"
    ]
  },
  {
    "id": 53,
    "name": "Unisex Running Sneakers",
    "category": "Fashion",
    "price": 59.99,
    "rating": 4.8,
    "reviews": 410,
    "images": [
      "https://example.com/images/sneakers1.jpg",
      "https://example.com/images/sneakers2.jpg",
      "https://example.com/images/sneakers3.jpg"
    ],
    "description": "Comfortable and durable sneakers designed for everyday wear.",
    "details": [
      "Breathable mesh upper",
      "Non-slip rubber sole",
      "Lightweight design",
      "Available in various sizes",
      "Lace-up closure"
    ]
  },
  {
    "id": 54,
    "name": "Leather Crossbody Bag",
    "category": "Fashion",
    "price": 89.99,
    "rating": 4.4,
    "reviews": 150,
    "images": [
      "https://example.com/images/bag1.jpg",
      "https://example.com/images/bag2.jpg",
      "https://example.com/images/bag3.jpg"
    ],
    "description": "Compact leather crossbody bag perfect for daily essentials.",
    "details": [
      "Genuine leather",
      "Adjustable strap",
      "Interior zip pocket",
      "Magnetic flap closure",
      "Available in 3 colors"
    ]
  },
  {
    "id": 55,
    "name": "Men's Analog Wrist Watch",
    "category": "Fashion",
    "price": 74.99,
    "rating": 4.3,
    "reviews": 275,
    "images": [
      "https://example.com/images/watch1.jpg",
      "https://example.com/images/watch2.jpg",
      "https://example.com/images/watch3.jpg"
    ],
    "description": "Classic analog wrist watch with a minimalist design.",
    "details": [
      "Stainless steel case",
      "Leather strap",
      "Water resistant up to 30m",
      "Quartz movement",
      "2-year warranty"
    ]
  },
  //<-- latest products -->
  {
    "id": 56,
    "name": "Eyeliner",
    "category": "Beauty",
    "price": 29,
    "rating": 4.3,
    "reviews": 72,
    "images": ["Assets/eyeliner-4713577_1920.jpg"],
    "description": "Waterproof liquid eyeliner for long-lasting definition.",
    "details": [
      "Smudge-proof",
      "Quick drying",
      "12-hour wear",
      "Fine brush tip",
      "Dermatologist tested"
    ]
  },
  {
    "id": 57,
    "name": "Headphone",
    "category": "Electronics",
    "price": 400,
    "rating": 4.6,
    "reviews": 110,
    "images": ["Assets/headphones-6492176_1920.jpg"],
    "description": "High-fidelity over-ear headphones with noise cancellation.",
    "details": [
      "Bluetooth 5.0",
      "Active Noise Cancellation",
      "20-hour battery life",
      "Built-in microphone",
      "Premium leather cushions"
    ]
  },
  {
    "id": 58,
    "name": "Living Room Set",
    "category": "Furniture",
    "price": 1500,
    "rating": 4.7,
    "reviews": 65,
    "images": ["Assets/living-room-2569325_1920.jpg"],
    "description": "Modern living room furniture set with couch, table, and decor.",
    "details": [
      "3-seater sofa + coffee table",
      "Includes pillows and lamps",
      "Contemporary style",
      "Neutral color palette",
      "Assembly required"
    ]
  },
  {
    "id": 59,
    "name": "Melon Seeds",
    "category": "Groceries",
    "price": 19,
    "rating": 4.2,
    "reviews": 40,
    "images": ["Assets/melon-seeds-5956726_1920.jpg"],
    "description": "Roasted melon seeds for a healthy and crunchy snack.",
    "details": [
      "Salted and roasted",
      "100% natural",
      "No preservatives",
      "Packed with protein",
      "150g pack"
    ]
  },
  {
    "id": 60,
    "name": "Minion Toy",
    "category": "Toys & Games",
    "price": 10,
    "rating": 4.8,
    "reviews": 198,
    "images": ["Assets/minion-972908_1920.jpg"],
    "description": "Cute minion toy for kids and collectors.",
    "details": [
      "Soft plush material",
      "8 inches tall",
      "Safe for all ages",
      "Official merchandise",
      "Hand washable"
    ]
  },
  {
    "id": 61,
    "name": "Notebook",
    "category": "Books",
    "price": 50,
    "rating": 4.5,
    "reviews": 85,
    "images": ["Assets/notebook-420011_1920.jpg"],
    "description": "Premium quality notebook for office and school use.",
    "details": [
      "Hardcover design",
      "200 ruled pages",
      "A5 size",
      "Eco-friendly paper",
      "Made by PaperWorld"
    ]
  },
  {
    "id": 62,
    "name": "Tennis Racket",
    "category": "Sports",
    "price": 100,
    "rating": 4.4,
    "reviews": 49,
    "images": ["Assets/racket-6308994_1920.jpg"],
    "description": "Lightweight racket perfect for intermediate players.",
    "details": [
      "Aluminum frame",
      "Grip size 4 3/8",
      "Comes with a cover",
      "Head-light balance",
      "For players aged 13+"
    ]
  },
  {
    "id": 63,
    "name": "Wrist Watch",
    "category": "Accessories",
    "price": 250,
    "rating": 4.9,
    "reviews": 132,
    "images": ["Assets/wrist-watch-2159351_1280.jpg"],
    "description": "Elegant wristwatch with a minimalist design.",
    "details": [
      "Analog display",
      "Stainless steel strap",
      "Water-resistant 50m",
      "2-year warranty",
      "Unisex design"
    ]
  }
];
// ----------------------------------------------------------------------------------
// Product List Page (products.html)
// ----------------------------------------------------------------------------------

function generateProductList(filteredProducts) {
  const productList = document.getElementById('product-list');
  if (!productList) return;

  productList.innerHTML = '';  // Clear existing

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
      <a href="product-view.html?id=${product.id}"> 
      <img src="${product.images}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>${product.description}</p>
      <div class="price">$${product.price.toFixed(2)}</div></a>
    `;

    productList.appendChild(card);
  });
}

// Filtering logic
const applyFiltersBtn = document.getElementById('apply-filters');
if (applyFiltersBtn) {
  applyFiltersBtn.addEventListener('click', () => {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(input => input.value);
    const minPrice = parseFloat(document.getElementById('price-min')?.value) || 0;
    const maxPrice = parseFloat(document.getElementById('price-max')?.value) || Infinity;

    const filtered = products.filter(product => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      return matchesCategory && matchesPrice;
    });

    generateProductList(filtered);
  });

  // Initial render on page load
  generateProductList(products);
}

// ----------------------------------------------------------------------------------
// Product View Page (product-view.html)
// ----------------------------------------------------------------------------------

if (window.location.pathname.includes('product-view.html')) {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));
  const container = document.getElementById("product-details");

  const product = products.find(p => p.id === productId);

  if (container) {
    if (!product) {
      container.innerHTML = "<p>Product not found.</p>";
    } else {
      container.innerHTML = `
        <div class="product-view">
          <div class="product-images">
            <div class="main-image">
              <img id="currentImage" src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="thumbnails">
              ${product.images.map(img =>
                `<img src="${img}" alt="${product.name}" onclick="document.getElementById('currentImage').src='${img}'">`
              ).join('')}
            </div>
          </div>

          <div class="product-info">
            <h1>${product.name}</h1>
            <div class="rating">
              ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
              <span class="review-count">(${product.reviews} reviews)</span>
            </div>
            <p class="category"><strong>Category:</strong> ${product.category}</p>
            <h2 class="price">$${product.price.toFixed(2)}</h2>
            <button id="addToCartBtn">Add to Cart</button>

            <div class="product-description">
              <h3>Product Details</h3>
              <ul>
                ${product.details.map(detail => `<li>${detail}</li>`).join('')}
              </ul>
              <p>${product.description}</p>
            </div>
          </div>
        </div>
      `;

      // Add event listener to "Add to Cart" button
      document.getElementById("addToCartBtn").addEventListener("click", () => {
        addToCart(productId);
      });
      
      
      // Show related products
      const related = products.filter(p => p.category === product.category && p.id !== productId).slice(0, 4);
      const relatedContainer = document.getElementById("related-products");

      related.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("related-card");
        card.innerHTML = `
          <a href="product-view.html?id=${p.id}">
          <img src="${p.img}" alt="${p.name}" />
          <h4>${p.name}</h4>
          <p>$${p.price.toFixed(2)}</p>
          </a>
        `;
        relatedContainer.appendChild(card);
      });
    }
  }
}

// ----------------------------------------------------------------------------------
// Cart Functionality (common for all pages)
// ----------------------------------------------------------------------------------

// Retrieve cart from localStorage or empty array
function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add product to cart or increment quantity
function addToCart(productId) {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push({ id: product.id, name: product.name, price:product.price, quantity: 1 });
    } else {
      alert("Product not found.");
      return;
    }
  }

  saveCart(cart);
  updateCartCount();  // Update cart count on all pages
  alert("Product added to cart!");
}

// Update Cart Icon Count on all pages
function updateCartCount() {
  const cart = getCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartIcon = document.getElementById("cart-count");
  if (cartIcon) {
    if (cartCount > 0) {
      cartIcon.textContent = cartCount;
      cartIcon.style.display = "inline-block";  // Show count badge
    } else {
      cartIcon.textContent = "";
      cartIcon.style.display = "none";  // Hide count badge if empty
    }
  }
}

// Immediately update cart count when script loads (for all pages)
updateCartCount();

// ----------------------------------------------------------------------------------
// Cart Page (cart.html)
// ----------------------------------------------------------------------------------

if (window.location.pathname.includes('cart.html')) {
  const cartList = document.getElementById("cart-list");
  const cartSummary = document.getElementById("cart-summary");

  function renderCart() {
    const cart = getCart();
    cartList.innerHTML = "";
    if (cart.length === 0) {
      cartList.innerHTML = "<p>Your cart is empty.</p>";
      cartSummary.innerHTML = "";
      updateCartCount();
      return;
    }

    let totalAmount = 0;

    cart.forEach(({ id, quantity }) => {
      const product = products.find(p => p.id === id);
      if (!product) return;
      console.log("Image path:", product.img);


      const itemTotal = product.price * quantity;
      totalAmount += itemTotal;

      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
        <img id="currentImage" src="${product.images[0]}" alt="${product.name}">
        <div class="item-info">
          <h3>${product.name}</h3>
          <p>Unit Price: $${product.price.toFixed(2)}</p>
        </div>
        <div class="quantity">
          <input type="number" min="1" value="${quantity}" data-id="${id}" class="qty-input" />
        </div>
        <div class="item-total">
          <p>Total: $${itemTotal.toFixed(2)}</p>
        </div>
        <button class="remove-btn" data-id="${id}">Remove</button>
      `;
      cartList.appendChild(itemDiv);
    });

    cartSummary.innerHTML = `
      <h3>Total Amount: $${totalAmount.toFixed(2)}</h3>
      <a href="checkout.html" class="btn-checkout">Proceed to Checkout</a>
    `;

    // Add event listeners for quantity change
    document.querySelectorAll(".qty-input").forEach(input => {
      input.addEventListener("change", (e) => {
        const id = parseInt(e.target.getAttribute("data-id"));
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 1) val = 1;
        updateQuantity(id, val);
      });
    });

    // Add event listeners for remove buttons
    document.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.target.getAttribute("data-id"));
        removeFromCart(id);
      });
    });

    updateCartCount(); // Update count after render
  }

  // Update quantity of product in cart
  function updateQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.quantity = quantity;
      saveCart(cart);
      renderCart();
    }
  }

  // Remove product from cart
  function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(i => i.id !== productId);
    saveCart(cart);
    renderCart();
  }

  renderCart();
}


// ----------------------------------------------------------------------------------
// Contact.html jQuery
// ----------------------------------------------------------------------------------

$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    let valid = true;

    $(".error").hide();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    if (name === "") {
      $("#nameError").show();
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $("#emailError").show();
      valid = false;
    }

    if (message === "") {
      $("#messageError").show();
      valid = false;
    }

    if (valid) {
      alert("Form submitted successfully!");
      // Optionally reset form
      $("#contactForm")[0].reset();
    }
  });
});


// ----------------------------------------------------------------------------------
// Global Search Bar Functionality (common on all pages)
// ----------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        const query = this.value.trim(); // ✅ Define query
        if (query) {
                    // Redirect to search.html with query parameter
          window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
      }
    });
  }
});


// ----------------------------------------------------------------------------------
// Search Results Page (search.html)
// ----------------------------------------------------------------------------------

if (window.location.pathname.includes('search.html')) {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q')?.toLowerCase() || "";
  const container = document.getElementById("product-list");
  if (!query) {
    container.innerHTML = "<p>Please enter a search term.</p>";
  } else {
    const results = products.filter(p =>
      p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
    );
    if (results.length === 0) {
      container.innerHTML = `<p>No results found for "<strong>${query}</strong>".</p>`;
    } else {
      generateProductList(results);
    }
  }
}









document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');

    const categoryTitle = document.getElementById('category-title');
    const productList = document.getElementById('product-list');

    // Ensure categoryTitle and productList exist
    if (!categoryTitle || !productList) {
        console.error("Required elements not found in the DOM.");
        return;
    }

    if (category) {
        categoryTitle.textContent = category;

        // Filter products by category
        const filteredProducts = products.filter(p => p.category === category);

        if (filteredProducts.length === 0) {
            productList.innerHTML = `<p>No products found in category "${category}".</p>`;
        } else {
            generateProductList(filteredProducts);
        }
    } else {
        categoryTitle.textContent = 'None';
        productList.innerHTML = "<p>No category selected.</p>";
    }
});

// ----------------------------------------------------------------------------------
// Checkout Page
// ----------------------------------------------------------------------------------

// Function to fetch cart data from localStorage
function getCartData() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log('Cart Data:', cart);  // Log cart data for debugging
    return cart ? cart : [];
}


// Function to update the order summary
function updateOrderSummary() {
    const cart = getCartData(); // Fetch cart data from localStorage
    const orderItemsList = document.getElementById('order-items-list');
    const subtotalElement = document.getElementById('subtotal');
    const discountAmountElement = document.getElementById('discount-amount');
    const shippingElement = document.getElementById('shipping');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    
    let subtotal = 0;
    let discount = 0;
    let shipping = 10;  // Example fixed shipping cost
    let tax = 0;

    // Clear current items in the order summary
    orderItemsList.innerHTML = ''; 

    // Render cart items in the order summary
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.classList.add('order-item');
        itemElement.innerHTML = `
            <p>${item.name} - ${item.quantity} x $${item.price}</p>
            <p>$${itemTotal}</p>
        `;
        orderItemsList.appendChild(itemElement);
    });

    // Set subtotal value
    subtotalElement.innerText = `$${subtotal.toFixed(2)}`;

    // Discount logic (assuming discount code is present)
    const discountCode = document.getElementById('discountCode') ? document.getElementById('discountCode').value.trim() : '';
    if (discountCode === 'DISCOUNT10') {
        discount = subtotal * 0.10; // Apply 10% discount
    } else {
        discount = 0;
    }

    discountAmountElement.innerText = `- $${discount.toFixed(2)}`;

    // Tax logic
    tax = (subtotal - discount) * 0.18;  // 18% tax
    taxElement.innerText = `$${tax.toFixed(2)}`;

    // Calculate total amount
    const total = subtotal - discount + shipping + tax;
    totalElement.innerText = `$${total.toFixed(2)}`;
}


// Event listener for applying the discount
document.getElementById('applyDiscountBtn')?.addEventListener('click', function() {
    console.log('Discount button clicked');
    updateOrderSummary();  // Update order summary after applying discount
});

// Initialize order summary on page load
window.addEventListener('DOMContentLoaded', function () {
    updateOrderSummary();  // Update summary when the page loads
});

// Function to save checkout data to localStorage
function saveCheckoutData() {
    const fullName = document.getElementById('fullName').value;
    const address1 = document.getElementById('address1').value;
    const address2 = document.getElementById('address2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    const country = document.getElementById('country').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    const shippingInfo = {
        fullName,
        address1,
        address2,
        city,
        state,
        zipCode,
        country,
        phone,
        email
    };

    const cart = getCartData();
    const discountCode = document.getElementById('discountCode').value.trim();

    localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('paymentMethod', paymentMethod);
}

// Event listener for placing the order
document.getElementById('placeOrderBtn')?.addEventListener('click', function () {
  saveCheckoutData(); // Save data to localStorage
  window.location.href = 'confirmation.html'; // Navigate to confirmation page
});


// ----------------------------------------------------------------------------------
// Confirmation Page
// ----------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const orderItemsList = document.getElementById('order-items-list');
    const subtotalElement = document.getElementById('subtotal');
    const discountAmountElement = document.getElementById('discount-amount');
    const shippingElement = document.getElementById('shipping');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const shippingInfoElement = document.getElementById('shipping-info');
    const paymentMethodElement = document.getElementById('payment-method');
    
    // Get cart data using the getCartData function
    const cart = getCartData();
    
    // Check if cart data exists
    if (!cart || cart.length === 0) {
        console.error('No cart data found!');
        return;
    }

    // 1. Render Order Items
    let subtotal = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        // Render individual order items
        const itemElement = document.createElement('div');
        itemElement.classList.add('order-item');
        itemElement.innerHTML = `
            <p>${item.name} - ${item.quantity} x $${item.price}</p>
            <p>$${itemTotal.toFixed(2)}</p>
        `;
        orderItemsList.appendChild(itemElement);
    });

    // 2. Update the subtotal
    subtotalElement.innerText = `$${subtotal.toFixed(2)}`;

    // 3. Apply discount logic (if any)
    let discount = 0;
    const discountCode = document.getElementById('discountCode') ? document.getElementById('discountCode').value.trim() : '';
    if (discountCode === 'DISCOUNT10') {
        discount = subtotal * 0.10;  // Apply 10% discount
    }
    discountAmountElement.innerText = `- $${discount.toFixed(2)}`;

    // 4. Calculate tax (e.g., 18% tax)
    const tax = (subtotal - discount) * 0.18;
    taxElement.innerText = `$${tax.toFixed(2)}`;

    // 5. Set a fixed shipping cost
    const shipping = 50;
    shippingElement.innerText = `$${shipping.toFixed(2)}`;

    // 6. Calculate the total
    const total = subtotal - discount + shipping + tax;
    totalElement.innerText = `$${total.toFixed(2)}`;

    // 7. Display Shipping Info (Assuming shipping info is stored in localStorage)
    const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo'));
    if (shippingInfo) {
        shippingInfoElement.innerHTML = `
            <h3>Shipping Information:</h3>
            <p><strong>Name:</strong> ${shippingInfo.fullName}</p>
            <p><strong>Address:</strong> ${shippingInfo.address1}, ${shippingInfo.address2}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.zipCode}, ${shippingInfo.country}</p>
            <p><strong>Phone:</strong> ${shippingInfo.phone}</p>
            <p><strong>Email:</strong> ${shippingInfo.email}</p>
        `;
    } else {
        console.error('No shipping information found!');
    }

    // 8. Display Payment Method (Assuming payment method is stored in localStorage)
    const paymentMethod = localStorage.getItem('paymentMethod');
    if (paymentMethod) {
        paymentMethodElement.innerHTML = `
            <h3>Payment Method:</h3>
            <p>${paymentMethod}</p>
        `;
    } else {
        console.error('No payment method found!');
    }

    // Now that the summary is rendered, clear the cart after confirmation page
    if (window.location.pathname.includes('confirmation.html')) {
        // Clear the cart after DOM is fully loaded and order summary is shown
        clearCartAfterConfirmation();
    }
});

// Function to get cart data (from localStorage)
function getCartData() {
    // Assuming the cart data is stored in localStorage as a JSON string
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart || []; // Return an empty array if no cart data is found
}

// Function to clear the cart after the confirmation page
function clearCartAfterConfirmation() {
    // Use a timeout to ensure cart is cleared only after the order summary is fully rendered
    setTimeout(() => {
        localStorage.removeItem('cart');
        console.log('Cart has been cleared after confirmation page.');
    }, 500);  // Set a slight delay to ensure everything is rendered before clearing
}
