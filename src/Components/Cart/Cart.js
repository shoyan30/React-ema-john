import React from 'react';
import './Cart.css';
import { parse } from '@fortawesome/fontawesome-svg-core';

const Cart = (props) => {
    
    const {cart} = props
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity; 
        shipping = shipping + product.shipping;
    }
    let tax = parseFloat((total * 0.1).toFixed(2));
    

    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;