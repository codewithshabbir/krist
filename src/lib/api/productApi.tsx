import { GroupedProducts, ProductData } from "@/@types/types";

export const fetchProductList = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=194");
  const data = await response.json();
  return data.products;
};

export const fetchCategoryList = async () => {
  const response = await fetch('https://dummyjson.com/products/category-list');
  const data = await response.json();
  return data;
}

export const fetchCategory = async () => {
  const response = await fetch('https://dummyjson.com/products/categories');
  const data = await response.json();
  return data;
}

export const fetchProductsByCategory = async (categorySLug:string) => {
  const response = await fetch(`https://dummyjson.com/products/category/${categorySLug}`);
  const data = await response.json();
  return data;
}

export const fetchProductByCategoryList = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=194");
  const data = await response.json();

  // Group products by category
  const groupedProducts:GroupedProducts = data.products.reduce((acc:GroupedProducts, product:ProductData) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  // select one product from each category
  const selectedProducts = Object.keys(groupedProducts).map(category => {
    const product = groupedProducts[category][0];
    const categoryName = product.category.split('-').map((word:string)=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    const newProductArr = 
      {
        id: product.id,
        name: categoryName,
        imageUrl: product.images[0],
        slug: product.category
      }
    return newProductArr;
  });
  
  return selectedProducts;
};

export const singleProductData = async (id:number) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
}