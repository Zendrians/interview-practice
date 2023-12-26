import { useContext, useRef } from "react";
import blackCap from "../../../../assets/black.png";
import blueCap from "../../../../assets/blue.png";
import redCap from "../../../../assets/red.png";

import "./Carousel.scss";
import { CapColorContext } from "../../context/capColorContext";
import {
  CAP_BLACK,
  CAP_BLUE,
  CAP_RED,
  CAP_COLOR_LIST,
} from "../../constants/cardConstants";

const Carousel = () => {
  const { capColor, setCapColor } = useContext(CapColorContext);

  const touchStart = useRef(null);
  const touchEnd = useRef(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      changeCarouselImg(isLeftSwipe ? "left" : "right");
    }
  };

  const changeCarouselImg = (dir) => {
    const currentInx = CAP_COLOR_LIST.indexOf(capColor);
    const newIndex = dir === "left" ? currentInx + 1 : currentInx - 1;

    if (newIndex > CAP_COLOR_LIST.length - 1) {
      setCapColor(CAP_COLOR_LIST[0]);
    } else if (newIndex < 0) {
      setCapColor(CAP_COLOR_LIST[CAP_COLOR_LIST.length - 1]);
    } else {
      setCapColor(CAP_COLOR_LIST[newIndex]);
    }
  };

  const getColorSource = () => {
    switch (capColor) {
      case CAP_BLUE:
        return blueCap;
      case CAP_BLACK:
        return blackCap;
      case CAP_RED:
        return redCap;
      default:
        return blackCap;
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__img-container">
        <img
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="carousel__img"
          src={getColorSource()}
          alt="Black cap"
        />
      </div>
      <div className="carousel__nav-container">
        {CAP_COLOR_LIST.map((col, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCapColor(col);
            }}
            className={`carousel__button ${
              col === capColor ? "carousel__button--active" : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
