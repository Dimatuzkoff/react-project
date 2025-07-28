// react
import type { FC } from 'react';
// styles
import styles from './ProductRatingBlock.module.scss';

interface ProductRatingBlockProps {
    rating: number;
    reviewCount: number;
    text: string;
}

export const ProductRatingBlock: FC<ProductRatingBlockProps> = ({
    rating,
    reviewCount,
    text="",
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
            <span className={styles.reviewCount}>({reviewCount} {text})</span>
        </div>
    );
};
