import React from "react";

import image from "../../../../assets/images/vanna.png";
import image1 from "../../../../assets/images/kran.png";
import image2 from "../../../../assets/images/rakovina.png";
import image3 from "../../../../assets/images/Унитазы.png";
import image4 from "../../../../assets/images/rectangle-39467 6.png";
import Category from "../../../../components/ui/Category/Category";

import "./index.scss";

const MainPageCategories = () => {
  let AllCategories = [
    {
      image: image,
      title: "Ванны",
      price: "3000 товаров",
    },
    {
      image: image1,
      title: "Смесители",
      price: "3000 товаров",
    },
    {
      image: image2,
      title: "Умывальники",
      price: "3000 товаров",
    },
    {
      image: image3,
      title: "Унитазы",
      price: "3000 товаров",
    },
    {
      image: image4,
      title: "Вытяжки для кухни",
      price: "3000 товаров",
    },
    {
      image: image,
      title: "Ванны",
      price: "3000 товаров",
    },
    {
      image: image1,
      title: "Смесители",
      price: "3000 товаров",
    },
    {
      image: image2,
      title: "Умывальники",
      price: "3000 товаров",
    },
    {
      image: image3,
      title: "Унитазы",
      price: "3000 товаров",
    },
    {
      image: image4,
      title: "Вытяжки для кухни",
      price: "3000 товаров",
    },
    {
      image: image,
      title: "Ванны",
      price: "3000 товаров",
    },
    {
      image: image1,
      title: "Смесители",
      price: "3000 товаров",
    },
    {
      image: image3,
      title: "Унитазы",
      price: "3000 товаров",
    },
    {
      image: image4,
      title: "Вытяжки для кухни",
      price: "3000 товаров",
    },
  ];
  return (
    <div className="categories">
      {AllCategories.map((category, index) => (
        <Category
          key={index}
          image={category.image}
          title={category.title}
          price={category.price}
        />
      ))}
    </div>
  );
};

export default MainPageCategories;
