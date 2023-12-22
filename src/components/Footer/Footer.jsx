import React from "react";
import Logo from "../../assets/icons/logo";

import "./Footer.scss";
import AppStoreIcon from "../../assets/icons/app-store";
import GooglePlayIcon from "../../assets/icons/google-play";
import Whatsapp from "../../assets/icons/whatsapp";
import InstagramIcon from "../../assets/icons/instagram";
import Facebook from "../../assets/icons/facebook";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="top">
          <div className="column first">
            <Logo />
            <p className="company">
              Первый отечественный бренд Iskender на рынке сантехники от
              компании ОсОО «Стройдом.кг»
            </p>
            <div className="support">
              <AppStoreIcon />
              <GooglePlayIcon />
            </div>
          </div>
          <div className="column">
            <p>
              <b>Адреса</b>
            </p>
            <p>
              <span className="gray-text">ЭлитСтрой</span>
              <span>ул. Ден-Сяопина 18/1</span>
            </p>
            <p>
              <span className="gray-text">ТааТан</span>
              <span>ул. Лермонтова 6</span>
            </p>
            <p>
              <span className="gray-text">ЭлитСтрой</span>
              <span>ул. Ден-Сяопина 18/1</span>
            </p>
          </div>
          <div className="column third">
            <p>
              <b>Компания</b>
            </p>
            <p>Каталог</p>
            <p>Избранное</p>
            <p>Личный кабинет</p>
          </div>
          <div className="column fourth">
            <p>
              <b>Контакты</b>
            </p>
            <p>
              <span className="gray-text">Email:</span>
              <span>iskender.kg@gmail.com</span>
            </p>
            <p>
              <span className="gray-text">Телефон:</span>
              <span>
                +996 (500) 000-104
                <br />
                +996 (997) 000-104
                <br />
                +996 (222) 000-104
              </span>
            </p>
            <div className="whatsapp">
            <Whatsapp />
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>© 2023 Iskender.kg - Отечественный бренд сантехники</p>
          <div className="social">
            <InstagramIcon />
            <Facebook />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
