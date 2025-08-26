import React from 'react';
// styles
import styles from './ProductsFilterCheckbox.module.scss';

interface ProductsFilterCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const ProductsFilterCheckbox: React.FC<ProductsFilterCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <label className={styles.filterCheckbox}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
};
