// react
import type { FC } from 'react';
// types
import type { CartProduct } from '../../model/types/cartProduct';
// styles
import styles from './CartItem.module.scss';
// component
import { CartQuantity } from '../CartQuantity';

interface CartItemProps {
    item: CartProduct;
    onQuantityChange?: (id: number, qty: number) => void;
    onRemove?: (id: number) => void;
}

export const CartItem: FC<CartItemProps> = ({
    item,
    onQuantityChange,
    onRemove,
}) => {
    const subtotal = (item.price * item.quantity).toFixed(2);

    const handleQuantityChange = (qty: number) => {
        onQuantityChange?.(item.id, qty);
    };

    const handleRemove = () => {
        onRemove?.(item.id);
    };

    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemImage}>
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className={styles.image}
                />
                <button onClick={handleRemove} className={styles.removeBtn}>
                    х
                </button>
            </div>

            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>${item.price.toFixed(2)}</div>

            <div className={styles.quantity}>
                <CartQuantity
                    quantity={item.quantity}
                    onChange={handleQuantityChange}
                />
            </div>

            <div className={styles.subtotal}>${subtotal}</div>
        </div>
    );
};
