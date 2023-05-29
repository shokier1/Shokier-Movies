import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
    <Slider {...settings}>
      <div>
        <img src={require("../images /slide images/2.jpg")} className='w-100' alt="" />
      </div>
      <div>
      <img src={require("../images /slide images/1.jpg")} className='w-100' alt="" />
      </div>
      <div>
      <img src={require("../images /slide images/3.jpg")} className='w-100' alt="" />
      </div>
    </Slider>
  </div>
);
}


export default Slide