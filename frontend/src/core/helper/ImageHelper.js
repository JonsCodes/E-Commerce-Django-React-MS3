import React from "react";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? product.image
    : `/images/image-not-found.png`;
  return (
    <div >
      <img
        src={imageurl}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="card-image"
        alt="Product"
      />
    </div>
  );
};

export default ImageHelper;
