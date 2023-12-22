/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AddressCard from "../../components/ui/AddressCard/AddressCard";

import MainPageStories from "./components/MainPageStories";
import MainPageCategories from "./components/MainPageCategories";
import MainPageHit from "./components/MainPageHit";
import MainPageBanners from "./components/MainPageBanners";
import MainPageDiscount from "./components/MainPageDiscount";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <section className="main">
      <div className="container">
        <MainPageStories />

        <p className="title">Категории</p>
        <MainPageCategories />

        <div className="title-link">
          <p className="title">Хиты продаж</p>
          <a href="#" className="link">
            перейти в каталог
          </a>
        </div>
        <MainPageHit />

        <div className="title-link">
          <p className="title">Новости</p>
          <a href="#" className="link">
            все
          </a>
        </div>

        <MainPageBanners />

        <div className="title-link">
          <p className="title">Аукционные товары</p>
          <a href="#" className="link">
            перейти в каталог
          </a>
        </div>
        <MainPageDiscount />

        <p className="title">Адреса магазинов</p>
        <div className="address-cards">
          <AddressCard />
          <AddressCard />
          <AddressCard />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
