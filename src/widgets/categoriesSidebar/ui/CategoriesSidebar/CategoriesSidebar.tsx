// react
import React from 'react';
// helpers
import { getUniqueCategories } from '@/entities/category/libs/helpers/getUniqueCategories';
// styles
import styles from './CategoriesSidebar.module.scss';

export const CategoriesSidebar: React.FC = () => {
  const categories = getUniqueCategories();

  return (
    <aside className={styles.sidebar}>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>
            <a href={`/category/${cat.id}`}>{cat.name}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
