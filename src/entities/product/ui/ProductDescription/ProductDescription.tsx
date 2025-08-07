// react
import { useState, type ChangeEvent, type FC } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { cartActionCreators } from '@/entities/cart/model/actionCreators/cartActionCreators';
// components
import { ProductRatingBlock } from '../ProductRatingBlock';
import { ProductDeliveryInfo } from '../ProductDeliveryInfo';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/input';
// assets
import WishlistIcon from '@/shared/libs/assets/svg/icons/wishlist.svg?react';
// types
import type { Product } from '../../model/types/product';
// styles
import styles from './ProductDescription.module.scss';

interface ProductDescriptionProps {
  product: Product;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({
  product,
}) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState<number | string>(1);

  const [isInWishlist, setIsInWishlist] = useState(false);

  const { title, description, rating, price, stock } = product;

  const reviewCount = product.reviews.length;

  const increment = () => {
    setQuantity(q => {
      const num = Number(q);
      return num < stock ? num + 1 : num;
    });
  };

  const decrement = () => {
    setQuantity(q => {
      const num = Number(q);
      return num > 1 ? num - 1 : 1;
    });
  };

  const wishlistToggle = () => {
    setIsInWishlist(prev => !prev);
    //  dispatch в Redux
  };

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Разрешаем пустую строку при вводе
    if (value === '') {
      setQuantity(value);
      return;
    }

    const number = Number(value);

    if (!Number.isNaN(number)) {
      const safeValue = Math.min(Math.max(number, 1), stock);
      setQuantity(safeValue);
    }
  };

  const buy = () => {
    const { id, title, price, thumbnail, stock } = product;

    dispatch(
      cartActionCreators.addProductToCart({
        id,
        title,
        price,
        thumbnail,
        quantity: Number(quantity),
        stock,
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

          <div className={styles.quantity}>
            <Input
              value={quantity}
              onChange={inputChange}
              type={'text'}
              size="40"
              isQuiet
            />
          </div>
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
