// react
import { useState, type FC } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { cartActionCreators } from '@/entities/cart/model/actionCreators/cartActionCreators';
// components
import { ProductRatingBlock } from '../ProductRatingBlock';
import { ProductDeliveryInfo } from '../ProductDeliveryInfo';
import { Button } from '@/shared/ui/Button';
// assets
import WishlistIcon from '@/shared/libs/assets/svg/icons/wishlist.svg?react';
// types
import type { Product } from '../../model/types/product';
// styles
import styles from './ProductDescription.module.scss';

interface ProductDescriptionProps {
    product: Product
}

export const ProductDescription: FC<ProductDescriptionProps> = ({
   product,
}) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [isInWishlist, setIsInWishlist] = useState(false);

    const { title, description, rating, price } =
        product;
    
    const reviewCount = product.reviews.length;

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

    const wishlistToggle = () => {
        setIsInWishlist(prev => !prev);
        //  dispatch в Redux
    };

    const buy = () => {
        const { id, title, price, thumbnail } = product;

        dispatch(
            cartActionCreators.addProductToCart({
                id,
                title,
                price,
                thumbnail,
                quantity,
            })
        );
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
                <Button onClick={buy} uiColor="danger" size="44">
                    Buy now
                </Button>
                <button
                    className={`${styles.wishlistBtn} ${
                        isInWishlist ? styles.active : ''
                    }`}
                    onClick={wishlistToggle}
                >
                    <WishlistIcon />
                </button>
            </div>
            <ProductDeliveryInfo />
        </div>
    );
};
