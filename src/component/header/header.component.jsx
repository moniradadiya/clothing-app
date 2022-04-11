import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from '../../assets/logo.jpg';
// import {HiOutlineShoppingBag} from 'react-icons/hi';
import { auth } from "../../firebase/firebase.utils";





import '../header/header.style.scss';

const Header = ({currentUser}) => (
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
            {/* <Cart currentUser={currentUser}/> */}
            
        </div>

    </div>
);

const mapSateToProps = state => ({
    currentUser: state.user.currentUser

})

export default connect(mapSateToProps) (Header);