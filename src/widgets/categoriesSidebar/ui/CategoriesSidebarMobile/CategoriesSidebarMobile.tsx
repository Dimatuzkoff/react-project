// react
import React from 'react';
// components
import { CategoriesSidebar } from '@/widgets/categoriesSidebar/ui/CategoriesSidebar';
// slyles
import styles from './CategoriesSidebarMobile.module.scss';
import clsx from 'clsx';

interface CategoriesSidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CategoriesSidebarMobile: React.FC<
  CategoriesSidebarMobileProps
> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={clsx(styles.overlay, { [styles.show]: isOpen })}
        onClick={onClose}
      />

      <div className={clsx(styles.sidebar, { [styles.open]: isOpen })}>
        <div className={styles.header}>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
          <div className={styles.topLine} />
        </div>
        <div className={styles.sidebarMobile}>
          <h3 className={styles.title}>Categories</h3>
          <CategoriesSidebar />
        </div>
      </div>
    </>
  );
};
