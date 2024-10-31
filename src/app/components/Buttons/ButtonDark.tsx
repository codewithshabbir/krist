import React from 'react';
import classnames from "classnames";
import styles from './ButtonDark.module.css';

function ButtonDark() {
  return (
    <>
      <div className={classnames(styles.buttonDark)}>
        <div className={classnames(styles.animLayer)}></div>
        <a href="#" className={classnames(styles.buttonDarkAnchor)}>Shop Now</a>
      </div>
    </>
  );
}

export default ButtonDark;
