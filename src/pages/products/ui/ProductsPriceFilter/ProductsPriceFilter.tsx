// react
import type { FC } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setPriceFilter } from '../../model/actionCreators/productsPageActionCreators';
import { getProductsPageState } from '../../model/selectors/productsPageSelectors';
// components
import { Input } from '@/shared/ui/input';
// styles
import styles from './ProductsPriceFilter.module.scss';

export const ProductsPriceFilter: FC = () => {
  const dispatch = useDispatch();
  const { priceFilter } = useSelector(getProductsPageState);

  const handleChange = (field: 'min' | 'max', value: string) => {
    const numValue = value === '' ? null : Number(value);

    dispatch(
      setPriceFilter({
        min: field === 'min' ? numValue : (priceFilter?.min ?? null),
        max: field === 'max' ? numValue : (priceFilter?.max ?? null),
      })
    );
  };

  return (
    <div className={styles.priceFilter}>
      <div className={styles.inputWrapper}>
        <Input
          type="number"
          placeholder="Min price"
          value={priceFilter?.min ?? ''}
          onChange={e => handleChange('min', e.target.value)}
        />
      </div>

      <span className={styles.separator}>-</span>
      <div className={styles.inputWrapper}>
        <Input
          type="number"
          placeholder="Max price"
          value={priceFilter?.max ?? ''}
          onChange={e => handleChange('max', e.target.value)}
        />
      </div>
    </div>
  );
};
