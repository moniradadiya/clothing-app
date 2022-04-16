import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import Logo from '../../assets/logo.jpg';
// import {HiOutlineShoppingBag} from 'react-icons/hi';
import { auth } from "../../firebase/firebase.utils";





import '../header/header.style.scss';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
        
            <img src={Logo} className="logo"/>
            

        </Link>
        <div className="options">
            <Link className="option" to="/shop">
            SHOP
            </Link>

            <Link className="option" to="/shop">
            CONTACT
            </Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}> SIGN OUT</div>
                :
                <Link  className="option" to='/signin'>SIGN IN </Link>
            }
            <CartIcon/>
            
        </div>
        {hidden ? null :  <CartDropdown/> }

      
    </div>
);

const mapSateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});

export default connect(mapSateToProps)(Header);