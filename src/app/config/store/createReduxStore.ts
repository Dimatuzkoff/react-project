import { combineReducers, createStore } from 'redux';
import { cartReducer } from '@/entities/cart/model/reducer/cartReducer';
import { wishlistReducer } from '@/entities/wishlist/model/reducer/wishlistReducer';
import { breadcrumbReducer } from '@/widgets/breadcrumbs/model/reducer/breadcrumbReducer';

export const createReduxStore = () => {
    const reducers = {
        cart: cartReducer,
        wishlist: wishlistReducer,
        breadcrumbs: breadcrumbReducer,
    };

    const rootReducer = combineReducers(reducers);

    const store = createStore(rootReducer);

    return store;
};
