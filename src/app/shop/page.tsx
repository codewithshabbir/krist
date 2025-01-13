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
import { Categories, Product } from "@/@types/types";

const Page = () => {
  // State to manage opened accordion items
  const [openItems, setOpenItems] = useState<string[]>(["item-1", "item-2", "item-3", "item-4"]);

  // State to store category data
  const [category, setCategory] = useState<Categories[]>([]);

  // State to track selected categories for filtering products
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // State to store filtered products based on selected categories
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  // Handle toggle logic for the accordion filters
  const handleToggle = (item: string) => {
    setOpenItems((prev) =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  // Fetch categories when the component is mounted
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

  // Handle category selection and update selectedCategories state
  const handleCategoryChange = (slug: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((item) => item !== slug); // Deselect category
      } else {
        return [...prev, slug]; // Select category
      }
    });
  };

  // Fetch products based on selected categories whenever selectedCategories changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedCategories.length > 0) {
          const promises = selectedCategories.map((categorySlug) =>
            fetchProductsByCategory(categorySlug)
          );
          const results = await Promise.all(promises);
          const mergedProducts: Product[] = results.flatMap((result) => result.products); // Merging results from all selected categories
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
              {/* Accordion Item for Product Categories */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold hover:no-underline" onClick={() => handleToggle("item-1")}>
                  Product Categories
                </AccordionTrigger>
                <AccordionContent>
                  {category.length > 0 ? (
                    category.map((item, index) => (
                      <div key={index} className="items-top flex space-x-2 py-2">
                        {/* Checkbox to select/deselect categories */}
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
                        {/* Skeleton loaders for loading categories */}
                        <Skeleton className="h-4 w-4" />
                        <div className="ms-2">
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                      </div>
                    ))
                  )}
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item for Price Filter (currently not implemented) */}
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
            {/* Display filtered products */}
            <ProductList filterProducts={filterProducts} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;