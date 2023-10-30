import React from "react";
import "./cart-page.css";

const CartPage = ({ cart, calculateTotal }) => {
  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <ul className="cart-items">
        {cart.map(cartItem => (
          <li key={cartItem.id}>
            {cartItem.name} -{" "}
            {cartItem.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })}
          </li>
        ))}
      </ul>
      <p className="cart-total">
        Total:{" "}
        {calculateTotal(cart).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
      </p>
    </div>
  );
};

export default CartPage;

