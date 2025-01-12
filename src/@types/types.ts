export interface Categories {
  name: string;
  slug: string;
}

export interface CategoryItem {
  id: number;
  name: string;
  imageUrl: string;
  slug: string;
}

export interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
  rating: number;
  brand?: string;
}

export interface Buttons {
  title: string;
  link?: string;
  clickFun?: () => void;

}

export interface CardProps {
  id: number,
  title: string;
  imageUrl: string;
  price: number;
  rating: number;
  brand?: string;
}

export interface ProductListProps {
  filterProducts: Product[];
}

export interface ProductData {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

export type GroupedProducts = Record<string, ProductData[]>;

export interface SelectedProduct {
  id: number;
  name: string;
  imageUrl: string;
  slug: string;
}

export type CartContextType = {
  cart: CardProps[],
  addToCart: (item: CardProps) => void,
  removeFromCart?: (item: CardProps) => void,
  cartCount: number
}