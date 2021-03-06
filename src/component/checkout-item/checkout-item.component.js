import React from "react";

import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.action";
import '../checkout-item/checkout-item.style.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity, total} = cartItem;
   return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} className='img' alt="item"/>

        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
           <span className="value"> {quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div></span>
        <span className="price">${price}</span>
        <span className="total-wrap"> ${total}</span>
        <div className="remove-button" onClick={() => clearItem(cartItem)}>&#9747;</div>
        
    </div>
   )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps) (CheckoutItem);