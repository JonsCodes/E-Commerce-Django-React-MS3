import React, { useState, useEffect } from "react";
import axios from 'axios';
import './shops-selection-page.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Initialize an empty cart
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/product/');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to handle adding items to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="shop">
      <h1>Wise Guy Collections</h1>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product?.image} alt={product?.name} />
            <div className="description">
              <p>
                <b>{product?.name}</b>
              </p>
              <p>{product?.description}</p>
              <p>{Number(product?.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            </div>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map(cartItem => (
            <li key={cartItem.id}>{cartItem.name}</li>
          ))}
        </ul>
        <p>Total: {calculateTotal(cart).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      </div>
    </div>
  );
}

// Function to calculate the total price of items in the cart
function calculateTotal(cart) {
  return cart.reduce((total, cartItem) => total + Number(cartItem.price), 0);
}

export default Shop;


