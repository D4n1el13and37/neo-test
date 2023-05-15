import React from "react";
import images from "../../constants/images";
import "./Card.css";

export default function Card({ data }) {
  const { img, title, price, rate } = data;
  //   console.log(data);
  return (
    <>
      <div className="otec">
        <div className="shop__section-item_image">
          <img src={img} alt="" />
        </div>
        <div className="shop__section-item_info">
          <div className="shop__section-item_info-subtitle">
            <h4>{title}</h4>
          </div>
          <div className="shop__section-item_info-price">
            <span>{price}</span>
          </div>
          <div className="shop__section-item_info-rating">
            <img src={images.star} alt="rating" />
            <span>{rate}</span>
          </div>
          <div className="shop__section-item_info-buy">
            <button>Купить</button>
          </div>
        </div>
      </div>
    </>
  );
}
