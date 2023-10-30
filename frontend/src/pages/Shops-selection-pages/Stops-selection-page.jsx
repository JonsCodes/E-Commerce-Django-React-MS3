import React, { useState, useEffect } from "react";
import axios from 'axios';
import './shops-selection-page.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
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
              <p>${product?.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            </div>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
