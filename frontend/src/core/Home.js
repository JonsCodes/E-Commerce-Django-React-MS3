import React, { useState, useEffect } from "react";

import { getProducts } from "./helper/coreapicalls";
import Base from "./Base";

import "../styles.css";
import Card from "./Card";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setProducts(data);
        }
      });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Base title="Shop Page" description="Welcome to Wise Guy Colletions Shop">
      <h1 className="shop-title">Wise Guy Shop</h1>
      <div className="shop">
        {products.map((product, index) => {
          return (
            <div key={index} className="shop-item">
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </Base>
  );
}
