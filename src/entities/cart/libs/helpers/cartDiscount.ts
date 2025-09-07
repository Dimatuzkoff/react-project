import type { CartProduct } from '../../model/types/cartProduct';

export const cartDiscount = (items: CartProduct[]): number => {
    return items.reduce((sum, elem) => {
        const discount = elem.promocodeDiscount ?? 0;
        return sum + elem.price * (discount / 100) * elem.quantity;
    }, 0);
};
