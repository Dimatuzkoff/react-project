// ProductsSortSelect.tsx
import type { FC } from 'react';
import type { ISortType } from '@/shared/model/types/ISortType';
import styles from './ProductsSortSelect.module.scss';

interface SortOption {
  value: ISortType;
  label: string;
}

interface ProductsSortSelectProps {
  value: ISortType | null;
  options: SortOption[];
  placeholder?: string;
  onChange: (value: ISortType | null) => void; // разрешаем null
}

export const ProductsSortSelect: FC<ProductsSortSelectProps> = ({
  value,
  options,
  placeholder = 'Sort by',
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '') {
      onChange(null); // сброс сортировки
      return;
    }

    const selected = options.find(
      opt => JSON.stringify(opt.value) === e.target.value
    );
    if (selected) onChange(selected.value);
  };

  return (
    <div className={styles.sortSelect}>
      <select
        className={styles.select}
        value={value ? JSON.stringify(value) : ''}
        onChange={handleChange}
        style={{ color: value ? 'black' : 'gray' }}
      >
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option
            key={JSON.stringify(opt.value)}
            value={JSON.stringify(opt.value)}
          >
            {opt.label}
          </option>
        ))}
      </select>
      <span className={styles.arrow}></span>
    </div>
  );
};
