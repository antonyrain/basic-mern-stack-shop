import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <nav className="footer">
            <div className='footer-block-1'>
                <ul className="footer-links">
                    <li>
                        <Link to="/about" className='footer-company-link'>
                            Information
                        </Link>
                    </li>
                    <li>
                        <Link to="/solutions" className='footer-knowledge-link'>
                            Use cases
                        </Link>
                    </li>
                    <li>
                        <Link to="/license" className='footer-license-link'>
                            Product License
                        </Link>
                    </li>
                    <li>
                        <Link to="/privacy-policy" className='footer-privacy-link'>
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link to="/discounts" className='footer-discounts-link'>
                            Discounts
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='footer-block-2'>
                <div className="donate-button-container">
                    <div className="footer-donate-button-coffee">
                        <a href="https://www.buymeacoffee.com/theprojections" rel="noreferrer">
                            <img src={'https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'} alt={'Donate with PayPal button'} />
                        </a>
                    </div>
                    <div className='footer-copyright'>
                        <p>© Products 2022</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Footer