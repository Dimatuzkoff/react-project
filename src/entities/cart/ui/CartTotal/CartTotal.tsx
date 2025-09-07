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
    discount: number,
    shipping: number;
    total: number;
}

export const CartTotal: FC<CartTotalProps> = ({
    subtotal = 0,
    discount = 0,
    shipping = 0,
    total = 0
}) => {
    const removePromocode = useRemovePromocode()
    const onCheckout = () => removePromocode()
    return (
        <div className={styles.cartTotal}>
            <h3>Сума замовлення</h3>
            <div>
                <span>Вартість товарів:</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <hr />
            <div>
                <span>Вартість доставки:</span>
                <span>${shipping.toFixed(2)}</span>
            </div>
            <hr />
            {discount > 0 && (
                <>
                    <div>
                    <span>Знижка:</span>
                    <span>${discount.toFixed(2)}</span>
                    </div>
                    <hr />
                </>
            )}
            <div>
                <span>Разом:</span>
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
