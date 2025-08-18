// react
import React, { useState, useEffect } from 'react';
// types
import type { IBannerSlide } from '@/shared/model/types/IBannerSlide';
// styles
import styles from './Banner.module.scss';
import clsx from 'clsx';


interface BannerProps {
  slides: IBannerSlide[];
  interval?: number;
  arrowIcon?: string;
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({
  slides,
  interval = 5000,
  arrowIcon,
  className,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1 >= slides.length ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(id);
  }, [interval, slides.length]);

  return (
    <div className={clsx(styles.banner, className)}>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={clsx(styles.slide, {
              [styles.active]: index === current,
            })}
          >
            <div className={styles.textBlock}>
              <h2 className={styles.title}>
                {slide.brand && (
                  <img
                    src={slide.brand}
                    alt="brand logo"
                    className={styles.brandLogo}
                  />
                )}
                {slide.title}
              </h2>
              <p>{slide.text}</p>
              <a href={slide.link} className={styles.link}>
                <span className={styles.textLink}>{slide.linkText}</span>
                {arrowIcon && <img src={arrowIcon} alt="arrowRight" />}
              </a>
            </div>
            <div className={styles.imageBlock}>
              <img src={slide.img} alt={slide.title} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: slides.length }, (_, index) => (
          <button
            key={index}
            className={clsx(styles.dot, {
              [styles.activeDot]: index === current,
            })}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};
