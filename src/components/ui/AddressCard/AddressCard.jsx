/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AddressIcon from "./AddressIcon";
import ArrowCard from "../../../assets/icons/ArrowCard";
import LocationIcon from "../../../assets/icons/location";
import TimeIcon from "../../../assets/icons/time";
import PhoneIcon from "../../../assets/icons/phoneIcon";
import "./AddressCard.scss";

const AddressCard = () => {
  return (
    <div className="address-card">
      <div className="top-side">
        <div className="top">
          <AddressIcon />
          <p className="open">
            <span>Iskender home</span>
            <span>
              <a href="#">открыть в карте</a>
            </span>
          </p>
        </div>
        <ArrowCard />
      </div>

      <div className="body-side">
        <div className="child">
          <p className="text">
            <span>
              <LocationIcon />
            </span>
            <span>Кыргызстан, г. Бишкек <br />   ул. Турусбекова A167</span>
          </p>
          <p className="text">
            <span>
              <TimeIcon />
            </span>
            <span>08:00 - 22:00</span>
          </p>
        </div>
        <div className="child">
          <p className="text">
            <span>
              <PhoneIcon />
            </span>
            <span>+996 500 345 345</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
