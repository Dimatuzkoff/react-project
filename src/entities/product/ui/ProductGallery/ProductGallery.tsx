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
  const [backgroundPos, setBackgroundPos] = useState('50% 50%');
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPos(`${x}% ${y}%`);
  };

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

      <div
        className={clsx(styles.mainImageWrapper, isZoomed && styles.zoomed)}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        style={{
          backgroundImage: isZoomed ? `url(${images[activeIndex]})` : 'none',
          backgroundPosition: backgroundPos,
        }}
      >
        <img
          src={images[activeIndex]}
          alt="Main product"
          className={styles.mainImage}
        />
      </div>
    </div>
  );
};
