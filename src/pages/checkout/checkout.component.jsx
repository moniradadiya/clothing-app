import React from "react";

import { connect } from "react-redux";
import '../checkout/checkout.style.scss';
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selector";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../component/stripe-button/stripe-button.component"; 

const CheckoutPage = ({cartItems}) => {
    console.log(cartItems);
    
    let total = cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0);

    return (
        <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>

            </div>

            <div className="header-block"> 
                <span>Description</span>

            </div>

            <div className="header-block">
                <span>Quantity</span>

            </div>

            <div className="header-block">
                <span>Price</span>

            </div>
            <div className="header-block">
                <span>Total</span>
                {/* <span>TOTAL: ${total}</span> */}

            </div>

            <div className="header-block">
                <span>Remove</span>

            </div>
            

        </div>
        {
            cartItems.map(cartItem => (
               <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
               
                ))
        }
        <div className="total">
             <span className="total-wrap">TOTAL: ${total}</span>
             <div className="test-warning">
                 *Please use the following test credit card for payments*
                 <br />
                 4242 4242 4242 4242 - Exp:01/20 - CVV:123
             </div>
        </div>
        <StripeCheckoutButton price={total} />
    </div>
    )
}

// const mapStateToProps = ({cart}) => {
//     console.log(state);
//     cartItems: cart.cart
// }

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    // total: selectCartItems
});

export default connect(mapStateToProps) (CheckoutPage);