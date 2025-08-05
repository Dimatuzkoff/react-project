// react
import type { FC } from 'react';
// types
import type { CartProduct } from '../../model/types/cartProduct';
// utils 
import { formatPrice } from '../../libs/utils/formatPrice';
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
    const price = typeof item.price === 'number' ? item.price : 0;
    const priceFormatted = formatPrice(price);
    const subtotal = formatPrice(price * item.quantity);

    const quantityChange = (qty: number) => {
        onQuantityChange?.(item.id, qty);
    };

    const remove = () => {
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
                <button onClick={remove} className={styles.removeBtn}>
                    х
                </button>
            </div>

            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>${priceFormatted}</div>

            <div className={styles.quantity}>
                <CartQuantity
                    quantity={item.quantity}
                    onChange={quantityChange}
                />
            </div>

            <div className={styles.subtotal}>${subtotal}</div>
        </div>
    );
};