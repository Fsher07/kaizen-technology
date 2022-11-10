import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

import styles from "./FeaturedRow.module.css";
import PromotionCard from "../PromotionCard";
import searchLogo from "../../assets/search_logo.png";

const FeaturedRow = () => {
  const [search, setSearch] = useState("");
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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchBrand = (e) => {
    if (e.key === "Enter") {
      setThumbs(
        thumbs.filter((brand) => {
          return brand.Name.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
  };

  return (
    <div>
      <div className={styles.searchContainer}>
        <span>
          <img src={searchLogo} alt="searcher" />
        </span>
        <input
          type="text"
          placeholder="Fırsat Bul"
          onChange={handleSearch}
          onKeyDown={searchBrand}
        />
      </div>
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
