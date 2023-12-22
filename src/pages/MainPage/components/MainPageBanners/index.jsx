import React from "react";
import Slider from "react-slick";
import Arrow from "../../../../assets/icons/arrow";
import banner from "../../../../assets/images/banner.svg";
import NewsCard from "../../../../components/ui/NewsCard/NewsCard";
import "./index.scss";

const MainPageBanners = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <Arrow onClick={onClick} className={className} />;
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <Arrow onClick={onClick} className={className} next />;
  }
  const settingsSecond = {
    className: "news",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  let AllBanners = [banner, banner, banner, banner, banner, banner];
  return (
    <Slider {...settingsSecond}>
      {AllBanners.map((el, idx) => (
        <NewsCard card={el} key={idx} />
      ))}
    </Slider>
  );
};

export default MainPageBanners;
