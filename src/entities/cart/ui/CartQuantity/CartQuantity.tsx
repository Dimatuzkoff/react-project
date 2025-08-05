// react
import type { FC } from 'react';
// styles
import styles from './CartQuantity.module.scss';

interface CartQuantityProps {
    quantity: number;
    onChange?: (qty: number) => void;
}

export const CartQuantity: FC<CartQuantityProps> = ({ quantity, onChange }) => {
    return (
        <select
            className={styles.customSelect}
            value={quantity}
            onChange={e => onChange?.(+e.target.value)}
        >
            {[...Array(10)].map((_, i) => {
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
