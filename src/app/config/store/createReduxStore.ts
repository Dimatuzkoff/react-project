import { combineReducers, createStore } from 'redux';
import { cartReducer } from '@/features/cart/model/reducer/cartReducer';

export const createReduxStore = () => {
    const reducers = {
        cart: cartReducer,
    };

    const rootReducer = combineReducers(reducers);

    const store = createStore(rootReducer);

    return store;
};
