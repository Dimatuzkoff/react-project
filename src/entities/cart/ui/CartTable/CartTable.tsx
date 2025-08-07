// redux
import { useSelector, useDispatch } from 'react-redux';
import { cartActionCreators } from '../../model/actionCreators/cartActionCreators';
import { getCartState } from '../../model/selectors/cartSelectors';
// components
import { CartItemList } from '../CartItemList';
import { CartCoupon } from '../CartCoupon';
import { CartTotal } from '../CartTotal';
import { CartActions } from '../CartActions';
// types
import type { CartProduct } from '../../model/types/cartProduct';
// styles
import styles from './CartTable.module.scss';
import { CartItem } from '../CartItem';

export const CartTable = () => {
  const dispatch = useDispatch();

  const cart = useSelector(getCartState);

  const items = cart.cart;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
    
  const shipping = 0;

  const total = subtotal + shipping;

  const changeQuantity = (
    id: CartProduct['id'],
    qty: CartProduct['quantity']
  ) => {
    dispatch(cartActionCreators.updateQuantity(id, qty));
  };

  const removeItem = (id: CartProduct['id']) => {
    dispatch(cartActionCreators.deleteProductFromCart(id));
  };

  const applyCoupon = (code: string) => {
    console.log('Coupon applied:', code);
    // dispatch для купона
  };

  return (
    <div className={styles.cartTable}>
      <div className={styles.cartBody}>
        <CartItemList isEmpty={items.length === 0}>
          {items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={changeQuantity}
              onRemove={removeItem}
            />
          ))}
        </CartItemList>
        <CartActions />
      </div>
      <div className={styles.cartFooter}>
        <CartCoupon onApplyCoupon={applyCoupon} />
        <CartTotal subtotal={subtotal} shipping={shipping} total={total} />
      </div>
    </div>
  );
};
