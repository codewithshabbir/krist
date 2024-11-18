'use client';
import { useEffect, useState } from "react";
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import ProductList from "../components/ProductsList/ProductList";
import { fetchCategory, fetchProductsByCategory } from "@/lib/api/productApi";

interface Categories {
  name: string;
  slug: string;
}

interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
  rating: number;
}

const Page = () => {
  const [openItems, setOpenItems] = useState<string[]>(["item-1", "item-2", "item-3", "item-4"]);
  const [category, setCategory] = useState<Categories[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  // handle filters toggle
  const handleToggle = (item: string) => {
    setOpenItems((prev) =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  // fetching category
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData = await fetchCategory();
        setCategory(categoryData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  // category on change trigger
  const handleCategoryChange = (slug: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((item) => item !== slug);
      } else {
        return [...prev, slug];
      }
    });
  };

  // category filters logic
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedCategories.length > 0) {
          const promises = selectedCategories.map((categorySlug) =>
            fetchProductsByCategory(categorySlug)
          );
          const results = await Promise.all(promises);
          const mergedProducts: Product[] = results.flatMap((result) => result.products);
          setFilterProducts(mergedProducts);
        } else {
          setFilterProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products by categories:", error);
      }
    };

    fetchData();
  }, [selectedCategories]);

  return (
    <>
      <section className="px-20 pt-14 pb-6">
        <span>Shop </span>
        <span>All Products</span>
      </section>
      <section className="px-20">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold hover:no-underline" onClick={() => handleToggle("item-1")}>
                  Product Categories
                </AccordionTrigger>
                <AccordionContent>
                  {category.length > 0 ? (
                    category.map((item, index) => (
                      <div key={index} className="items-top flex space-x-2 py-2">
                        <input
                          type="checkbox"
                          id={item.name}
                          checked={selectedCategories.includes(item.slug)}
                          onChange={() => handleCategoryChange(item.slug)}
                        />
                        <label htmlFor={item.name} className="text-sm font-medium leading-none">
                          {item.name}
                        </label>
                      </div>
                    ))
                  ) : (
                    [...Array(9)].map((_, index) => (
                      <div key={index} className="flex items-center my-2">
                        <Skeleton className="h-4 w-4" />
                        <div className="ms-2">
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                      </div>
                    ))
                  )}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold hover:no-underline" onClick={() => handleToggle("item-1")}>
                  Filter by Price
                </AccordionTrigger>
                <AccordionContent>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="col-span-9 pl-14">
            <ProductList filterProducts={filterProducts} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
