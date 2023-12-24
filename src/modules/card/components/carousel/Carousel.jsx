import { useContext } from "react";
import blackCap from "../../../../assets/black.png";
import blueCap from "../../../../assets/blue.png";
import redCap from "../../../../assets/red.png";
import cartIcon from "../../../../assets/cart.png";

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
        <img className="carousel__img" src={getColorSource()} alt="Black cap" />
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
      <div className="carousel__cart-container">
        <img className="carousel__cart-img" src={cartIcon} alt="Cart" />
        <div className="carousel__bubble">
        <span>1</span>
      </div>
      </div>
      
    </div>
  );
};

export default Carousel;
