// react
import type { FC } from 'react';
// types
import type { ISortType } from '@/shared/model/types/ISortType';
// styles
import styles from './ProductsSortSelect.module.scss';

interface SortOption {
  value: ISortType['direction'];
  label: string;
}

interface ProductsSortSelectProps {
  value: ISortType['direction'] | null;
  options: SortOption[];
  placeholder?: string;
  onChange: (value: ISortType['direction']) => void;
}

export const ProductsSortSelect: FC<ProductsSortSelectProps> = ({
  value,
  options,
  placeholder = 'Sort by',
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value as ISortType['direction'];
    onChange(val);
  };

  return (
    <div className={styles.sortSelect}>
      <select
        className={styles.select}
        value={value ?? ''}
        onChange={handleChange}
      >
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className={styles.arrow}></span>
    </div>
  );
};
