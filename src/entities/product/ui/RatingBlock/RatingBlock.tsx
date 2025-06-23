// react
import type { FC } from 'react';
// styles
import styles from './RatingBlock.module.scss';

interface RatingBlockProps {
    rating: number;
    reviewCount: number;
}

export const RatingBlock: FC<RatingBlockProps> = ({ rating, reviewCount }) => {
    return (
        <div className={styles.ratingBlock}>
            <span className={styles.stars}>
                {[...Array(5)].map((_, index) => (
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
