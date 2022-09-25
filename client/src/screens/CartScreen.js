import "./CartScreen.css";
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//Components
import CartItem from '../components/CartItem';
// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";


const CartScreen = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };
    
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };
    
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems
          .reduce((price, item) => price + item.price * item.qty, 0)
          .toFixed(2);
    };

    return (
        <div className="cartscreen">
            <div className="cartscreen-left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 
                ? (<div>Your Cart Is Empty <Link to="/">Go Back</Link></div>) 
                : (cartItems.map((item) => (
                    <CartItem 
                    key={item.product}
                    item={item} 
                    qtyChangeHandler={qtyChangeHandler} 
                    removeHandler={removeFromCartHandler}
                    />))
                )}
            </div>
            <div className="cartscreen-right">
                <div className="cartscreen-info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal()}</p>
                </div>
                <div className="conteiner-button-checkout">
                    <div>
                        <Link to={"/download"}>
                            <button type="button">Proceed To Checkout / Download</button>
                        </Link>
                    </div>
                </div>
                <div className="donate-button-coffee">
                    <a href="https://www.buymeacoffee.com/theprojections" rel="noreferrer">
                        <img src={'https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'} alt={'Buy me a cofee button'} />
                    </a>
                </div>
            </div>
        </div>
    )
}


export {CartScreen}