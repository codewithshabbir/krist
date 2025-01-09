import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import classnames from "classnames";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { LuArrowLeftRight } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import ButtonLight from "../Buttons/ButtonLight";
import { CardProps } from "@/@types/types";


function Card({ title, imageUrl, price, rating }: CardProps) {
  const renderStars = (rating: number) => {
    const totalStar = 5;
    const star = [];

    for (let i = 0; i < totalStar; i++) {
      if (rating >= i+1) {
        star.push(<FaStar key={i} className="fill-yellow-500"/>);
      }
      else if (rating > i && rating < i+1) {
        star.push(<FaStarHalfStroke key={i} className="fill-yellow-500"/>);
      }
      else{
        star.push(<CiStar key={i} className="fill-yellow-500"/>);
      }
    }

    return star;
  }

  return (
    <div>
    <div className={classnames(styles.card, 'group')}>
      <Image
        className="relative z-[1]"
        src={imageUrl}
        alt={title}
        width={500}
        height={400}
        unoptimized
      />

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
        <ButtonLight link="#" title={'Add to Cart'}/>
      </div>
    </div>
    <div className="pt-2">
      <h2>{title}</h2>
      <div className="flex pt-1 pb-2">
        {renderStars(rating)}
      </div>
      <span className="font-bold">{"$" + price}</span>
    </div>
    </div>
  );
}

export default Card;
