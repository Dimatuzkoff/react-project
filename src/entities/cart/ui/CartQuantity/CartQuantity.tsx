// react
import type { FC } from 'react';
// types
import type { CartProduct } from '../../model/types/cartProduct';
// styles
import styles from './CartQuantity.module.scss';

interface CartQuantityProps {
    quantity: CartProduct['quantity'];
    stock?: CartProduct['stock'];
    onChange?: (qty: CartProduct['quantity']) => void;
}

export const CartQuantity: FC<CartQuantityProps> = ({
    quantity,
    stock,
    onChange,
}) => {
    return (
        <select
            className={styles.customSelect}
            value={quantity}
            onChange={e => onChange?.(+e.target.value)}
        >
            {[...Array(stock)].map((_, i) => {
                const n = i + 1;
                return (
                    <option key={n} value={n}>
                        {n < 10 ? `0${n}` : n}
                    </option>
                );
            })}
        </select>
    );
};
