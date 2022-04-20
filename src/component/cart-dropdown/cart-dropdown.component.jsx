import React from "react";
import { connect } from "react-redux";

import '../cart-dropdown/cart-dropdown.style.scss';
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import withRouter from '../router.component';

// import { useNavigate } from "react-router";  
import { useNavigate } from "react-router-dom";


const CartDropdown = ({cartItems, toggleCartHidden}) => {
  // console.log(otherProps);
  const navigate = useNavigate();
  // console.log(navigate);
  return (
    <div className="cart-dropdown">
        <div className="cart-items">
          {
            cartItems.length ?
            cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
            
            )) : (
            <span className="empty-message">Your cart is empty</span>
            )

          }

        </div>
        <CustomButton  onClick={() =>{
           navigate('/checkout');
           toggleCartHidden();
           }}>GO TO CHECKOUT</CustomButton>  
        

    </div>
  ); 
}
  
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems


});

//  const mapDispatchToProps = createStructuredSelector({
//    hidden: toggleCartHidden
//  });


const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});



export default connect(mapStateToProps,mapDispatchToProps)(CartDropdown);