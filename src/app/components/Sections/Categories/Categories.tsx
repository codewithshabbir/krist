"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { fetchProductByCategoryList } from "@/lib/api/productApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classnames from "classnames";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import styles from "@/app/components/Buttons/ButtonLight.module.css";
import { CategoryItem } from "@/@types/types";
import { Skeleton } from "@/components/ui/skeleton";

const Categories = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [categoryList, setCategoryList] = useState<CategoryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await fetchProductByCategoryList();
        setCategoryList(categories);
        console.log(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Extra small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="categories-section">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl font-semibold">Shop by Categories</h2>
        <div className="flex items-center">
          <FaArrowLeftLong
            onClick={() => sliderRef.current?.slickPrev()}
            className="text-xl cursor-pointer"
          />
          <FaArrowRightLong
            onClick={() => sliderRef.current?.slickNext()}
            className="text-xl ml-2 cursor-pointer"
          />
        </div>
      </div>

      {/* Slider */}
      <div className="pt-5">
        <Slider {...settings} ref={sliderRef}>
          {categoryList && categoryList.length > 0
            ? categoryList.map((category) => (
                <div key={category.id} className="px-2">
                  <div className="bg-gray-100 flex items-center w-full rounded-lg relative overflow-hidden h-[300px]">
                    <h3 className="absolute left-6 top-1 text-gray-200 text-6xl font-bold whitespace-nowrap">
                      {category.name}
                    </h3>
                    <Image
                      className="relative z-[1] h-[300px]"
                      src={`${category.imageUrl}`}
                      alt={category.name}
                      width={500}
                      height={100}
                      layout="responsive"
                    />
                    <div className="absolute bottom-3 z-10 w-4/5 left-[1.7rem]">
                      <div className={classnames(styles.buttonLight)}>
                        <div className={classnames(styles.animLayer)}></div>
                        <a
                          href="/shop"
                          className={classnames(styles.buttonLightAnchor)}
                        >
                          Show All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : [...Array(4)].map((_, index) => (
                <div key={index} className="px-2">
                  <Skeleton className="h-[300px] w-full rounded-lg" />
                </div>
              ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;