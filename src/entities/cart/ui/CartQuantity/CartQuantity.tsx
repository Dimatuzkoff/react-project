// react
import type { FC } from 'react';

interface CartQuantityProps {
    quantity: number;
    onChange?: (qty: number) => void;
}

export const CartQuantity: FC<CartQuantityProps> = ({ quantity, onChange }) => {
    return (
        <select value={quantity} onChange={e => onChange?.(+e.target.value)}>
            {[1, 2, 3, 4, 5].map(n => (
                <option key={n} value={n}>
                    {n < 10 ? `0${n}` : n}
                </option>
            ))}
        </select>
    );
};
