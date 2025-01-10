'use client'
import ButtonDark from "@/app/components/Buttons/ButtonDark";
import StarRating from "@/app/components/StarRating/StarRating";
import { singleProductData } from "@/lib/api/productApi";
import { FaUndo } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProductPage = ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = React.use(params);

  const [productData, setProductData] = useState<any>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchProductData = async () => {
      const data = await singleProductData(id);
      setProductData(data);
    };
    fetchProductData();
  }, [id]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const discountAmount = productData.price * (productData.discountPercentage / 100);
  const discountedPrice = (productData.price - discountAmount).toFixed(2);

  return (
    <div className="px-10 md:px-20 lg:px-40 pt-14 pb-6">
      <div className="flex flex-wrap lg:flex-nowrap gap-10">
        <div>
          <Image
            width={800}
            height={400}
            alt={productData.title}
            src={productData.thumbnail}
            unoptimized
          />
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">{productData.brand}</h3>
            <h2 className="text-4xl font-semibold">{productData.title}</h2>
            <div className="flex items-center gap-1">
              <StarRating rating={productData.rating} />{" "}
              <span>{productData.rating}</span>{" "}
              <span>({productData.reviews.length} Reviews)</span>
            </div>
            <div>
              <span>{discountedPrice}$</span>{" "}
              <span className="text-gray-500 line-through">
                {productData.price}$
              </span>
            </div>
          </div>
          <p className="my-4">{productData.description}</p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex items-center space-x-4 border-2 border-black rounded-lg px-4 justify-center">
                <button
                  onClick={decrement}
                  className="text-black focus:outline-none"
                >
                  <FaMinus />
                </button>
                <span className="text-xl font-normal">{count}</span>
                <button
                  onClick={increment}
                  className="text-black focus:outline-none"
                >
                  <FaPlus/>
                </button>
              </div>
              <ButtonDark title="Add to Cart" link="#" />
            </div>
            <div>
              <span className="mr-2 font-semibold">Tags:</span>
              {productData.tags.map((tag: string) => (
                <span
                  className="bg-black text-white px-2 py-[0.5px] mx-1"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <span className="font-semibold">SKU: </span>
              <span className="font-medium">{productData.sku}</span>
            </div>
            <h6 className="flex items-center gap-2 font-medium">
              <FaUndo size={20} />
              {productData.returnPolicy}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;