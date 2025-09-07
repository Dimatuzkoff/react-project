// react
import { useDispatch } from "react-redux";
// hooks
import { cartActionCreators } from '@/entities/cart/model/actionCreators/cartActionCreators'
// types
import type { Promocode } from '@/entities/cart/model/types/promocodeType' 

export const useAddPromocode = () => {
    const dispatch = useDispatch();
    return ( promocode: Promocode ) => dispatch(cartActionCreators.addPromocode(promocode));
}

export const useRemovePromocode = () => {
    const dispatch = useDispatch();
    return ( ) => dispatch(cartActionCreators.deletePromocode());
}
