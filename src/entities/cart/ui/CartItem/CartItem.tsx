// react
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// types
import type { CartProduct } from '../../model/types/cartProduct';
// utils
import { cartFormatPrice } from '../../libs/utils/cartFormatPrice';
// styles
import styles from './CartItem.module.scss';
// component
import { CartQuantity } from '../CartQuantity';
import { CartItemPrice } from '../CartItemPrice/CartItemPrice'
// constants
import { getProductBySlugRoute } from '@/shared/libs/constants/routes/routes';

interface CartItemProps {
    item: CartProduct,
    onQuantityChange?: (
        id: CartProduct['id'],
        qty: CartProduct['quantity']
        ) => void;
    onRemove?: (id: CartProduct['id']) => void;
}

export const CartItem: FC<CartItemProps> = ({
    item,
    onQuantityChange,
    onRemove,
}) => {
  
    const price = typeof item.price === 'number' ? item.price : 0;

    const priceFormatted = cartFormatPrice(price);

    const subtotal = cartFormatPrice(price * item.quantity);

    const quantityChange = (qty: CartProduct['quantity']) => {
        onQuantityChange?.(item.id, qty);
    }

    const remove = () => {
        onRemove?.(item.id);
    };
    return (
        <tr className={styles.cartItem}>
            <td className={styles.product}>
                <div className={styles.cartItemImage}>
                     <Link to={getProductBySlugRoute(item.slug)}>
                        <img src={item.thumbnail} alt={item.title} className={styles.image} />
                    </Link>
                    <button onClick={remove} className={styles.removeBtn}> × </button>
                </div>
                <Link to={getProductBySlugRoute(item.slug)} className={styles.titleLink} >
                    {item.title}
                </Link>
            </td>
            <td >
                <CartItemPrice item={item} />
            </td>
            <td className={styles.quantity}>
                <CartQuantity quantity={item.quantity} stock={item.stock} onChange={quantityChange} />
            </td>
            <td className={styles.subtotal}>${subtotal}</td>
        </tr>
    );
};
