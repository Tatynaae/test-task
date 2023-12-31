import React from "react";

const Arrow = ({ next = false, ...props }) => {
  return (
    <svg
      {...props}
      style={{
        transform: next ? "rotate(0)" : "rotate(180deg)",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M18.8125 24.9L10.6625 16.75C9.7 15.7875 9.7 14.2125 10.6625 13.25L18.8125 5.10001"
        stroke="#171717"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Arrow;
