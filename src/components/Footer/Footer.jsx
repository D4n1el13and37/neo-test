import React from "react";
import images from "../../constants/images";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="shop__footer">
      <ul className="shop__footer-list">
        <li>
          <img src={images.logo} alt="logo" />
        </li>
        <li>
          <nav className="shop__footer-navigation">
            <ul>
              <li>
                <a href="#">Избранное</a>
              </li>
              <li>
                <a href="#">Корзина</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
        </li>
        <li>
          <div className="shop__footer-terms">
            <span>Условия сервиса</span>
            <ul className="shop__footer-language">
              <li>
                <img src={images.world} alt="language" />
              </li>
              <li>Рус</li>
              <li>Eng</li>
            </ul>
          </div>
        </li>
        <li>
          <ul className="shop__footer-item_social-list">
            <li>
              <img src={images.socialVK} alt="social_VK" />
            </li>
            <li>
              <img src={images.socialTelegram} alt="social_Telegram" />
            </li>
            <li>
              <img src={images.socialWhatsApp} alt="social_WhatsApp" />
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}
