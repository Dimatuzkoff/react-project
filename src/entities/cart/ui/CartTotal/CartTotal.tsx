// react
import type { FC } from 'react';
// components
import { Button } from '@/shared/ui/Button';
// styles
import styles from './CartTotal.module.scss';

interface CartTotalProps {
    subtotal: number;
    shipping: number;
    total: number;
    onCheckout?: () => void;
}

export const CartTotal: FC<CartTotalProps> = ({
    subtotal = 0,
    shipping = 0,
    total = 0,
    onCheckout,
}) => {
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
                children="Proceed to checkout"
                uiColor="danger"
                onClick={onCheckout}
            />
        </div>
    );
};
