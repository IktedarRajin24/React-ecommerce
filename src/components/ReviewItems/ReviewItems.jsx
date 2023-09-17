/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './ReviewItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({item, handleRemove}) => {
    return (
        <div className='item'>
            <div className='item-img-details'>
                <img className='item-img' src={item.img} alt="" />
                <div className='item-details'>
                    <p className='item-name'>{item.name}</p>
                    <p>Quantity: <span className='orange-text'>{item.quantity}</span></p>
                    <p>Price: <span className='orange-text'>{item.price}$</span></p>

                </div>
            </div>
            <button className='delete-btn' onClick={()=>handleRemove(item.id)}><FontAwesomeIcon icon={faTrashAlt} className='delete-icon' /></button>
        </div>
    );
};

export default ReviewItems;