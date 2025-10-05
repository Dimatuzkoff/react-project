// react
import { type FC, useRef } from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// styles
import 'swiper/css';
import styles from './ProductListSlider.module.scss';
// components
import { ProductCard } from '../ProductCard';
// types
import type { Product } from '../../model/types/product';
import type { ProductVariant } from '../../model/types/productVariant';

interface ProductListSliderProps {
  products: Product[];
  variant?: ProductVariant;
  isShowWishList?: boolean;
  isShowPreview?: boolean;
  isShowDelete?: boolean;
}

export const ProductListSlider: FC<ProductListSliderProps> = ({
  products,
  variant = 'default',
  isShowWishList = true,
  isShowPreview = true,
  isShowDelete = false,
}) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className={styles.ProductListSlider}>
      <div className={styles.header}>
        <h3 className={styles.title}>Flash Sales</h3>
        <div className={styles.controls}>
          <button ref={prevRef} className={styles.arrow}>
            ←
          </button>
          <button ref={nextRef} className={styles.arrow}>
            →
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onInit={swiper => {
          const nav = swiper.params.navigation as
            | { prevEl?: HTMLElement | null; nextEl?: HTMLElement | null }
            | undefined;

          if (nav) {
            nav.prevEl = prevRef.current;
            nav.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        slidesPerView="auto"
        spaceBetween={25}
        className={styles.swiper}
      >
        {products.map(product => (
          <SwiperSlide key={product.id} className={styles.slide}>
            <ProductCard
              product={product}
              variant={variant}
              isShowWishList={isShowWishList}
              isShowPreview={isShowPreview}
              isShowDelete={isShowDelete}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
