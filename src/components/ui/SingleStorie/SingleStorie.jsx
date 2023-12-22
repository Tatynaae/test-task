import React from "react";

import './SingleStorie.scss'

export const SingleStorie = ({image, text}) => {
  return (
    <div className="storie">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

