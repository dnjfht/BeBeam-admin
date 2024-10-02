import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "./arrow/PrevArrow";
import NextArrow from "./arrow/NextArrow";

export default function BasicImgSlider({
  datas,
  isDots,
  isArrow = true,
  isInfinite = true,
  isAutoplay = true,
  height = "auto",
  imgRoundedStyle,
  arrowIsDark,
  arrowFontSize,
  prevArrowLocation,
  nextArrowLocation,
}) {
  var settings = {
    dots: isDots,
    arrows: isArrow,
    infinite: isInfinite,
    speed: 500,
    autoplay: isAutoplay,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <PrevArrow
        isDark={arrowIsDark}
        fontSize={arrowFontSize}
        location={prevArrowLocation}
      />
    ),
    nextArrow: (
      <NextArrow
        isDark={arrowIsDark}
        fontSize={arrowFontSize}
        location={nextArrowLocation}
      />
    ),
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        {datas?.map((data, idx) => (
          <div key={idx} className={`${height} w-full`}>
            <img
              src={data}
              alt="img"
              className={`object-cover w-full h-full ${imgRoundedStyle}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
