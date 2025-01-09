import React from 'react';
import classnames from "classnames";
import styles from './ButtonDark.module.css';
import { Buttons } from '@/@types/types';

function ButtonDark({title, link}:Buttons) {
  return (
    <>
      <div className={classnames(styles.buttonDark)}>
        <div className={classnames(styles.animLayer)}></div>
        <a href={link} className={classnames(styles.buttonDarkAnchor)}>{title}</a>
      </div>
    </>
  );
}

export default ButtonDark;
