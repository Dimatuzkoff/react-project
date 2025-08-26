// react
import type { FC } from 'react';
import { Input } from '@/shared/ui/input';
import styles from './ProductsPriceFilter.module.scss';

interface ProductsPriceFilterProps {
  min: number | null;
  max: number | null;
  onChange: (field: 'min' | 'max', value: string) => void;
}

export const ProductsPriceFilter2: FC<ProductsPriceFilterProps> = ({
  min,
  max,
  onChange,
}) => {
  return (
    <div className={styles.priceFilter}>
      <div className={styles.inputWrapper}>
        <Input
          type="number"
          placeholder="Min price"
          value={min ?? ''}
          onChange={e => onChange('min', e.target.value)}
        />
      </div>

      <span className={styles.separator}>-</span>

      <div className={styles.inputWrapper}>
        <Input
          type="number"
          placeholder="Max price"
          value={max ?? ''}
          onChange={e => onChange('max', e.target.value)}
        />
      </div>
    </div>
  );
};
