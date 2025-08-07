// react
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// types
import type { CartProduct } from '../../model/types/cartProduct';
// utils 
import { formatPrice } from '../../libs/utils/formatPrice';
// styles
import styles from './CartItem.module.scss';
// component
import { CartQuantity } from '../CartQuantity';
// constants
import { getProductByIdRoute } from '@/shared/libs/constants/routes/routes';

interface CartItemProps {
    item: CartProduct;
    onQuantityChange?: (id: CartProduct['id'], qty: CartProduct['quantity']) => void;
    onRemove?: (id: CartProduct['id']) => void;
}

export const CartItem: FC<CartItemProps> = ({
    item,
    onQuantityChange,
    onRemove,
}) => {
    const price = typeof item.price === 'number' ? item.price : 0;

    const priceFormatted = formatPrice(price);

    const subtotal = formatPrice(price * item.quantity);

    const quantityChange = (qty: CartProduct['quantity']) => {
        onQuantityChange?.(item.id, qty);
    };

    const remove = () => {
        onRemove?.(item.id);
    };

    return (
      <tr className={styles.cartItem}>
        <td className={styles.product}>
          <div className={styles.cartItemImage}>
            <Link to={getProductByIdRoute(item.id)}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className={styles.image}
              />
            </Link>
            <button onClick={remove} className={styles.removeBtn}>
              ×
            </button>
          </div>
          <Link to={getProductByIdRoute(item.id)} className={styles.titleLink}>
            {item.title}
          </Link>
        </td>
        <td className={styles.price}>${priceFormatted}</td>
        <td className={styles.quantity}>
          <CartQuantity
            quantity={item.quantity}
            stock={item.stock}
            onChange={quantityChange}
          />
        </td>
        <td className={styles.subtotal}>${subtotal}</td>
      </tr>
    );
};