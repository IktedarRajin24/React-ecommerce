/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'


const Cart = (props) => {

    // console.log(props.cart);
    const {cart} = props;
    const {handleClearCart} = props
    const {children} = props
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(let product of cart){
        // product.quantity = product.quantity || 1;
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping;
        quantity = quantity + product.quantity;
    }
 
    const tax = totalPrice *0.7;
    const grandTotal = totalPrice+totalShipping+tax;

    return (
        <div className='cart'>
            <h5 className='cart-title'>Order Summary</h5>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping: ${totalShipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
            <button onClick={handleClearCart} className='btn-clear'>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;