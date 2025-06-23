// react
import type { FC } from 'react';
// styles
import styles from './ProductBadge.module.scss';

interface ProductBadgeProps {
    discount: number;
    isNew?: boolean;
}

export const ProductBadge: FC<ProductBadgeProps> = ({ discount, isNew }) => {
    if (discount > 0) {
        return (
            <div className={styles.discountBadge}>-{Math.round(discount)}%</div>
        );
    }

    if (isNew) {
        return <div className={styles.newBadge}>New</div>;
    }

    return null;
};
