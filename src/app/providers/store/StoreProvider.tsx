import { Provider } from "react-redux";
import { createReduxStore } from "../../config/store/createReduxStore";
import type { FC, ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
    const {store, persistor} = createReduxStore();
    return(
            <Provider store={store}> 
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
    )
};
