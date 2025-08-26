// react
import React from 'react';
// helpers
import { getUniqueCategories } from '@/entities/product/libs/helpers/getUniqueCategories';
// components
import { Sidebar } from '@/shared/ui/Sidebar';
// styles
import styles from './CategoriesSidebar.module.scss';

export const CategoriesSidebar: React.FC = () => {
  const categories = getUniqueCategories();

  return (
    <div className={styles.categoriesSidebar}>
      <Sidebar items={categories} />
    </div>
  );
};
