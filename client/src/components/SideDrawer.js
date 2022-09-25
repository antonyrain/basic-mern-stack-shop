import "./SideDrawer.css";
import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const SideDrawer = ({ show, click }) => {
    const sideDrawerClass = ["sidedrawer"];

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    if (show) {sideDrawerClass.push("show");}

    const navLinkStyles = ({isActive}) => {
        return { boxShadow: isActive
            ? "var(--button-shadow-active)" 
            : "var(--button-shadow-focus)" 
        }
    }
    
    return (
        <div className={sideDrawerClass.join(" ")}>
            <div className="container">
                <ul className="sidedrawer-links" onClick={click}>
                    <li>
                        <NavLink style={navLinkStyles} className='side-cart-link' to="/cart">
                            <i className="fas fa-shopping-cart"></i>
                            Cart <span className='sidedrawer-badge'>{getCartCount()}</span>
                        </NavLink>
                    </li>
                </ul>
                <ul className="sidedrawer-links-2" onClick={click}>
                    <li>
                        <NavLink style={navLinkStyles} to="/" >
                            Products
                        </NavLink>
                    </li>
                </ul>
                <div className="container-sidedrawer-links-3">
                    <ul className="sidedrawer-links-3" onClick={click}>
                        <li>
                            <NavLink style={navLinkStyles} to="/category-1" >
                                category 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={navLinkStyles} to="/category-2">
                                category 2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={navLinkStyles} to="/category-3">
                                category 3
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={navLinkStyles} to="/category-4" className='category-link'>
                                category 4
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={navLinkStyles} to="/category-5" className='category-link'>
                                category 5
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <ul className="sidedrawer-links-4" onClick={click}>
                    <li>
                        <NavLink style={navLinkStyles} to="/about" >
                            About us
                        </NavLink>
                    </li>
                </ul>
                <div className="container-sidedrawer-links-5">
                    <ul className="sidedrawer-links-5" onClick={click}>
                        <li>
                            <a href="https://www.fiverr.com/antonyrain/do-mern-application-for-you" target={"blanc"}><button className="side-button-external-link">F</button></a>
                        </li>
                        <li>
                            <a href="https://www.antonyrain.com/" target={"blanc"}><button className="side-button-external-link">A</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};


export default SideDrawer