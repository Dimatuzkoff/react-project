// react
import type { FC } from 'react';
// components
import { Button } from '@/shared/ui/Button';
// styles
import styles from './CartActions.module.scss';

interface CartActionsProps {}

export const CartActions: FC<CartActionsProps> = ({}) => {
  return (
    <div className={styles.cartActions}>
      <div className={styles.btnWrapper}>
        <Button children="Return To Shop" uiColor="primary" uiType="outline" />
      </div>
      <div className={styles.btnWrapper}>
        <Button children="Update Cart" uiColor="primary" uiType="outline" />
      </div>
    </div>
  );
};
