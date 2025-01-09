import React from "react";
import classnames from "classnames";
import styles from "./ButtonLight.module.css";
import { Buttons } from "@/@types/types";

function ButtonLight({ title, link }: Buttons) {
  return (
    <div className={classnames(styles.buttonLight)}>
      <div className={classnames(styles.animLayer)}></div>
      <a href={link} className={classnames(styles.buttonLightAnchor)}>
        {title}
      </a>
    </div>
  );
}

export default ButtonLight;
