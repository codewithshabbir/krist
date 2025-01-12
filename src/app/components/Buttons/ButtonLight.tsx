import React from "react";
import classnames from "classnames";
import styles from "./ButtonLight.module.css";
import Link from "next/link";
import { Buttons } from "@/@types/types";

function ButtonLight({ title, link, clickFun }: Buttons) {
  return (
    <div className={classnames(styles.buttonLight)}>
      <div className={classnames(styles.animLayer)}></div>
      {link ? (
        <Link
          href={link}
          className={classnames(styles.buttonLightAnchor)}
        >
          {title}
        </Link>
      ) : (
        <button
          onClick={clickFun}
          className={classnames(styles.buttonLightAnchor)}
        >
          {title}
        </button>
      )}
    </div>
  );
}

export default ButtonLight;