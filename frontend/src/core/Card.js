import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  reload = undefined,
  setReload = (f) => f,
  // function(f){return f}
}) => {
  const [redirect, setRedirect] = useState(false);

  const cartTitle = product ? product.name : "Product Name";
  const cartDescription = product ? product.description : "Product Description";
  const cartPrice = product ? product.price : "Default";

  const addToCart = () => {
    if (isAuthenticated()) {
      addItemToCart(product, () => setRedirect(true));
      console.log("Added to cart");
    } else {
      console.log("Login Please!");
    }
  };

  const getAredirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addToCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            //TODO: handle this too
            removeItemFromCart(product.id);
            setReload(!reload);

            console.log("Product removed from cart");
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  return (
    <div className="card-item">
      <div className="card-header">{cartTitle}</div>
      <div className="card-body">
        {getAredirect(redirect)}
        <ImageHelper product={product}/>
        <p className="card-description">
          {cartDescription}
        </p>
        <p className="card-price">$ {cartPrice}</p>
        <div className="card-price">
          <div className="card-add">
            {showAddToCart(addToCart)}
          </div>
          <div className="card-remove">
            {showRemoveFromCart(removeFromCart)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
