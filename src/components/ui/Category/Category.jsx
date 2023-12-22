import React from "react";
import './Category.scss'

const Category = ({image, title, price}) => {
  return (
    <div className="box">
      <p className="title-category">{title}</p>
      <p className="price">{price}</p>
      <img src={image} alt="" className="image"/>
    </div>
  );
};

export default Category;
