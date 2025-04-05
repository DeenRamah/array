import { TCollectionCard, TDealCard, TSlide, TProductCard, TBlogCard } from "@/types/common";

export const CollectionsData: TCollectionCard[] = [
  {
    name: "Luxury Estates",
    collections: [
      { label: "Modern Villas", url: "/list/tablets/apple" },
      { label: "Penthouse Suites", url: "/list/pc-laptops/laptops/microsot" },
      { label: "Beachfront Homes", url: "/list/tablets/samsung" },
      { label: "Vacation Rentals", url: "/list/tablets" },
      { label: "Countryside Cottages", url: "/list/tablets" },
    ],
    imgUrl: "/images/images/collectionTablet.jpg",
    url: "/list/tablets",
  },
  {
    name: "Urban Living",
    collections: [
      { label: "City Apartments", url: "/list/smartphones/apple-iphone" },
      { label: "High-Rise Condos", url: "/list/smartphones/samsung-galaxy" },
      { label: "Studio Lofts", url: "/list/smartphones/google-pixel" },
    ],
    imgUrl: "/images/images/collectionSmartphone.jpg",
    url: "/list/smartphones",
  },
  {
    name: "Rental Spaces",
    collections: [
      { label: "Furnished Rentals", url: "/list/watches/apple" },
      { label: "Vacation Homes", url: "/list/watches/Samsung" },
      { label: "Student Housing", url: "/list/watches" },
      { label: "Short-Term Leases", url: "/list/watches" },
      { label: "Rental Amenities", url: "/list/watches" },
    ],
    imgUrl: "/images/images/collectionWatch.jpg",
    url: "/list/watches",
  },
  {
    name: "Home Essentials",
    collections: [
      { label: "Mortgage Tools", url: "/" },
      { label: "Interior Packages", url: "/" },
      { label: "Smart Home Devices", url: "/" },
      { label: "Landscaping Kits", url: "/" },
      { label: "Outdoor Furniture", url: "/" },
    ],
    imgUrl: "/images/images/collectionAccessories.jpg",
    url: "/",
  },
];

export const TodayDeals: TDealCard[] = [
  {
    name: "Cozy Seaside Bungalow",
    imgUrl: ["/images/products/airpodsMax1.jpg", "/images/products/airpodsMax2.jpg"],
    price: 579000,
    dealPrice: 519000,
    specs: ["2 Bed", "1 Bath", "Ocean View"],
    url: "/product/65e6ef559d4ab819d1158194",
    dealDate: new Date("1970-01-01T18:00:00"),
  },
  {
    name: "City Loft in Downtown",
    imgUrl: ["/images/products/appleMouse1.jpg", "/images/products/appleMouse2.jpg"],
    price: 79999,
    dealPrice: 55499,
    specs: ["1 Bed", "Modern Kitchen"],
    url: "/product/65e6f3fd9d4ab819d1158197",
    dealDate: new Date("1970-01-01T09:30:00"),
  },
  {
    name: "Modern Family House",
    imgUrl: ["/images/products/imac2_1.jpg", "/images/products/imac2_2.jpg"],
    price: 1299000,
    dealPrice: 1119000,
    specs: ["4 Bed", "2 Bath", "Backyard"],
    url: "/product/65e22d7f580cd983d5aa5a2f",
    dealDate: new Date("1970-01-01T23:10:00"),
  },
  {
    name: "Penthouse Apartment",
    imgUrl: ["/images/products/ipadPro1.jpg", "/images/products/ipadPro2.jpg"],
    price: 1149000,
    dealPrice: 1099000,
    specs: ["3 Bed", "City View", "Top Floor"],
    url: "/product/65e6244fcb99bb936d4cb7c0",
    dealDate: new Date("1970-01-01T06:30:00"),
  },
  {
    name: "Luxury Condo Suite",
    imgUrl: ["/images/products/iphone1.jpg", "/images/products/iphone2.jpg"],
    price: 1199999,
    specs: ["3 Bed", "Balcony", "Smart Home"],
    dealPrice: 1059999,
    url: "/product/65e6530ecb99bb936d4cb7db",
    dealDate: new Date("1970-01-01T10:50:00"),
  },
];

export const TopProducts: TProductCard[] = [
  {
    name: "Modern Studio Flat",
    imgUrl: ["/images/products/airpods1.jpg", "/images/products/airpods2.jpg"],
    price: 129999,
    specs: ["1 Bed", "Open Kitchen", "Wi-Fi Ready"],
    url: "/product/65e6eed69d4ab819d1158193",
  },
  {
    name: "Family Villa with Pool",
    imgUrl: ["/images/products/appleWatch1.jpg", "/images/products/appleWatch2.jpg"],
    price: 799000,
    specs: ["5 Bed", "Garden", "Private Pool"],
    url: "/product/65e6f5339d4ab819d115819c",
  },
  {
    name: "Executive Office Suite",
    imgUrl: ["/images/products/asusRog1.jpg", "/images/products/asusRog2.jpg"],
    price: 2499999,
    dealPrice: 2149999,
    specs: ["5 Rooms", "Meeting Lounge", "Downtown"],
    url: "/product/65e6008bcb99bb936d4cb7ac",
  },
  {
    name: "Furnished Apartment",
    imgUrl: ["/images/products/ps5Controller1.jpg", "/images/products/ps5Controller2.jpg"],
    price: 69000,
    specs: ["Fully Furnished", "1 Bedroom"],
    url: "/product/65e6f5f89d4ab819d115819f",
  },
  {
    name: "Mountain View Lodge",
    imgUrl: ["/images/products/sonyAlpha7_1.jpg", "/images/products/sonyAlpha7_2.jpg"],
    price: 4499000,
    specs: ["7 Bed", "Fireplace", "Scenic Views"],
    dealPrice: 3699000,
    url: "/product/65e656decb99bb936d4cb7e4",
  },
];

export const SlidesData: TSlide[] = [
  {
    imgUrl: "/images/images/PS5.webp",
    url: "/product/65e6f80a9d4ab819d11581a2",
    alt: "/playstation5",
    msg: {
      title: "Dream Property Deals",
      buttonText: "Explore Now!",
    },
  },
  {
    imgUrl: "/images/images/wacom.jpg",
    url: "/product/65e6f7469d4ab819d11581a1",
    alt: "WACOM CINITIQ PRO",
    msg: {
      title: "Design Your Life",
      buttonText: "Start Today",
      desc: "Find the perfect space",
    },
  },
  {
    imgUrl: "/images/images/appleWatch.jpg",
    url: "/product/65e6f5339d4ab819d115819c",
    alt: "APPLE WATCH",
    msg: {
      title: "Homes With Smart Features",
      buttonText: "See Listings",
      desc: "",
    },
  },
  {
    imgUrl: "/images/images/appleAirpods.jpg",
    url: "/list/audio/headphones/apple",
    alt: "",
    msg: {
      title: "Exclusive Listings Today",
      buttonText: "View Offers",
      desc: "Don't miss out!",
    },
  },
];

export const BlogCardData: TBlogCard[] = [
  {
    title: "Top Tips for First-Time Buyers",
    imgUrl: "/images/blog/blogPost1.avif",
    url: "#",
    shortText: `Buying a home? Here’s how to prepare, choose the right property, and close the deal like a pro.`,
  },
  {
    title: "Best Cities to Invest in This Year",
    imgUrl: "/images/blog/blogPost2.avif",
    url: "#",
    shortText: `Explore high-growth real estate markets where your investment can yield long-term gains.`,
  },
  {
    title: "Small Space, Big Style",
    imgUrl: "/images/blog/blogPost3.avif",
    url: "#",
    shortText: `Living small doesn’t mean compromising on style. See how you can transform any space with smart design.`,
  },
];
