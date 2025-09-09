// react
import { useState, type FC } from 'react';
// components
import { Checkbox } from '@/shared/ui/Checkbox';
import { Button } from '@/shared/ui/Button';
// styles
import styles from './ProductsFilterCheckboxList.module.scss';

interface ProductsFilterCheckboxListProps {
  items: { label: string; checked: boolean; onChange: () => void }[];
  initialVisible?: number;
}

export const ProductsFilterCheckboxList: FC<
  ProductsFilterCheckboxListProps
> = ({ items, initialVisible = 10 }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, initialVisible);

  const toggleShowAll = () => setShowAll(prev => !prev);

  return (
    <div className={styles.checkboxList}>
      {visibleItems.map((item, index) => (
        <Checkbox
          key={index}
          label={item.label}
          checked={item.checked}
          onChange={item.onChange}
        />
      ))}

      {items.length > initialVisible && (
        <div className={styles.showMoreButton}>
          <Button
            type="button"
            onClick={toggleShowAll}
            uiColor="primary"
            uiType="outline"
          >
            {showAll ? 'Згорнути' : 'Показати ще'}
          </Button>
        </div>
      )}
    </div>
  );
};
