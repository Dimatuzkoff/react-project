// react
import type { FC } from 'react';
// styles
import styles from './PriceBlock.module.scss';

interface PriceBlockProps {
    price: number;
    oldPrice: number | null;
}

export const PriceBlock: FC<PriceBlockProps> = ({ price, oldPrice }) => {
    return (
        <div className={styles.priceBlock}>
            <span className={styles.currentPrice}>${price}</span>
            {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}
        </div>
    );
};
