// react
import type { FC } from 'react';
// hooks
import { useRemovePromocode } from '@/entities/cart/libs/hooks/promocodeActionsHooks'
// components
import { Button } from '@/shared/ui/Button';
// styles
import styles from './CartTotal.module.scss';

interface CartTotalProps {
    subtotal: number;
    shipping: number;
    total: number;
}

export const CartTotal: FC<CartTotalProps> = ({
    subtotal = 0,
    shipping = 0,
    total = 0
}) => {
    const removePromocode = useRemovePromocode()
    const onCheckout = () => removePromocode()
    return (
        <div className={styles.cartTotal}>
            <h3>Cart Total</h3>
            <div>
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <hr />
            <div>
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
            </div>
            <hr />
            <div>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <Button
                uiColor="danger"
                onClick={onCheckout}
            > Видалити промокод
                </Button>
        </div>
    );
};
