import { combineReducers, createStore } from 'redux';
import { cartReducer } from '@/entities/cart/model/reducer/cartReducer';
import { wishlistReducer } from '@/entities/wishlist/model/reducer/wishlistReducer';
import { breadcrumbReducer } from '@/widgets/breadcrumbs/model/reducer/breadcrumbReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const createReduxStore = () => {
    const persistConfig = {
        key: 'root', 
        storage, 
        whitelist: ['cart', 'wishlist']
    };

    const reducers = {
        cart: cartReducer,
        wishlist: wishlistReducer,
        breadcrumbs: breadcrumbReducer,
    };

    const rootReducer  = combineReducers(reducers);
    //@ts-expect-error TS(2349)
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = createStore(persistedReducer);

    const persistor = persistStore(store);

    return {store, persistor};
};
