'use client';
import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchProductList } from "@/lib/api/productApi";
import { Product, ProductListProps } from "@/@types/types";

const ProductList: React.FC<ProductListProps> = ({ filterProducts }) => {
  const [showAllProducts, setShowAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProductList();
        setShowAllProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {loading ? (
          // Skeleton loaders when loading is true
          [...Array(9)].map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="h-[280px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-4 w-[80px]" />
              </div>
            </div>
          ))
        ) : filterProducts.length === 0 ? (
          // If filterProducts is empty, show all products
          showAllProducts.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              imageUrl={item.images[0]}
              price={item.price}
              rating={item.rating}
            />
          ))
        ) : (
          // Show filtered products
          filterProducts.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              imageUrl={item.images[0]}
              price={item.price}
              rating={item.rating}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;