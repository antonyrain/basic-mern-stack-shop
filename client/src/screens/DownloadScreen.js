import "./DownloadScreen.css";
import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//Components
import DownloadItem from '../components/DownloadItem';


const DownloadScreen = () => {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="downloadscreen">
      <div className="downloadscreen-container">
          <h2>Checkout / Download </h2>
        <div className="downloadscreen-items">
          {cartItems.length === 0 
          ? (<div>
                Your Download page Is Empty <Link to="/">Go Back</Link>
                <p>---------------------------</p>
                <p>Please contact customer support:</p>
                <p>name@domain.com</p>
                <p>---------------------------</p>
            </div>
          ) : (cartItems.map((item) => (
              <DownloadItem 
              key={item.product}
              item={item} 
              />))
            )
          } 
        </div>
      </div>
    </div>
  );
};


export {DownloadScreen};