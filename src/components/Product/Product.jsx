/* eslint-disable react/prop-types */

import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    // eslint-disable-next-line react/prop-types
    const {img, name, price, seller, ratings} = props.product;
    const {addToCart} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} stars.</p>
                
            </div>
            <button onClick={()=>addToCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;