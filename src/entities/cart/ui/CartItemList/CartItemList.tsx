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
          <th className={styles.product}>Товар</th>
          <th className={styles.price}>Ціна</th>
          <th className={styles.quantity}>Кількість</th>
          <th className={styles.subtotal}>Підсумок</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
