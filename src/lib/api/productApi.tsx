import { GroupedProducts, ProductData } from "@/@types/types";

// Fetch list of products with a limit of 194
export const fetchProductList = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=194");
  const data = await response.json();
  return data.products;
};

// Fetch category list (for filters or selection)
export const fetchCategoryList = async () => {
  const response = await fetch('https://dummyjson.com/products/category-list');
  const data = await response.json();
  return data;
};

// Fetch all product categories
export const fetchCategory = async () => {
  const response = await fetch('https://dummyjson.com/products/categories');
  const data = await response.json();
  return data;
};

// Fetch products based on a selected category slug
export const fetchProductsByCategory = async (categorySLug: string) => {
  const response = await fetch(`https://dummyjson.com/products/category/${categorySLug}`);
  const data = await response.json();
  return data;
};

// Fetch all products and group them by category for optimized usage in the UI
export const fetchProductByCategoryList = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=194");
  const data = await response.json();

  // Group products by category using reduce
  const groupedProducts: GroupedProducts = data.products.reduce((acc: GroupedProducts, product: ProductData) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  // Select one product from each category for the category-based display
  const selectedProducts = Object.keys(groupedProducts).map(category => {
    const product = groupedProducts[category][0]; // Pick the first product of each category
    const categoryName = product.category.split('-') // Format category name
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

    // Create a new product array for display purposes
    const newProductArr = {
      id: product.id,
      name: categoryName,
      imageUrl: product.images[0],
      slug: product.category
    };
    return newProductArr;
  });
  
  return selectedProducts;
};

// Fetch single product details by ID
export const singleProductData = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
};