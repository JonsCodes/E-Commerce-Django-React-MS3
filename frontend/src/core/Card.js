import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper";



const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  reload = undefined,
  setReload = (f) => f,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  

  const cartTitle = product ? product.name : "Product Name";
  const cartDescription = product ? product.description : "Product Description";
  const cartPrice = product ? product.price : "Default";

  const addToCart = () => {
    if (isAuthenticated()) {
      addItemToCart(product, () => setRedirect(true));
      setShowMessage(true); // Set the state to true when the item is added to the cart
      
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);


      console.log("Added to cart");
    } else {
      console.log("Login Please!");

      {loginMessage && <div className="login-message">{loginMessage}</div>}
    }
  };
  const showAddToCart = (addToCart) => {
    return (
      addtoCart && (
        <div className="add-item">
          <button onClick={addToCart} className="ADDbtn">
            Add item
          </button>
          {showMessage && (
            <p className="added-to-cart-message show">Item added to the cart!</p>
          )}
        </div>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    console.log("showRemoveFromCart function called"); // Check if this log appears
  
    return (
      removeFromCart && (
        <div className="remove-item">
          <button
            onClick={() => {
              console.log("Remove button clicked"); // Check if this log appears
              removeItemFromCart(product.id);
              setReload(!reload);
              setShowMessage(true);
  
              // After 3 seconds, reset showMessage to hide the message
              setTimeout(() => {
                setShowMessage(false);
              }, 3000);
  
              console.log("Product removed from cart");
            }}
            className="RemoveBtn"
          >
            Remove
          </button>
          {showMessage && (
            <p className="removed-from-cart-message show">Item removed from the cart!</p>
          )}
        </div>
      )
    );
  };
  

  return (
    <div className="card-item">
      <div className="card-header">{cartTitle}</div>
      <div className="card-body">
        <ImageHelper product={product} />
        <p className="card-description">{cartDescription}</p>
        <p className="card-price">$ {cartPrice}</p>
        <div className="card-buttons">
          <div className="card-add">{showAddToCart(addToCart)}</div>
          <div className="card-remove">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
