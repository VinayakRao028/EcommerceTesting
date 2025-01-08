import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header id="header">
            <Link to="/">
                <img src="/images/swethlogopng5.png" className="logo" alt="Logo" />
            </Link>

            <nav>
                <ul id="navbar" className={isMenuOpen ? 'active' : ''}>
                    <li><Link className="active" to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li id="lg-bag"><Link to="/cart"><i className="far fa-shopping-bag"></i></Link></li>
                    <button id="close" onClick={toggleMenu}><i className="far fa-times"></i></button>
                </ul>
            </nav>

            <div id="mobile">
                <Link to="/cart"><i className="far fa-shopping-bag"></i></Link>
                <i id="bar" className="fas fa-outdent" onClick={toggleMenu}></i>
            </div>
        </header>
    );
};

export default Header;