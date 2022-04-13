import React from "react";

import '../cart-dropdown/cart-dropdown.style.scss';
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
          <CustomButton className='button'>GO TO CHECKOUT</CustomButton>

        </div>

    </div>
);

export default CartDropdown;