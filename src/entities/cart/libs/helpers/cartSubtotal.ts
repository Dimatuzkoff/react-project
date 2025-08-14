import type { CartProduct } from '../../model/types/cartProduct';

export const cartSubtotal = (items: CartProduct[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
