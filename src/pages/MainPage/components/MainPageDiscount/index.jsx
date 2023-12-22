import React from "react";
import Slider from "react-slick";
import HitSoldImage from "../../../../assets/images/hit.png";
import Arrow from "../../../../assets/icons/arrow";
import HitSold from "../../../../components/ui/HitSold/HitSold";

const MainPageDiscount = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <Arrow onClick={onClick} className={className} />;
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <Arrow onClick={onClick} className={className} next />;
  }

  const settings = {
    className: ".hit-sold",
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  let AllHitSoldGoods = [
    {
      image: HitSoldImage,
      decription: "Держатель для лейки BOOU PG605 ",
      price: "1294 с",
      quantity: 1,
    },
    {
      image: HitSoldImage,
      decription: "Держатель для лейки BOOU PG605 ",
      price: "1294 с",
      quantity: 1,
    },
    {
      image: HitSoldImage,
      decription: "Держатель для лейки BOOU PG605 ",
      price: "1294 с",
      quantity: 1,
    },
    {
      image: HitSoldImage,
      decription: "Держатель для лейки BOOU PG605 ",
      price: "1294 с",
      quantity: 1,
    },
    {
      image: HitSoldImage,
      decription: "Держатель для лейки BOOU PG605 ",
      price: "1294 с",
      quantity: 1,
    },

    {
      image: HitSoldImage,
      decription: "Держатель для лейки BOOU PG605 ",
      price: "1294 с",
      quantity: 1,
    },
    {
      image: HitSoldImage,
      decription: "Держатель для лейки BOOU PG605 ",
      price: "1294 с",
      quantity: 1,
    },
  ];
  return (
    <Slider {...settings}>
      {AllHitSoldGoods.map((el, idx) => (
        <HitSold
          key={idx}
          image={el.image}
          decription={el.decription}
          price={el.price}
          quantity={el.quantity}
        />
      ))}
    </Slider>
  );
};

export default MainPageDiscount;
