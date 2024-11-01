import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import classnames from "classnames";
import WishlistIcon from "./../../icons/wishlist.svg";
import CompareIcon from "./../../icons/compare.svg";
import QuickviewIcon from "./../../icons/quickview.svg";
import ButtonLight from "../Buttons/ButtonLight";

interface CardProps {
  title: string;
  imageUrl: string;
}

function Card({ title, imageUrl }: CardProps) {
  return (
    <div  className={classnames(styles.card, 'col-span-12 sm:col-span-6 lg:col-span-3 group')}>
      <Image
        className="relative z-[1]"
        src={imageUrl}
        alt={title}
        width={500}
        height={400}
      />

      <div className={classnames( styles.iconContainer, 'group-hover:opacity-100 group-hover:-translate-x-4')}>
        <a
          className={classnames(styles.iconAnchor)}
          href="#"
        >
          <WishlistIcon width={24} height={24} />
        </a>
        <a
          className={classnames(styles.iconAnchor)}
          href="#"
        >
          <CompareIcon width={24} height={24} />
        </a>
        <a
          className={classnames(styles.iconAnchor)}
          href="#"
        >
          <QuickviewIcon width={24} height={24} />
        </a>
      </div>

      <div className={classnames(styles.cardButton, 'group-hover:opacity-100 group-hover:-translate-y-2')}>
        <ButtonLight title={'Add to Cart'}/>
      </div>
    </div>
  );
}

export default Card;
