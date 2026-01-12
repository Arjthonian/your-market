import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCart, saveCart, addToCart as addToCartMock, removeFromCart as removeFromCartMock, updateCartQuantity as updateCartQuantityMock } from './data/mockData';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getCart());
    }, []);

    const addToCart = (product, quantity) => {
        const updatedCart = addToCartMock(product, quantity);
        setCart([...updatedCart]);
    };

    const removeFromCart = (productId) => {
        const updatedCart = removeFromCartMock(productId);
        setCart([...updatedCart]);
    };

    const updateQuantity = (productId, quantity) => {
        const updatedCart = updateCartQuantityMock(productId, quantity);
        setCart([...updatedCart]);
    };

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
