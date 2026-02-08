/**
 * Cart Reducer
 * Manages cart state and handles cart-related actions
 */
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants';


const cartItems = (state=[], action) => {
    switch(action.type){
        // Add new item to cart
        case ADD_TO_CART:
            return [...state, action.payload]

        // Remove item from cart by matching id
        case REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem.product.id !== action.payload.id)

        // Clear all items from cart
        case CLEAR_CART:
            return state=[]
    }
    return state;
}

export default cartItems;