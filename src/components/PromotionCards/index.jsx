import React, { useEffect, useState } from "react";
import axios from "axios";
import PromotionCard from "../PromotionCard";

const PromotionCards = () => {
  const [brands, setBrands] = useState([]);
  const headers = {
    headers: {
      "X-Country-Id": "TR",
      "X-Language-Id": "TR",
    },
  };
  useEffect(() => {
    //  fetch data with axios
  }, []);

  return (
    <>
      {brands.map((item, index) => (
        <PromotionCard key={item.Id} item={item} />
      ))}
    </>
  );
};

export default PromotionCards;
