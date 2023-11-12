import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper"; // Import your authentication helper

import Base from "./Base";
import Card from "./Card";
import PaymentB from "./PaymentB";
import { loadCart } from "./helper/cartHelper";

const Cart = () => {
  const [reload, setReload] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div className="cart-item">
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            reload={reload}
            setReload={setReload}
          />
        ))}
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div>
        <h1>Checkout</h1>
      </div>
    );
  };

  return (
    <Base title="Cart page" description="Welcome to checkout">
      <div className="cartPage">
        <div>
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h4 className="cartpage-message">No products</h4>
          )}
        </div>
        <div>
          {isAuthenticated() ? (
            products.length > 0 ? (
              <PaymentB products={products} setReload={setReload} />
            ) : (
              <h4 className="cartpage-message">Please add something to the cart</h4>
            )
          ) : (
            <h4 className="cartpage-message">
              Please login or add something in the cart
              <br />
              <br />
              <a href="/signin" className="LoginBtn">
                Login
              </a>
            </h4>
          )}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
