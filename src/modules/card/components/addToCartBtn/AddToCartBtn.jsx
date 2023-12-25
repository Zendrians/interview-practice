import { useContext } from "react";
import "./AddToCartBtn.scss";
import { DialogContext } from "../../context/dialogContext";

const AddToCartBtn = () => {
  const { setIsOpen } = useContext(DialogContext);

  return (
    <div className="add-to-cart-btn">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="add-to-cart-btn__btn"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
