import './CartItem.css';
import React from 'react';
import { Link } from 'react-router-dom';


const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    return (
        <div className = "cartitem">
            <div className="cartitem-image">
                <img src={`/images/${ item.image1 }`} alt={item.name} />
            </div>
            <Link to={`/product/${ item.product }`} className="cartitem-name">
                <p>{item.name}</p>
            </Link>
            <p className="cartiten-price">${item.price}</p>
                <select
                    value={item.qty}
                    onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
                    className="cartItem-select"
                >
                    {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                        {x + 1}
                    </option>
                    ))}
                </select>
            <button
                className="cartItem-deleteBtn"
                onClick={() => removeHandler(item.product)}
            >
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
};


export default CartItem;