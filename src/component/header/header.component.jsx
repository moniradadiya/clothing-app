import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.jpg';





import '../header/header.style.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            {/* <Logo className="logo"/> */}
            <img src={Logo} className="logo"/>
            

        </Link>
        <div className="options">
            <Link className="option" to="/shop">
            SHOP
            </Link>

            <Link className="option" to="/shop">
            CONTACT
            </Link>

        </div>

    </div>
);

export default Header;