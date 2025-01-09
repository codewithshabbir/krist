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
  // Fetch data from API
  const response = await fetch("https://dummyjson.com/products?limit=194");
  const data = await response.json();

  // Group products by category
  const groupedProducts = data.products.reduce((acc:any, product:any) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  // Now select one product from each category (you can customize this logic if needed)
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

  // Return the selected products
  return selectedProducts;
};

