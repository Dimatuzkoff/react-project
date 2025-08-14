import React, { useState, useEffect } from 'react';
// data
import { slides } from '@/mockData/slides';
// assets
import arrowRightBanner from '@/shared/libs/assets/svg/icons/arrowRightBanner.svg';
// styles
import styles from './MainBanner.module.scss';
import clsx from 'clsx';

export const MainBanner: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1 >= slides.length ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className={styles.banner}>
      <div className={styles.imageWrapper}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === current ? styles.active : ''}`}
          >
            <img src={slide.img} alt={slide.title} />
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
                <img src={arrowRightBanner} alt="arrowRight" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        {slides.map((_, index) => (
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
