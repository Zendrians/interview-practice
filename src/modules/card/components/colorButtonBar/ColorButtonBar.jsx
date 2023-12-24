import { useContext } from "react";
import { CAP_COLOR_LIST } from "../../constants/cardConstants";
import { CapColorContext } from "../../context/capColorContext";

import "./ColotButtonBar.scss";

const ColorButtonBar = () => {
  const { setCapColor } = useContext(CapColorContext);

  return (
    <div className="color-button-bar">
      {CAP_COLOR_LIST.map((col, idx) => (
        <button
          onClick={() => {
            setCapColor(col);
          }}
          className="color-button-bar__button"
          key={idx}
        >
          {col}
        </button>
      ))}
    </div>
  );
};

export default ColorButtonBar;
