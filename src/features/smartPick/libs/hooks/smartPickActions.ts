// react
import { useDispatch } from "react-redux";
// model
import { smartPickActionCreators } from '@/features/smartPick/model/actionCreators/smartPickActionCreators'
// type
import { type Product } from '@/entities/product/model/types/product';

export const useAddToProductStory = (product: Product) => {
    const dispatch = useDispatch();
    const addToViewedProducts = () => {
        dispatch(smartPickActionCreators.addProductToViewedProducts(product));
    };
  return addToViewedProducts;
};

export const useAddToSmartPick = (product: Product) => {
    const dispatch = useDispatch();
    const addToSmartPick = () => {
        dispatch(smartPickActionCreators.addProductToSmartPick(product));
    };
  return addToSmartPick;
};
