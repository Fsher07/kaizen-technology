import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./PromotionCard.module.css";

const PromotionCard = (props) => {
  const navigate = useNavigate();

  const navigateToPromotionDetail = () => {
    navigate(`/campaign/${props.item.SeoName}/${props.item.Id}`, {
      state: props.item,
    });
  };

  return (
    <div className={styles.container} onClick={navigateToPromotionDetail}>
      <div className={styles.cardImg}>
        <img
          className={styles.brandImg}
          src={props.item.ImageUrl}
          alt="promotion card"
        />
        <span className={styles.expDate}>{props.item.RemainingText}</span>
        <img
          className={styles.brandIcon}
          src={props.item.BrandIconUrl}
          alt="small icon"
        />
      </div>

      <h4 className={styles.title}>{props.item.Title}</h4>
      <p className={styles.cardText}>Daha Daha</p>
    </div>
  );
};

export default PromotionCard;
