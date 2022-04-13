import React from "react";
import { connect } from "react-redux";
import { toggleCartHiddden } from "../../redux/cart/cart.action";
import { AiOutlineShopping } from 'react-icons/ai';

import '../cart-icon/cart-icon.style.scss';

const CartIcon = ({ toggleCartHiddden }) => (
    <div className="cart-icon" onClick={toggleCartHiddden}>
        <AiOutlineShopping className="shopping-icon"/>
        <span className="item-count">0</span>

    </div>
);
const mapDispatchToProps = dispatch => ({
    toggleCartHiddden: () => dispatch(toggleCartHiddden())
});


export default connect(null,mapDispatchToProps) (CartIcon);