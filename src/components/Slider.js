import React from "react";

import Slider from "react-slick";

const SliderContent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
  };
  // TODO: Banner'a buton eklenecek
  return (
    <div className="mt-3 mb-3">
      <Slider className="slider" {...settings}>
        <div>
          <img src="https://picsum.photos/936/380?random=1" width={"100%"} />
        </div>
        <div>
          <img src="https://picsum.photos/936/380?random=1" width={"100%"} />
        </div>
        <div>
          <img src="https://picsum.photos/936/380?random=1" width={"100%"} />
        </div>
      </Slider>
    </div>
  );
};

export default SliderContent;
