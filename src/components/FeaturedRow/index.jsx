import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

import styles from "./FeaturedRow.module.css";
import PromotionCard from "../PromotionCard";

const FeaturedRow = () => {
  const [thumbs, setThumbs] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    //  fetch data with axios
    const headers = {
      headers: {
        "X-Country-Id": "TR",
        "X-Language-Id": "TR",
      },
    };
    axios.get("https://api.extrazone.com/tags/list", headers).then((res) => {
      console.log(res.data);
      setThumbs(res.data);
    });
    axios
      .get("https://api.extrazone.com/promotions/list?Channel=PWA", headers)
      .then((res) => {
        setBrands(res.data);
      });
  }, []);
  return (
    <div>
      <Carousel
        showStatus={false}
        showArrows={false}
        centerSlidePercentage={90}
        className={styles.container}
        centerMode={true}
        renderThumbs={() =>
          thumbs.map((item, index) => (
            <div className={styles.tagContainer} key={item.Id}>
              <img src={item.IconUrl} alt="card icon" />
              <p>{item.Name}</p>
            </div>
          ))
        }
        renderIndicator={(onClickHandler, isSelected, index) => {
          const style = isSelected
            ? {
                background: "green",
                width: "20px",
                borderRadius: "4px",
                opacity: "1",
              }
            : {};
          return (
            <span
              className={styles.dot}
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}></span>
          );
        }}>
        {brands.map((item, index) => (
          <PromotionCard key={item.Id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedRow;
