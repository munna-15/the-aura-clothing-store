import bgImage_2 from "./bgImage_2.png";
import hero_1 from "./hero_1.avif"
import image_1 from "./image_1.avif"
import image_2 from "./image_2.avif"
import image_3 from "./image_3.avif"
import image_4 from "./image_4.avif"
import image_5 from "./image_5.avif"
import image_6 from "./image_6.avif"
import image_7 from "./image_7.avif"
import image_8 from "./image_8.avif"
import image_9 from "./image_9.avif"
import login_1 from "./login_1.avif"
import login_2 from "./login_2.avif"
import hero_image_3 from "./hero_image_3.avif"
import hero_image_4 from "./hero_image_4.avif"
import hero_image from "./hero_image.png"
import add_icon_green from "./add_icon_green.png"
import add_icon_white from "./add_icon_white.png"
import remove_icon_red from "./remove_icon_red.png"
import collection_1 from "./collection_1.jpg"
import collection_2 from "./collection_2.jpg"
import collection_3 from "./collection_3.jpg"
import hoodie_1 from "./hoodie_1.jpg"
import hoodie_2 from "./hoodie_2.jpg"
import hoodie_3 from "./hoodie_3.jpg"
import hoodie_4 from "./hoodie_4.jpg"
import hoodie_5 from "./hoodie_5.jpg"
import hoodie_6 from "./hoodie_6.jpg"
import hoodie_7 from "./hoodie_7.jpg"
import hoodie_8 from "./hoodie_8.jpg"
import hoodie_9 from "./hoodie_9.jpg"
import outfit_1 from "./outfit_1.jpg"
import outfit_2 from "./outfit_2.jpg"
import outfit_3 from "./outfit_3.jpg"
import outfit_4 from "./outfit_4.jpg"
import outfit_5 from "./outfit_5.jpg"
import outfit_6 from "./outfit_6.jpg"
import outfit_7 from "./outfit_7.jpg"
import outfit_8 from "./outfit_8.jpg"
import outfit_9 from "./outfit_9.jpg"
import outfit_10 from "./outfit_10.jpg"
import outfit_11 from "./outfit_11.jpg"
import outfit_12 from "./outfit_12.jpg"
import outfit_13 from "./outfit_13.jpg"
import outfit_14 from "./outfit_14.jpg"
import outfit_15 from "./outfit_15.jpg"


export const assets = {


  add_icon_green,
  add_icon_white,
  remove_icon_red,
  hero_image,
  hero_image_3,
  hero_image_4,
  bgImage_2,
  hero_1,
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  image_7,
  image_8,
  image_9,
  login_1,
  login_2

}

export const collection_list = [
  {
    collection_name: "shirt",
    collection_image: collection_3,

  },
  {
    collection_name: "hoodie",
    collection_image: collection_1,

  },
  {
    collection_name: "formal",
    collection_image: collection_2,
  }
]

export const newCollection = [
  {
    col_name: "Men's Check-shirt",
    col_img: outfit_2
  },
  {
    col_name: "Men's Formal-shirt",
    col_img: outfit_4
  },
  {
    col_name: "Hoodie for winter",
    col_img: hoodie_5
  },
  {
    col_name: "Elegance",
    col_img: hoodie_3
  },
  {
    col_name: "Dashing",
    col_img: hoodie_8
  },
  {
    col_name: "Unisex",
    col_img: hoodie_9
  },
]



export const shirt_list = [
  {
    _id: "1",
    name: "Brown-shirt",
    image: outfit_1,
    images: [
      outfit_1,
      outfit_6,
      outfit_1,
      outfit_4,
    ],

    price: 1490,
    description: "Premium cotton brown shirt with a comfortable slim fit for everyday wear.",
    category: "shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown"],

    stock: {
      S: 5,
      M: 10,
      L: 6,
      XL: 4
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],

    isNew: false,
    isFeatured: false,
    isTrending: true,
    rating: 4.8,
    reviews: 125,
  },
  {
    _id: "2",
    name: "Black-Check shirt",
    image: outfit_2,
    images: [
      outfit_1,
      outfit_6,
      outfit_1,
      outfit_4,
    ],

    price: 1690,
    description: "Stylish black check shirt crafted from breathable cotton fabric.",
    category: "shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],

    stock: {
      S: 5,
      M: 10,
      L: 6,
      XL: 4
    },



    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],

    isNew: false,
    isFeatured: false,
    rating: 4.8,
    reviews: 125,
  },
  {
    _id: "3",
    name: "Orange-Check shirt",
    image: outfit_3,
    images: [
      outfit_1,
      outfit_6,
      outfit_1,
      outfit_4,
    ],
    price: 1590,
    description: "Vibrant orange check shirt perfect for casual outings and weekends.",
    category: "shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],

    stock: {
      S: 5,
      M: 10,
      L: 6,
      XL: 4
    },

    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],

    isNew: false,
    isFeatured: false,
    isTrending: true,
    rating: 4.8,
    reviews: 125,
  },
  {
    _id: "4",
    name: "Maroon-shirt",
    image: outfit_4,
    images: [
      outfit_1,
      outfit_6,
      outfit_9,
      outfit_4,
    ],
    price: 1790,
    description: "Elegant maroon shirt with a modern fit suitable for formal and casual occasions.",
    category: "shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red"],

    stock: {
      S: 5,
      M: 10,
      L: 6,
      XL: 4
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],

    isNew: false,
    isFeatured: false,
    isTrending: true,
    rating: 4.8,
    reviews: 125,
  },

  {
    _id: "5",
    name: "Blue-check shirt",
    image: outfit_5,
    images: [
      outfit_1,
      outfit_6,
      outfit_1,
      outfit_4,
    ],
    price: 1650,
    description: "Classic blue check shirt made with soft premium cotton.",
    category: "shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue"],

    stock: {
      S: 5,
      M: 10,
      L: 6,
      XL: 4
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],

    isNew: false,
    isFeatured: true,
    isTrending:true,
    rating: 4.8,
    reviews: 125,
  },
  {
    _id: "6",
    name: "Red-check shirt",
    image: outfit_6,
    images: [
      outfit_1,
      outfit_6,
      outfit_1,
      outfit_4,
    ],
    price: 1550,
    description: "Trendy red check shirt offering all-day comfort and style.",
    category: "shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red"],

    stock: {
      S: 5,
      M: 10,
      L: 6,
      XL: 4
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],

    isNew: false,
    isFeatured: false,
    rating: 4.8,
    reviews: 125,
  },
  {
    _id: "7",
    name: "Beige-Tshirt",
    image: outfit_7,
    images: [
      outfit_1,
      outfit_6,
      outfit_1,
      outfit_4,
    ],
    price: 990,
    description: "Soft beige t-shirt made from lightweight cotton for daily use.",
    category: "shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],

    stock: {
      S: 5,
      M: 10,
      L: 6,
      XL: 4
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],

    isNew: false,
    isFeatured: false,
    rating: 4.8,
    reviews: 122,
  },
  {
    _id: "8",
    name: "Dark-Blue check shirt",
    image: outfit_8,
    images: [
      outfit_1,
      outfit_6,
      outfit_1,
      outfit_4,
    ],
    price: 1850,
    description: "Premium dark blue check shirt with a sophisticated modern design.",
    category: "shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue"],

    stock: {
      S: 5,
      M: 10,
      L: 6,
      XL: 4
    },

    isNew: false,
    isFeatured: false,
    rating: 4.8,
    reviews: 115,
  },
  {
    _id: "9",
    name: "Blue & White Check",
    image: outfit_9,
    images: [
      outfit_1,
      outfit_6,
      outfit_1,
      outfit_4,
    ],
    price: 1750,
    description: "Smart blue and white check shirt for office and casual wear.",
    category: "shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],

    stock: {
      S: 5,
      M: 10,
      L: 6,
      XL: 4
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],

    isNew: false,
    isFeatured: false,
    rating: 4.8,
    reviews: 25,
  },
  {
    _id: "10",
    name: "White shirt",
    image: outfit_10,
    images: [
      outfit_1,
      outfit_6,
      outfit_1,
      outfit_4,
    ],
    price: 1450,
    description: "Classic white formal shirt with wrinkle-resistant fabric.",
    category: "shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],

    stock: {
      S: 5,
      M: 10,
      L: 6,
      XL: 4
    },

    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],

    isNew: false,
    isFeatured: false,
    rating: 4.8,
    reviews: 125,
  },
  {
    _id: "11",
    name: "Charcoal-gray",
    image: outfit_11,
    images: [
      outfit_1,
      outfit_6,
      outfit_1,
      outfit_4,
    ],
    price: 1890,
    description: "Stylish charcoal gray shirt designed with premium quality fabric.",
    category: "shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray"],

    stock: {
      S: 5,
      M: 10,
      L: 6,
      XL: 4
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],

    isNew: false,
    isFeatured: false,
    rating: 4.8,
    reviews: 125,
  },
  {
    _id: "12",
    name: "White & SkyBlue",
    image: outfit_12,
    images: [
      outfit_1,
      outfit_6,
      outfit_1,
      outfit_4,
    ],
    price: 1690,
    description: "Elegant white and sky blue striped shirt for a fresh modern look.",
    category: "shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],

    stock: {
      S: 5,
      M: 10,
      L: 6,
      XL: 4
    },

    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],

    isNew: false,
    isFeatured: false,
    isTrending:true,
    rating: 4.8,
    reviews: 125,
  },
  {
    _id: "13",
    name: "Sky-blue",
    image: outfit_13,
    images: [
      outfit_11,
      outfit_6,
      outfit_10,
      outfit_4,
    ],
    price: 1590,
    description: "Soft sky blue cotton shirt offering comfort and timeless style.",
    category: "shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue"],

    stock: {
      S: 5,
      M: 10,
      L: 6,
      XL: 4
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],

    isNew: false,
    isFeatured: false,
    rating: 4.8,
    reviews: 125,
  }
];

export const hoodie_list = [
  {
    _id: "20",
    name: "Green-Hoodie",
    image: outfit_14,
    images: [
      outfit_1,
      outfit_6,
      outfit_1,
      outfit_4,
    ],
    price: 2490,
    description: "Warm fleece green hoodie with adjustable hood and front pocket.",
    category: "hoodie",
    sizes: ["M", "L", "XL", "S"],
    colors: ["Green"],
    stock: {
      S: 8,
      M: 12,
      L: 5,
      XL: 3,
    },
    isNew: false,
    isFeatured: false,
    rating: 4.9,
    reviews: 86,
  },
  {
    _id: "21",
    name: "Maroon-Hoodie",
    image: outfit_15,
    images: [
      outfit_1,
      outfit_6,
      outfit_12,
      outfit_4,
    ],
    price: 2590,
    description: "Premium maroon hoodie designed for winter comfort and style.",
    category: "hoodie",
    sizes: ["M", "L", "XL", "S"],
    colors: ["Brown"],
    stock: {
      S: 8,
      M: 12,
      L: 5,
      XL: 3,
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],
    isNew: false,
    isFeatured: false,
    rating: 4.9,
    reviews: 86,
  },
  {
    _id: "22",
    name: "New Hoodie",
    image: hoodie_1,
    images: [
      hoodie_3,
      hoodie_5,
      outfit_1,
      hoodie_9,
    ],
    price: 2290,
    description: "Minimalist everyday hoodie made from a soft cotton blend.",
    category: "hoodie",
    sizes: ["M", "L", "XL", "S"],
    colors: ["Green"],
    stock: {
      S: 8,
      M: 12,
      L: 5,
      XL: 3,
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],
    isNew: false,
    isFeatured: false,
    isTrending:true,
    rating: 4.9,
    reviews: 86,
  },
  {
    _id: "23",
    name: "Brown Hoodie",
    image: hoodie_2,
    images: [
      hoodie_3,
      hoodie_5,
      outfit_1,
      hoodie_9,
    ],
    price: 2390,
    description: "Cozy brown hoodie featuring ribbed cuffs and a kangaroo pocket.",
    category: "hoodie",
    sizes: ["M", "L", "XL", "S"],
    colors: ["Brown"],
    stock: {
      S: 8,
      M: 12,
      L: 5,
      XL: 3,
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],
    isNew: false,
    isFeatured: true,
    isTrending:true,
    rating: 4.9,
    reviews: 86,
  },
  {
    _id: "24",
    name: "Urban Hoodie",
    image: hoodie_3,
    images: [
      hoodie_3,
      hoodie_5,
      outfit_1,
      hoodie_9,
    ],
    price: 2690,
    description: "Streetwear-inspired hoodie crafted with heavyweight premium fabric.",
    category: "hoodie",
    sizes: ["M", "L", "XL", "S"],
    colors: ["Black"],
    stock: {
      S: 8,
      M: 12,
      L: 5,
      XL: 3,
    },
    isNew: false,
    isFeatured: true,
    isTrending:true,
    rating: 4.9,
    reviews: 86,
  },
  {
    _id: "25",
    name: "Classic Hoodie",
    image: hoodie_4,
    images: [
      hoodie_3,
      hoodie_5,
      outfit_1,
      hoodie_9,
    ],
    price: 2190,
    description: "Lightweight classic hoodie perfect for everyday casual outfits.",
    category: "hoodie",
    sizes: ["M", "L", "XL", "S"],
    colors: ["Gray"],
    stock: {
      S: 8,
      M: 12,
      L: 5,
      XL: 3,
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],
    isNew: false,
    isFeatured: false,
    rating: 4.9,
    reviews: 86,
  },
  {
    _id: "26",
    name: "Oversized Hoodie",
    image: hoodie_5,
    images: [
      hoodie_3,
      hoodie_5,
      outfit_1,
      hoodie_9,
    ],
    price: 2890,
    description: "Relaxed oversized hoodie with an ultra-soft fleece interior.",
    category: "hoodie",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    stock: {
      S: 8,
      M: 12,
      L: 5,
      XL: 3,
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],
    isNew: false,
    isFeatured: false,
    rating: 4.9,
    reviews: 86,
  },
  {
    _id: "27",
    name: "Black Essential Hoodie",
    image: hoodie_6,
    images: [
      hoodie_3,
      hoodie_5,
      outfit_1,
      hoodie_9,
    ],
    price: 2790,
    description: "Modern black hoodie with a minimalist design and premium finish.",
    category: "hoodie",
    sizes: ["M", "L", "XL", "S"],
    colors: ["Black"],
    stock: {
      S: 8,
      M: 12,
      L: 5,
      XL: 3,
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],
    isNew: false,
    isFeatured: false,
    rating: 4.9,
    reviews: 86,
  },
  {
    _id: "28",
    name: "Navy Hoodie",
    image: hoodie_7,
    images: [
      hoodie_3,
      hoodie_5,
      outfit_1,
      hoodie_9,
    ],
    price: 2490,
    description: "Comfortable navy blue hoodie ideal for cool weather and casual wear.",
    category: "hoodie",
    sizes: ["M", "L", "XL", "S"],
    colors: ["Blue"],
    stock: {
      S: 8,
      M: 12,
      L: 5,
      XL: 3,
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],
    isNew: false,
    isFeatured: true,
    isTrending:true,
    rating: 4.9,
    reviews: 86,
  },
  {
    _id: "29",
    name: "Grey Hoodie",
    image: hoodie_8,
    images: [
      hoodie_3,
      hoodie_5,
      outfit_1,
      hoodie_9,
    ],
    price: 2350,
    description: "Soft grey hoodie made for everyday comfort and long-lasting durability.",
    category: "hoodie",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Gray"],
    stock: {
      S: 8,
      M: 12,
      L: 5,
      XL: 3,
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],
    isNew: false,
    isFeatured: false,
    rating: 4.9,
    reviews: 86,
  },
  {
    _id: "30",
    name: "Premium Hoodie",
    image: hoodie_9,
    images: [
      hoodie_3,
      hoodie_5,
      outfit_1,
      hoodie_9,
    ],
    price: 2990,
    description: "Luxury heavyweight hoodie made from premium cotton fleece fabric.",
    category: "hoodie",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black"],
    stock: {
      S: 8,
      M: 12,
      L: 5,
      XL: 3,
    },
    reviewsData: [
      {
        id: "r1",
        name: "John",
        rating: 5,
        comment: "Excellent quality.",
        date: "2026-07-12",
        verified: true,
      },
      {
        id: "r2",
        name: "Alex",
        rating: 4,
        comment: "Nice fitting.",
        date: "2026-07-10",
        verified: false,
      },
    ],
    isNew: false,
    isFeatured: false,
    rating: 4.9,
    reviews: 86,
  }
];

export const allProducts = [
  ...shirt_list,
  ...hoodie_list,
]