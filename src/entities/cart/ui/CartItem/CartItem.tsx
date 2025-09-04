// react
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// types
import type { CartProduct } from '../../model/types/cartProduct';
import type { Promocode } from '@/entities/cart/model/types/promocodeType'
// utils
import { cartFormatPrice } from '../../libs/utils/cartFormatPrice';
// styles
import styles from './CartItem.module.scss';
// component
import { CartQuantity } from '../CartQuantity';
// constants
import { getProductBySlugRoute } from '@/shared/libs/constants/routes/routes';

interface CartItemProps {
  item: CartProduct,
  promocode?: Promocode | string,
  onQuantityChange?: (
    id: CartProduct['id'],
    qty: CartProduct['quantity']
  ) => void;
  onRemove?: (id: CartProduct['id']) => void;
}

export const CartItem: FC<CartItemProps> = ({
  item,
  promocode,
  onQuantityChange,
  onRemove,
}) => {
  const price = typeof item.price === 'number' ? item.price : 0;

  const priceFormatted = cartFormatPrice(price);

  const subtotal = cartFormatPrice(price * item.quantity);

  const quantityChange = (qty: CartProduct['quantity']) => {
    onQuantityChange?.(item.id, qty);
  };

  const remove = () => {
    onRemove?.(item.id);
  };
if (promocode) console.log('promocode', promocode);
const isPromocode = (promocode?.type === 'ALL' ) || promocode?.categories.includes(item.category) || false
console.log('isPromocode', isPromocode);
console.log('item', item);


  return (
    <tr className={styles.cartItem}>
      <td className={styles.product}>
        <div className={styles.cartItemImage}>
          <Link to={getProductBySlugRoute(item.slug)}>
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
        <Link
          to={getProductBySlugRoute(item.slug)}
          className={styles.titleLink}
        >
          {item.title}
        </Link>
      </td>
      <td>
           {isPromocode && <div className={styles.priceBlock}>
                    <span className={styles.currentPrice}>${price - price*(promocode.discount/100)}</span>
                    
                        <span className={styles.oldPrice}>${price}</span>
                    
            </div>}
      </td>
      {!isPromocode && <td className={styles.price}>${priceFormatted}</td>}
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
