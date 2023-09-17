const getShoppingCart = ()=>{
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const addToDb = (id)=>{
    let shoppingCart = getShoppingCart();

    let quantity = shoppingCart[id];

    if(quantity){
        quantity +=1;
        shoppingCart[id] = quantity;
    }
    else{
        shoppingCart[id] = 1;

    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id=>{
    let storedCart = getShoppingCart();
    if(id in storedCart){
        delete storedCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(storedCart));
    }
}


const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}



export{
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}