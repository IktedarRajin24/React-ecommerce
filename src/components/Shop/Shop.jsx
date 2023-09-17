import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakeDb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        let savedCart = [];
        for(const id in storedCart){
            const quantity = storedCart[id];
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        setCart(savedCart);
        }
    },[products])

    const addToCart = (product)=>{
        let newCart = [];
        let exists = cart.find(pd => pd.id ===product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        }else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart =[...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
    }
    const handleClearCart = () =>{
        deleteShoppingCart()
        setCart([])
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleClearCart= {handleClearCart}>
                    <Link className='btn' to='/orders'>
                        <button className='btn-review'>
                            Review Orders
                        </button>

                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;