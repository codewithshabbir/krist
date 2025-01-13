// Interface representing a category with a name and slug (used for filtering)
export interface Categories {
  name: string;
  slug: string;
}

// Interface for a category item in the UI (with an image and slug for routing)
export interface CategoryItem {
  id: number;
  name: string;
  imageUrl: string;
  slug: string;
}

// Interface for a product in the store, including basic details and rating
export interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
  rating: number;
  brand?: string;
}

// Interface for a button, which can optionally have a link or a click function
export interface Buttons {
  title: string; 
  link?: string; // Optional link associated with the button
  clickFun?: () => void; // Optional click function
}

// Interface for card props, which are used for displaying products in a card format
export interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  rating: number;
  brand?: string;
}

// Interface for the product list, which takes an array of filtered products
export interface ProductListProps {
  filterProducts: Product[];
}

// Interface for detailed product data with additional information like description, stock, tags, and more
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
  dimensions: { // Dimensions of the product (in cm or inches)
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: { // Array of product reviews
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: { // Metadata information for the product
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

// Grouped products by category, where the key is the category and value is an array of products in that category
export type GroupedProducts = Record<string, ProductData[]>;

// Interface for a selected product in a simplified format for UI usage
export interface SelectedProduct {
  id: number; 
  name: string;
  imageUrl: string;
  slug: string;
}

// Cart context type, used for managing cart state, adding/removing items, and counting items
export type CartContextType = {
  cart: CardProps[]; // Array of products in the cart
  addToCart: (item: CardProps) => void; // Function to add a product to the cart
  removeFromCart?: (item: CardProps) => void; 
  cartCount: number;
}

// Interface for the cart sidebar props, handling visibility toggle for the sidebar
export interface cartSidebarProps {
  onClickFun: (value: boolean) => void;
  value: boolean;
}

// Interface for the star rating component, which takes the product's rating as input
export interface StarRatingProps {
  rating: number;
}