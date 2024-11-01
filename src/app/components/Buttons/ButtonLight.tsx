import React from 'react';
import classnames from "classnames";
import styles from './ButtonLight.module.css';

interface ButtonLightProps {
    title: string;
}

function ButtonLight({title}:ButtonLightProps) {
  return (
    <>
      <div className={classnames(styles.buttonLight)}>
        <div className={classnames(styles.animLayer)}></div>
        <a href="#" className={classnames(styles.buttonLightAnchor)}>{title}</a>
      </div>
    </>
  );
}

export default ButtonLight;