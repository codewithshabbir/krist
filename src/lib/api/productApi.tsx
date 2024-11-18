export const fetchProductList = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};

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
