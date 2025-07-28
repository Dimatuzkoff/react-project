//assets
import Delivery from '@/shared/libs/assets/svg/icons/delivery.svg';
import Return from '@/shared/libs/assets/svg/icons/return.svg';
// styles
import styles from './ProductDeliveryInfo.module.scss';
import clsx from 'clsx';

export const ProductDeliveryInfo = () => {
    return (
        <div className={styles.productDeliveryInfo}>
            <div className={styles.delivery}>
                <img src={Delivery} alt="delivery" />
                <div className={styles.deliveryInfo}>
                    <p className={styles.deliveryTitle}>Free Delivery</p>
                    <p className={clsx(styles.deliveryText, styles.underline)}>
                        Enter your postal code for Delivery Availability
                    </p>
                </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.return}>
                <img src={Return} alt="return" />
                <div className={styles.returnInfo}>
                    <p className={styles.returnTitle}>Return Delivery</p>
                    <p className={styles.returnText}>
                        Free 30 Days Delivery Returns. <span className={styles.underline}>Details</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
