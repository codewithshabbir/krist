'use client'
import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import classnames from "classnames";
import { CiStar } from "react-icons/ci";
import { LuArrowLeftRight } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import ButtonLight from "../Buttons/ButtonLight";
import { CardProps } from "@/@types/types";
import Link from "next/link";
import StarRating from "../StarRating/StarRating";
import { useCart } from "@/app/context/CartContext";


function Card({ id, title, imageUrl, price, rating, brand }: CardProps) {

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const item:CardProps = {
      id,
      title,
      imageUrl,
      price,
      brand,
      rating
    }
    addToCart(item)
  }

  return (
    <div>
    <div className={classnames(styles.card, 'group')}>
      <Link href={`shop/${id}`}>
        <Image
          className="relative z-[1]"
          src={imageUrl}
          alt={title}
          width={500}
          height={400}
          unoptimized
        />
      </Link>

      <div className={classnames( styles.iconContainer, 'group-hover:opacity-100 group-hover:-translate-x-4')}>
        <a
          className={classnames(styles.iconAnchor)}
          href="#"
        >
          <CiStar width={24} height={24} />
        </a>
        <a
          className={classnames(styles.iconAnchor)}
          href="#"
        >
          <LuArrowLeftRight width={24} height={24} />
        </a>
        <a
          className={classnames(styles.iconAnchor)}
          href="#"
        >
          <IoEyeOutline width={24} height={24} />
        </a>
      </div>

      <div className={classnames(styles.cardButton, 'group-hover:opacity-100 group-hover:-translate-y-2')}>
        <ButtonLight clickFun={handleAddToCart} title={'Add to Cart'}/>
      </div>
    </div>
    <Link href={`shop/${id}`} className="pt-2">
      <h2>{title}</h2>
      <div className="flex pt-1 pb-2">
        <StarRating  rating={rating}/>
      </div>
      <span className="font-bold">{"$" + price}</span>
    </Link>
    </div>
  );
}

export default Card;
