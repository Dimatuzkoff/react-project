// react
import type { FC } from 'react';
// styles
import styles from './ProductRatingBlock.module.scss';

interface ProductRatingBlockProps {
    rating: number;
    reviewCount: number;
}

export const ProductRatingBlock: FC<ProductRatingBlockProps> = ({
    rating,
    reviewCount,
}) => {
    return (
        <div className={styles.ratingBlock}>
            <span className={styles.stars}>
                {Array.from({ length: 5 }, (_, index) => (
                    <span
                        key={index}
                        className={
                            index < Math.round(rating)
                                ? styles.starFilled
                                : styles.starEmpty
                        }
                    >
                        ★
                    </span>
                ))}
            </span>
            <span className={styles.reviewCount}>({reviewCount})</span>
        </div>
    );
};
