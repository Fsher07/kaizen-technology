import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./PromotionDetail.module.css";
import backButton from "../../assets/back_button.png";

const PromotionDetail = () => {
  const location = useLocation();
  const [promotion, setPromotion] = useState([]);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  useEffect(() => {
    const headers = {
      headers: {
        "X-Country-Id": "TR",
        "X-Language-Id": "TR",
      },
    };
    axios
      .get(
        `https://api.extrazone.com/promotions?Id=${location.state.Id}`,
        headers
      )
      .then((res) => {
        setPromotion(res.data);
      });
  }, [location.state.Id]);
  return (
    <div className={styles.container}>
      <div className={styles.cardImg}>
        <button className={styles.backButton} onClick={navigateToHome}>
          <img src={backButton} alt="back button" />
        </button>
        <img
          className={styles.brandImg}
          src={location.state.ImageUrl}
          alt="promotion"
        />
        <img
          className={styles.brandIcon}
          src={location.state.BrandIconUrl}
          alt="brand icon"
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{promotion.Title}</h1>
        <p>{promotion.Description}</p>
      </div>
      <button className={styles.button}>Hemen Katıl</button>
    </div>
  );
};

export default PromotionDetail;
