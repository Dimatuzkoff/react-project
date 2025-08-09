// react
import { useDispatch } from "react-redux";
// model
import { smartPickActionCreators } from '@/entities/smartPick/model/actionCreators/smartPickActionCreators'
// type
import { type Product } from '@/entities/product/model/types/product';

export const useAddToProductStory = (product: Product) => {
    const dispatch = useDispatch();
    const addToViewedProducts = () => {
        dispatch(smartPickActionCreators.addProductToViewedProducts(product));
    };
  return addToViewedProducts;
};
