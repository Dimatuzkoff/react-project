import { combineReducers, createStore } from 'redux';
import { cartReducer } from '@/entities/cart/model/reducer/cartReducer';
import { wishlistReducer } from '@/entities/wishlist/model/reducer/wishlistReducer';
import { breadcrumbsReducer } from '@/widgets/breadcrumbs/model/reducer/breadcrumbsReducer';

export const createReduxStore = () => {
    const reducers = {
        cart: cartReducer,
        wishlist: wishlistReducer,
        breadcrumbs: breadcrumbsReducer,
    };

    const rootReducer = combineReducers(reducers);

    const store = createStore(rootReducer);

    return store;
};
