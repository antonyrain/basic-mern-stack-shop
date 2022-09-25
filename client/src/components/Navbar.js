import './Navbar.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
//Components
import Submenu from "../components/Submenu";


const Navbar = ({ click }) => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const [isSubmenu, setSubmenu] = useState (false)
    const toggleDropdown = () => setSubmenu(!isSubmenu);

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const navLinkStyles = ({isActive}) => {
        return { boxShadow: isActive ? "var(--button-shadow-active)" : "var(--button-shadow)" }
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to={"/"}>
                    <div className='dimond'></div>
                </NavLink>
            </div>
                <div className='container-all-links'>
                    <div className='container-navbar-links-1'>
                        <ul className="navbar-links">
                            <li>
                                <NavLink style={navLinkStyles} to={"/"} className='nav-category-link'>
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <div onClick = {()=>toggleDropdown()} style={{boxShadow: isSubmenu ? "var(--button-shadow-active)" : "var(--button-shadow)"}} className='nav-category-link navbar-dropdown'>
                                    <p>Categories</p>
                                    {isSubmenu && <Submenu />}
                                </div>
                            </li>
                            <li>
                                <NavLink style={navLinkStyles} to={"/about"} className='nav-category-link'>
                                    About us
                                </NavLink>
                            </li>
                        <li> 
                            <NavLink style={navLinkStyles} to={"/cart"} className='cart-link'>
                            <i className='fas fa-shopping-cart'></i>
                                Cart
                                <span className='cartlogo-badge'>{getCartCount()}</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='hamburger-menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}


export default Navbar