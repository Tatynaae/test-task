import React from "react";
import './NewsCard.scss'

const NewsCard = ({ card }) => {
  return (
    <div className="news-card">
      <div>
        <h2 className="discount">-50%</h2>
        <p className="title">На кухонную мебель </p>
        <button className="more-btn">Подробнее</button>
      </div>
      <div>
        <img src={card} alt="" />
      </div>
    </div>
  );
};

export default NewsCard;
