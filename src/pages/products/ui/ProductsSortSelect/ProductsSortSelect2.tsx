import type { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './ProductsSortSelect.module.scss';

interface ProductsSortSelectProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const ProductsSortSelect2: FC<ProductsSortSelectProps> = ({
  value,
  onChange,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // получаем значение из URL или props
  const sortValue = value ?? searchParams.get('sort') ?? '';

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;

    // синхронизация с URL
    const newParams = new URLSearchParams(searchParams);
    if (newValue) newParams.set('sort', newValue);
    else newParams.delete('sort');
    setSearchParams(newParams, { replace: true });

    // передача наверх
    if (onChange) onChange(newValue);
  };

  return (
    <div className={styles.sortSelect}>
      <select
        className={styles.select}
        value={sortValue}
        onChange={handleSortChange}
      >
        <option value="">Sort by</option>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
      </select>
      <span className={styles.arrow}></span>
    </div>
  );
};
