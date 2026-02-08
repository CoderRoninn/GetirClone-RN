/**
 * Redux Store Configuration
 * Creates and configures the Redux store with reducers and middleware
 */
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartItems from './reducers/cartItem';

/**
 * Combine all reducers into a single root reducer
 * Each key represents a slice of the application state
 */
const reducers = combineReducers({
    cartItems:cartItems

})

/**
 * Create Redux store with:
 * - Combined reducers
 * - Redux DevTools extension for debugging
 * - Thunk middleware for async actions
 */
const store=createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;
