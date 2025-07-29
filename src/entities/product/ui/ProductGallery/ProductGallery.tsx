// react
import { useState, type FC } from 'react';
// styles
import styles from './ProductGallery.module.scss';
import clsx from 'clsx';

interface ProductGalleryProps {
    images: string[];
}

export const ProductGallery: FC<ProductGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  }

    return (
        <div className={styles.productGallery}>
            <div className={styles.thumbnailList}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index}`}
                        className={clsx(
                            styles.thumbnail,
                            index === activeIndex && styles.active
                        )}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>

            <div className={styles.mainImageWrapper}>
                <img
                    src={images[activeIndex]}
                    alt="Main product"
                    className={styles.mainImage}
                />
            </div>
        </div>
    );
};
