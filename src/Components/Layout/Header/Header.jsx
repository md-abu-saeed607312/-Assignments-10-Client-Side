/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Header() {
  // Custom Next Arrow
  const PrevArrow = ({ onClick }) => (
    <button onClick={onClick} className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
      <MdKeyboardArrowLeft color="red" size={40} />
    </button>
  );
  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button onClick={onClick} className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
      <MdKeyboardArrowRight color="red" size={40} />
    </button>
  );
  const settings = {
    arrows: true,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:<PrevArrow/>,
    nextArrow: <NextArrow/>,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            className="w-full md:h-[534px]"
            src="https://i.ibb.co.com/9kgvCpYz/when-can-college-coaches-contact-high-school-athletes.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full md:h-[534px]"
            src="https://i.ibb.co.com/Pz4t1YLh/360-F-513761687-X4knt8r-Qc-PYwx-Md6-OOAMt-SXhozfyiy-Yl.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[534px]"
            src="https://i.ibb.co.com/yBVV54FJ/360-F-513761212-i3z6v-HUNV0b-Q8pjk-BGO3yrp-Lg8zs4m-FK.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[534px]"
            src="https://i.ibb.co.com/Pz4t1YLh/360-F-513761687-X4knt8r-Qc-PYwx-Md6-OOAMt-SXhozfyiy-Yl.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[534px]"
            src="https://i.ibb.co.com/xqq8SFgJ/360-F-286767786-bo-XM75-PDLYIs-YWzab-Z3f-Kc-M3esv50-TNS-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[534px]"
            src="https://i.ibb.co.com/xqq8SFgJ/360-F-286767786-bo-XM75-PDLYIs-YWzab-Z3f-Kc-M3esv50-TNS-1.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default Header;
