/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/icons/logo";
import Button from "../ui/Button/Button";
import CatalogIcon from "../../assets/icons/catalog";
import SearchIcon from "../../assets/icons/search";
import ProfileIcon from "../../assets/icons/profile";
import BasketIcon from "../../assets/icons/basket";
import "./Header.scss";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <Logo />
        <Button className={"catalog-btn"}>
          <CatalogIcon />
          <span>Каталог</span>
        </Button>
        <div className="search">
          <SearchIcon />
          <input type="search" placeholder="Поиск" />
          <p>42903</p>
        </div>
        <div className="welcome">
          <p className="welcome-text">Добро пожаловать</p>
          <p className="enter">
            <a href="#">Вход/</a>
            <a href="#">Регистрация</a>
          </p>
        </div>

        <div className="right-side">
          <Button className="profile">
            <ProfileIcon />
          </Button>
          <div className="line"></div>
          <Button className="basket">
            <BasketIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
