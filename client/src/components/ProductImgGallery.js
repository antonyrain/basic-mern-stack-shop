import "./ProductImgGallery.css";
import React from 'react';
import { useState } from "react";


const ProductImgGallery = ({ image1, image2, image3, image4, image5 }) => {
  const images = [
    `/images/${image1}`,
    `/images/${image2}`,
    `/images/${image3}`,
    `/images/${image4}`,
    `/images/${image5}`,
  ]
  const [img, setImg] = useState(images[0]);
  const hoverHandler = (image) => {setImg(image);};

    return (
        <div className="gallery-container">
          <div className="block-1">
            <img src={img} alt="product name"/>
          </div>
          <div className="block-2">
            <div className="inside-block-2">
            {
                images.map((image, index) => (
                  <div 
                    className="img-wrap" 
                    key={index}
                    onMouseOver={() => hoverHandler(image, index)}
                  >
                    <img src={image} alt="product name"/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    );
  };
  
  
  export default ProductImgGallery ;