// react
import { useState, type FC } from 'react';
// components
import { ProductRatingBlock } from '../ProductRatingBlock';
import { ProductDeliveryInfo } from '../ProductDeliveryInfo';
import { Button } from '@/shared/ui/Button';
// assets
import  Wishlist  from '@/shared/libs/assets/svg/icons/wishlist.svg';
// styles
import styles from './ProductDescription.module.scss';

interface ProductDescriptionProps {
    title: string;
    description: string;
    rating: number;
    reviewCount: number;
    price: number;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({
    title,
    description,
    rating,
    reviewCount,
    price,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

    const handleWishlistToggle = () => {
        setIsInWishlist(prev => !prev);
        //  dispatch в Redux
    };

    const handleBuy = () => {
        // логика добавления в корзину
        console.log(`Купить ${quantity} шт.`);
    };

    return (
        <div className={styles.productDescription}>
            <div className={styles.mainInfo}>
                <h1>{title}</h1>
                <ProductRatingBlock
                    rating={rating}
                    reviewCount={reviewCount}
                    text="Rewiews"
                />
                <p className={styles.price}>${price}</p>
            </div>
            <p>{description}</p>
            <div className={styles.divider}></div>
            <div className={styles.actions}>
                <div className={styles.counter}>
                    <button onClick={decrement} className={styles.decrement}>
                        −
                    </button>
                    <div className={styles.quantity}>{quantity}</div>
                    <button onClick={increment} className={styles.increment}>
                        +
                    </button>
                </div>
                <Button onClick={handleBuy} uiColor="danger">
                    Buy now
                </Button>
                <button
                    className={`${styles.wishlistBtn} ${
                        isInWishlist ? styles.active : ''
                    }`}
                    onClick={handleWishlistToggle}
                >
                    <img src={Wishlist} alt="Wishlist" />
                </button>
            </div>
            <ProductDeliveryInfo />
        </div>
    );
};
