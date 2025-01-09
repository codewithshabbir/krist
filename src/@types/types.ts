export interface Categories {
  name: string;
  slug: string;
}

export interface CategoryItem {
  id: number
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
}

export interface Buttons {
  title: string;
  link: string;
}

export interface CardProps {
  title: string;
  imageUrl: string;
  price: number;
  rating: number;
}

export interface ProductListProps {
  filterProducts: Product[];
}
