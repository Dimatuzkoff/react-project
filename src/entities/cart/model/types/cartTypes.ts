import { type CartProduct } from './cartProduct';
import { type Promocode} from './promocodeType'

export type CartStateType = {
    cart: CartProduct[],
    promocode: Promocode | null
};
