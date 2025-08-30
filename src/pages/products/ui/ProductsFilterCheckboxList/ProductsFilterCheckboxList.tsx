// react
import { useState, type FC } from 'react'
// components
import { ProductsFilterCheckbox } from '../ProductsFilterCheckbox/ProductsFilterCheckbox';
// styles
import styles from './ProductsFilterCheckboxList.module.scss'
import { Button } from '@/shared/ui/Button';

interface ProductsFilterCheckboxListProps {
  items: { label: string; checked: boolean; onChange: () => void }[];
  initialVisible?: number; 
}

export const ProductsFilterCheckboxList: FC<ProductsFilterCheckboxListProps> = ({
  items,
  initialVisible = 10,
}) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, initialVisible);
  return (
    <div className={styles.checkboxList}>
      {visibleItems.map((item, index) => (
        <ProductsFilterCheckbox
          key={index}
          label={item.label}
          checked={item.checked}
          onChange={item.onChange}
        />
      ))}

      {items.length > initialVisible && !showAll && (
        <div className={styles.showMoreButton}>
          <Button
            type="button"
            onClick={() => setShowAll(true)}
            uiColor="primary"
            uiType="outline"
          >
            Показати ще
          </Button>
        </div>
      )}
    </div>
  );
};
