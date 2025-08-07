// components
import { Button } from '@/shared/ui/Button';
// styles
import styles from './CartActions.module.scss';

export const CartActions = () => {
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
