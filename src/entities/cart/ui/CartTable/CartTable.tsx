// react
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux';
import { cartActionCreators } from '../../model/actionCreators/cartActionCreators';
import { getCartState } from '../../model/selectors/cartSelectors';
// components
import { CartItemList } from '../CartItemList';
import { CartCoupon } from '../CartCoupon';
import { CartTotal } from '../CartTotal';
import { CartActions } from '../CartActions';
import { CartItem } from '../CartItem';
import { Button } from '@/shared/ui/Button';
// assets
import EmptyCart from '@/shared/libs/assets/svg/authImg.svg';
// types
import type { CartProduct } from '../../model/types/cartProduct';
import type { Promocode } from '@/entities/cart/model/types/promocodeType'

// helpers
import { cartSubtotal } from '../../libs/helpers/cartSubtotal';
import { getPromocodeByCode } from '@/entities/cart/libs/helpers/getPromocodeByCode'
// constants 
import { getHomeRoute } from '@/shared/libs/constants/routes/routes';
// styles
import styles from './CartTable.module.scss';

export const CartTable = () => {
    const [promocode, setPromocode] = useState<Promocode | string >();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(getCartState);
    const items = cart.cart;
    const subtotal = cartSubtotal(items);
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
        if (!code.trim()) return
        const currentCode = getPromocodeByCode(code)
        
        alert(JSON.stringify(currentCode));
        if (currentCode.id)  {
            setPromocode(currentCode)
        }
    };

    const goHome = () => {
        navigate(getHomeRoute());
    };

    return (
    <div className={styles.cartTable}>
      {items.length === 0 ? (
        <div className={styles.emptyWrapper}>
          <p className={styles.emptyText}>Ваш кошик порожній</p>
          <img src={EmptyCart} alt="Empty cart" />
          <div className={styles.btnWrapper}>
            <Button children="За покупками" uiColor="danger" onClick={goHome} />
          </div>
        </div>
      ) : (
        <>
          <div className={styles.cartBody}>
            <CartItemList>
              {items.map(item => (
                <CartItem
                  key={item.id}
                  promocode = {promocode}
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
        </>
      )}
    </div>
  );
};
