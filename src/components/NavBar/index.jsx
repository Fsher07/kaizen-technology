import React from "react";

import compass from "../../assets/compass.png";
import star from "../../assets/star.png";
import plus from "../../assets/plus_vector.png"
import styles from "./NavBar.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columns}>
        <img src={compass} alt="compass" />
        <p className={styles.columnText}>KEŞFET</p>
      </div>

      <div className={styles.columns}>
        <img className={styles.plusIcon} src={plus} alt="home icon" />
      </div>

      <div className={styles.columns}>
        <img className={styles.star} src={star} alt="star" />
        <p id={styles.starText} className={styles.columnText}>DAHA CÜZDAN</p>
      </div>
    </div>
  );
};

export default index;
