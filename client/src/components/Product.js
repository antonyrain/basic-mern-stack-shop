import "./Product.css";
import React from 'react';
import { Link } from "react-router-dom";


const Product = ({ image1, description, price, name, productId }) => {
  return (
    <div className="product">
        <div className="product-img">
          <Link to={`/product/${productId}`}>
            <img src={`/images/${image1}`} alt={name} />
          </Link>
        </div>
        <div className="product-info">
          <p className="info-name">{name}</p>
          <p className="info-description">{description.substring(0, 30)} ...</p>
          <p className="info-price">${price}</p>
          <Link to={`/product/${productId}`} className="info-button">
              View
          </Link>
        </div>
    </div>
  );
};


export default Product;

