import { combineReducers, createStore } from 'redux';
import { cartReducer } from '@/entities/cart/model/reducer/cartReducer';
import { wishlistReducer } from '@/entities/wishlist/model/reducer/wishlistReducer';
import { breadcrumbReducer } from '@/widgets/breadcrumbs/model/reducer/breadcrumbReducer';
import { smartPickReducer } from '@/features/smartPick/model/reducer/smartPickReducer';
import { productsPageReducer } from '@/pages/products/model/reducer/productsPageReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const createReduxStore = () => {
    const persistConfig = {
        key: 'root', 
        storage, 
        whitelist: ['cart', 'wishlist', 'smartPick']
    };

    const reducers = {
        cart: cartReducer,
        wishlist: wishlistReducer,
        breadcrumbs: breadcrumbReducer,
        smartPick: smartPickReducer,
        products: productsPageReducer
    };

    const rootReducer  = combineReducers(reducers);
    //@ts-expect-error TS(2349)
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = createStore(persistedReducer);

    const persistor = persistStore(store);

    return {store, persistor};
};
