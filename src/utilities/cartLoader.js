/* eslint-disable no-unused-vars */
import { getShoppingCart } from "./fakeDb";

const cartLoader = async() =>{
    const products = await fetch('products.json')
    const loadedProducts = await products.json();
    const storedCart = getShoppingCart()
    const savedCart = []
    for(const id in storedCart){
        const addedProduct = loadedProducts.find(product => product.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }


    return savedCart;
}
export default cartLoader;
