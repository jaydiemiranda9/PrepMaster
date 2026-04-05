export type ProductCategory =
  | "lsat"
  | "clep"
  | "nclex"
  | "professional-cert"
  | "insurance";

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  examPassed?: string;
  date: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  category: ProductCategory;
  price: number;
  pages: number;
  coverImage: string;
  description: string;
  bullets: string[];
  blobKey: string;       // key in Vercel Blob storage
  bestseller?: boolean;
  featured?: boolean;
  reviews?: Review[];
}

export interface Bundle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProductCategory;
  price: number;
  originalPrice: number;
  coverImage: string;
  description: string;
  productIds: string[];  // IDs of included products
  isBundle: true;
}

export type CartProduct = {
  id: string;
  slug: string;
  title: string;
  price: number;
  coverImage: string;
  isBundle?: boolean;
  productIds?: string[]; // for bundles: individual product IDs to deliver
  blobKey?: string;      // for individual products
};

export type CartItem = CartProduct & {
  quantity: 1;           // digital products are always qty 1
};
