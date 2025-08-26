import type { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPriceSortDirection,
  setNameSortDirection,
} from '../../model/actionCreators/productsPageActionCreators';
import { getProductsPageState } from '../../model/selectors/productsPageSelectors';
import styles from './ProductsSortSelect.module.scss';

export const ProductsSortSelect: FC = () => {
  const dispatch = useDispatch();
  const { priceSortDirection, nameSortDirection } =
    useSelector(getProductsPageState);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'price-asc') dispatch(setPriceSortDirection('asc'));
    else if (value === 'price-desc') dispatch(setPriceSortDirection('desc'));
    else if (value === 'name-asc') dispatch(setNameSortDirection('asc'));
    else if (value === 'name-desc') dispatch(setNameSortDirection('desc'));
  };

  return (
    <div className={styles.sortSelect}>
      <select
        className={styles.select}
        value={
          priceSortDirection
            ? `price-${priceSortDirection}`
            : nameSortDirection
              ? `name-${nameSortDirection}`
              : ''
        }
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
