import cartIcon from "../../../../assets/cart.png";
import "./Cart.scss";

const Cart = ({ productCount }) => {
  return (
    <div className="cart">
      <img className="cart__img" src={cartIcon} alt="Cart" />
      <div className="cart__bubble">
        <span data-testid="a2c-counter">{productCount}</span>
      </div>
    </div>
  );
};

export default Cart;
