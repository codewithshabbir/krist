import React from "react";
import classnames from "classnames";
import styles from "./ButtonDark.module.css";
import { Buttons } from "@/@types/types";
import Link from "next/link";

function ButtonDark({ title, link, clickFun }: Buttons) {
  return (
    <>
      <div className={classnames(styles.buttonDark)}>
        <div className={classnames(styles.animLayer)}></div>
        {link ? (
          <Link href={link} className={classnames(styles.buttonDarkAnchor)}>
            {title}
          </Link>
        ) : (
          <button
            onClick={clickFun}
            className={classnames(styles.buttonDarkAnchor)}
          ></button>
        )}
      </div>
    </>
  );
}

export default ButtonDark;
