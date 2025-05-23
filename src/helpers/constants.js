export const HEADERMENU = [
  { name: "Wah!", path: "/home" },
  { name: "My Stuff", path: "/mystuff" },
  { name: "Wallet", path: "/wallet" },
  { name: "Communities", path: "/communities" },
  { name: "Chat", path: "/chat" },
];

export const SWIPER_CONFIG = {
  spaceBetween: 40,
  slidesPerView: 5
};

export const REVIEW_STARS = [
  { stars: 5, count: 70 },
  { stars: 4, count: 8 },
  { stars: 3, count: 6 },
  { stars: 2, count: 3 },
  { stars: 1, count: 1 },
];

export const HEADER_CONSTANTS = {
    LOGO: {
        SRC: '/assets/images/logo.png',
        ALT: 'Wah!',
        HEIGHT: 'h-10',
        WIDTH: 'w-10',
    },
    SEARCH: {
        PLACEHOLDER: 'What are you looking for?',
    },
    MOBILE_DRAWER: {
        WIDTH: 'w-full',
        TRANSITION_DURATION: 'duration-300',
    },
    ICONS: {
        SIZE: {
            SMALL: 'size-4',
            MEDIUM: 'size-6',
        },
    },
}; 

export const PRODUCTS = [
  {
    product: "Havic HV G-92 Gamepad",
    discount: "40%",
    originalPrice: 120,
    discountedPrice: 80,
    rating: 4.8,
    reviews: 150,
    couponsLeft: 25,
    validUntil: "10-10-2021",
    shipping: "Free Shipping",
    returnPeriod: "30 Days Return",
    qa: [
      { "question": "Can the item be used for gaming?", "answer": "Yes" },
      { "question": "Can the item affect your skin?", "answer": "No" },
      { "question": "Is the item waterproof?", "answer": "No" },
      { "question": "Does the item come with a warranty period?", "answer": "Yes" }
    ],
    description: "PlayStation 5 is provider with high quality and you can choose wireless to make controllers more to make new visual mouse controls.",
    dealTerms: "PlayStation 5 generate deal high quality and you can choose wireless for more wireless mouse to make new visual mouse controls.",
    reviewBreakdown: [
      { stars: 5, count: 70 },
      { stars: 4, count: 8 },
      { stars: 3, count: 0 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 }
    ],
    images: [
      "/assets/images/keyboard.webp",
      "/assets/images/mouse.png",
      "/assets/images/laptop.webp",
    ]
  },
  {
    product: "TechTrend T-500 Wireless Mouse",
    discount: "25%",
    originalPrice: 60,
    discountedPrice: 45,
    rating: 4.2,
    reviews: 85,
    couponsLeft: 15,
    validUntil: "12-15-2021",
    shipping: "Free Shipping",
    returnPeriod: "14 Days Return",
    qa: [
      { "question": "Is it compatible with Mac?", "answer": "Yes" },
      { "question": "Does it require batteries?", "answer": "No, rechargeable" },
      { "question": "Is it ergonomic?", "answer": "Yes" },
      { question: "Does it have customizable buttons?", answer: "Yes" }
    ],
    description: "High-precision wireless mouse with customizable DPI settings and ergonomic design for prolonged use.",
    dealTerms: "Limited-time offer with free shipping and extended warranty on select models.",
    reviewBreakdown: [
      { stars: 5, count: 50 },
      { stars: 4, count: 25 },
      { stars: 3, count: 7 },
      { stars: 2, count: 2 },
      { stars: 1, count: 1 }
    ],
    images: [
      "/assets/images/keyboard.webp",
      "/assets/images/mouse.png",
      "/assets/images/keyboard.webp"
    ]
  },
  {
    product: "GamerPro X1 Headset",
    discount: "30%",
    originalPrice: 100,
    discountedPrice: 70,
    rating: 4.5,
    reviews: 200,
    couponsLeft: 10,
    validUntil: "11-01-2021",
    shipping: "$5 Shipping",
    returnPeriod: "30 Days Return",
    qa: [
      { question: "Does it have noise cancellation?", answer: "Yes" },
      { question: "Is it wireless?", answer: "No" },
      { question: "Is it compatible with Xbox?", answer: "Yes" },
      { question: "Does it include a microphone?", answer: "Yes" }
    ],
    description: "Immersive gaming headset with surround sound and detachable microphone for clear communication.",
    dealTerms: "Special discount for first 100 customers, includes free carrying case.",
    reviewBreakdown: [
      { stars: 5, count: 120 },
      { stars: 4, count: 60 },
      { stars: 3, count: 15 },
      { stars: 2, count: 3 },
      { stars: 1, count: 2 }
    ],
    images: [
      "/assets/images/keyboard.webp",
      "/assets/images/mouse.png",
      "/assets/images/keyboard.webp"
    ]
  },
  {
    product: "UltraKey K-200 Mechanical Keyboard",
    discount: "20%",
    originalPrice: 150,
    discountedPrice: 120,
    rating: 4.7,
    reviews: 95,
    couponsLeft: 30,
    validUntil: "10-25-2021",
    shipping: "Free Shipping",
    returnPeriod: "60 Days Return",
    qa: [
      { question: "Are the keys programmable?", answer: "Yes" },
      { question: "Is it RGB backlit?", answer: "Yes" },
      { question: "Is it wireless?", answer: "No" },
      { question: "Does it have a warranty?", answer: "Yes, 1 year" }
    ],
    description: "Mechanical keyboard with customizable RGB lighting and durable switches for fast typing.",
    dealTerms: "Free keycap set with every purchase, limited stock available.",
    reviewBreakdown: [
      { stars: 5, count: 70 },
      { stars: 4, count: 20 },
      { stars: 3, count: 3 },
      { stars: 2, count: 1 },
      { stars: 1, count: 1 }
    ],
    images: [
      "/assets/images/keyboard.webp",
      "/assets/images/mouse.png",
      "/assets/images/keyboard.webp"
    ]
  },
  {
    product: "StreamCam C-300 Webcam",
    discount: "15%",
    originalPrice: 80,
    discountedPrice: 68,
    rating: 4.0,
    reviews: 60,
    couponsLeft: 20,
    validUntil: "11-10-2021",
    shipping: "Free Shipping",
    returnPeriod: "30 Days Return",
    qa: [
      { question: "Does it support 1080p?", answer: "Yes" },
      { question: "Is it plug-and-play?", answer: "Yes" },
      { question: "Does it have a built-in microphone?", answer: "Yes" },
      { question: "Is it compatible with streaming software?", answer: "Yes" }
    ],
    description: "High-definition webcam for streaming and video calls with built-in microphone and auto-focus.",
    dealTerms: "Exclusive deal with free tripod stand included.",
    reviewBreakdown: [
      { stars: 5, count: 30 },
      { stars: 4, count: 20 },
      { stars: 3, count: 8 },
      { stars: 2, count: 1 },
      { stars: 1, count: 1 }
    ],
    images: [
      "/assets/images/keyboard.webp",
      "/assets/images/mouse.png",
      "/assets/images/keyboard.webp"
    ]
  },
  {
    product: "ElitePad P-100 Gaming Mouse Pad",
    discount: "10%",
    originalPrice: 30,
    discountedPrice: 27,
    rating: 4.3,
    reviews: 45,
    couponsLeft: 50,
    validUntil: "12-01-2021",
    shipping: "$3 Shipping",
    returnPeriod: "15 Days Return",
    qa: [
      { question: "Is it non-slip?", answer: "Yes" },
      { question: "Is it washable?", answer: "Yes" },
      { question: "Is it large enough for gaming?", answer: "Yes" },
      { question: "Does it have stitched edges?", answer: "Yes" }
    ],
    description: "Large gaming mouse pad with smooth surface and non-slip base for precise control.",
    dealTerms: "Buy two and get 20% off the second item.",
    reviewBreakdown: [
      { stars: 5, count: 25 },
      { stars: 4, count: 15 },
      { stars: 3, count: 4 },
      { stars: 2, count: 1 },
      { stars: 1, count: 0 }
    ],
    images: [
      "/assets/images/keyboard.webp",
      "/assets/images/mouse.png",
      "/assets/images/keyboard.webp"
    ]
  },
  {
    product: "SoundWave S-50 Speakers",
    discount: "35%",
    originalPrice: 200,
    discountedPrice: 130,
    rating: 4.6,
    reviews: 120,
    couponsLeft: 8,
    validUntil: "10-20-2021",
    shipping: "Free Shipping",
    returnPeriod: "30 Days Return",
    qa: [
      { question: "Are they Bluetooth-enabled?", answer: "Yes" },
      { question: "Do they support surround sound?", answer: "Yes" },
      { question: "Are they portable?", answer: "No" },
      { question: "Do they come with a remote?", answer: "Yes" }
    ],
    description: "High-fidelity speakers with Bluetooth connectivity and deep bass for immersive audio.",
    dealTerms: "Limited stock, includes free audio cable with purchase.",
    reviewBreakdown: [
      { stars: 5, count: 80 },
      { stars: 4, count: 30 },
      { stars: 3, count: 8 },
      { stars: 2, count: 2 },
      { stars: 1, count: 0 }
    ],
    images: [
      "/assets/images/keyboard.webp",
      "/assets/images/mouse.png",
      "/assets/images/keyboard.webp"
    ]
  }

]