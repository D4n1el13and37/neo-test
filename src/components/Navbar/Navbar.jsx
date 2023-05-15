import React, { useState } from "react";
import images from "../../constants/images";

import "./Navbar.css";

export default function Navbar() {
  // const [likedProduct, setLikedProduct] = useState();
  // const [itemsInCart, setItemsInCart] = useState();

  return (
    <nav className="shop__navbar">
      <div className="shop__navbar-logo">
        <a href="#">
          <img src={images.logo} alt="logo" />
        </a>
      </div>
      <div className="shop__navbar-icons">
        <a href="#">
          <img src={images.liked} alt="liked" />
        </a>
        <a href="">
          <img src={images.basket} alt="basket" />
        </a>
      </div>
    </nav>
  );
}
