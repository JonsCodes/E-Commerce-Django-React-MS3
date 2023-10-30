import React from "react";
import { useShop } from "../../contexts/shop-context";
import "./cart.css";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useShop(); // Use the useShop hook

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {Object.keys(cartItems).map((itemId) => {
            const item = cartItems[itemId];
            return (
              <li key={itemId}>
                <span>{item.name}</span>
                <button onClick={() => removeFromCart(itemId)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(itemId, item.name)}>+</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cart;
