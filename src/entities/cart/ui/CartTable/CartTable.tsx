// react
import { useState } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { cartActionCreators } from '../../model/actionCreators/cartActionCreators';
import { getCartState } from '../../model/selectors/cartSelectors';

// components
import { CartItemList } from '../CartItemList';
import { CartCoupon } from '../CartCoupon';
import { CartTotal } from '../CartTotal';
// styles
import styles from './CartTable.module.scss';

export const CartTable = () => {
    const dispatch = useDispatch();

    const cart = useSelector(getCartState);

    const [couponCode, setCouponCode] = useState('');

    const items = cart.cart;

    const quantityChange = (id: number, qty: number) => {
        dispatch(cartActionCreators.updateQuantity(id, qty));
    };

    const remove = (id: number) => {
        dispatch(cartActionCreators.deleteProductFromCart(id));
    };

    const couponChange = (value: string) => {
        setCouponCode(value);
    };

    const applyCoupon = () => {
        console.log('Coupon applied:', couponCode);
    };

    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = 0; // можно позже заменить
    const total = subtotal + shipping;

    return (
        <div className={styles.cartTable}>
            <CartItemList
                items={items}
                onQuantityChange={quantityChange}
                onRemove={remove}
            />
            <div className={styles.cartFooter}>
                <CartCoupon
                    couponCode={couponCode}
                    onCouponCodeChange={couponChange}
                    onApplyCoupon={applyCoupon}
                />
                <CartTotal
                    subtotal={subtotal}
                    shipping={shipping}
                    total={total}
                />
            </div>
        </div>
    );
};
