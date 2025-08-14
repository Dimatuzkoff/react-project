// react
import type { FC, ReactNode } from 'react';
// styles
import styles from './CartItemList.module.scss';

interface CartItemListProps {
  children: ReactNode;
  isEmpty?: boolean;
}

export const CartItemList: FC<CartItemListProps> = ({ children }) => {

  return (
    <table className={styles.cartItemList}>
      <thead>
        <tr className={styles.header}>
          <th className={styles.product}>Product</th>
          <th className={styles.price}>Price</th>
          <th className={styles.quantity}>Quantity</th>
          <th className={styles.subtotal}>SubTotal</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
