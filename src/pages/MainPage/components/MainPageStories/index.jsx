import React from "react";
import logo1 from "../../../../assets/images/s1.svg";
import { SingleStorie } from "../../../../components/ui/SingleStorie/SingleStorie";

import "./index.scss";

const MainPageStories = () => {
  let AllStories = [
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
    {
      image: logo1,
      text: "Скидки",
    },
  ];

  return (
    <div className="stories">
      {AllStories.map((item, index) => (
        <SingleStorie key={index} image={item.image} text={item.text} />
      ))}
      <SingleStorie />
    </div>
  );
};

export default MainPageStories;
