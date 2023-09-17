/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Orders.css';
import Cart from '../Cart/Cart';
import { useLoaderData, Link } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakeDb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleRemove = (id) =>{
        
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        removeFromDb(id);
    }
    const handleClearCart = () =>{
        deleteShoppingCart()
        setCart([])
    }
    return (
        <div className='shop-container'>
            <div className='items-container'>
                {
                    cart.map(item => <ReviewItems key={item.id} item={item} handleRemove= {handleRemove}/>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link className='btn' to='/checkout'>
                        <button className='btn-review'>Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;