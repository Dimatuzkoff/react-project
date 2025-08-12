import React from 'react';
import styles from './MainBanner.module.scss';
import bannerImg from '@/shared/libs/assets/webp/baner.webp';

export const MainBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      {/* <div className={styles.content}>
        <h4>iPhone 14 Series</h4>
        <h2>Up to 10% off Voucher</h2>
        <a href="/shop" className={styles.btn}>
          Shop Now →
        </a>
      </div> */}
      <div className={styles.image}>
        <img src={bannerImg} alt="iPhone 14" />
      </div>
    </div>
  );
};
