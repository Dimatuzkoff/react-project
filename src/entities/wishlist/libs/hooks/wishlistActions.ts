// react
import { useDispatch } from "react-redux";
// model
import { wishlistActionCreators } from '@/entities/wishlist/model/actionCreators/wishlistActionCreators'
// type
import { type Product } from '@/entities/product/model/types/product';

export const useAddToWishlist = (product: Product) => {
    const dispatch = useDispatch();
    const addToWishlist = () => {
        dispatch(wishlistActionCreators.addProductToWishlist(product));
    };
  return addToWishlist;
};