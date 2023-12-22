import React from "react";
import MinusIcon from "../../../assets/icons/minus";
import PlusIcon from "../../../assets/icons/plus";
import HeartIcon from "../../../assets/icons/heart";
import "./HitSold.scss";

const HitSold = ({ image, decription, price, quantity }) => {
  const [quant, setQuant] = React.useState(quantity);
  const increment = () => {
    setQuant(quant + 1);
  };

  const decrement = () => {
    if (quant > 0) setQuant(quant - 1);
  };

  return (
    <div className="card">
      <div className="img">
        <img src={image} alt="" />
        <div className="heart">
            <HeartIcon />
        </div>
      </div>
      <p className="desc">{decription}</p>
      <p className="price">{price}</p>
      <p className="secondary">В наличии</p>
      <ul className="ul">
        <li>Комплект</li>
      </ul>
      <div className="buttons">
        <button className="q-btn" onClick={decrement}>
          <MinusIcon />
        </button>
        <span>{quant}</span>
        <button className="q-btn" onClick={increment}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default HitSold;
