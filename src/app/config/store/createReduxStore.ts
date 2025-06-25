import { combineReducers, createStore } from 'redux';
import { cartReducer } from '@/entities/cart/model/reducer/cartReducer';
import { wishlistReducer } from '@/entities/wishlist/model/reducer/wishlistReducer';

export const createReduxStore = () => {
    const reducers = {
        cart: cartReducer,
        wishlist: wishlistReducer,
    };

    const rootReducer = combineReducers(reducers);

    const store = createStore(rootReducer);

    return store;
};
