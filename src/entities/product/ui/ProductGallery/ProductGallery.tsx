// react
import { useState, type FC } from 'react';
// styles
import styles from './ProductGallery.module.scss';

interface ProductGalleryProps {
    images: string[];
}

export const ProductGallery: FC<ProductGalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images?.[0]);

    return (
        <div className={styles.productGallery}>
            <div className={styles.thumbnailList}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index}`}
                        className={`${styles.thumbnail} ${img === activeImage ? styles.active : ''}`}
                        onClick={() => setActiveImage(img)}
                    />
                ))}
            </div>

            <div className={styles.mainImageWrapper}>
                <img
                    src={activeImage}
                    alt="Main product"
                    className={styles.mainImage}
                />
            </div>
        </div>
    );
};
