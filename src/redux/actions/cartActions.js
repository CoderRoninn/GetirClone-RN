/**
 * Cart Actions
 * Redux action creators for cart operations
 */
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants';

/**
 * Add item to cart
 */
const addToCart = (payload) => {
    return {
        type:ADD_TO_CART,
        payload
    }
};

/**
 * Remove item from cart
 */
const removeFromCart = (payload) => {
    return {
        type:REMOVE_FROM_CART,
        payload
    }
};

/**
 * Clear cart
 */
const clearCart = () => {
    return {
        type:CLEAR_CART
    }
};

export { addToCart, removeFromCart, clearCart };

// Default export for convenience
export default {
    addToCart,
    removeFromCart,
    clearCart
};