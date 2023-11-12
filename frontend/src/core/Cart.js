import React, { useState, useEffect } from "react";
import Base from "./Base";

import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import PaymentB from "./PaymentB";

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
          {products.length > 0 ? (loadAllProducts(products)) : (
            <h4 className="cartpage-message" >No products</h4>
          )}
        </div>
        <div>
          {products.length > 0
            ? (
              <PaymentB products={products} setReload={setReload} />
            )
            : (
              <h4 className="cartpage-message">Please login or add something in cart 
              <br/><br/><a href="/signin" className="LoginBtn">Login</a></h4>
            )}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
