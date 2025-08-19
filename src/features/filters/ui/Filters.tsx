// features/filters/Filters.tsx
import type { FC } from 'react';
// styles
import styles from './Filters.module.scss';

export interface FilterOption {
  label: string;
  value: string;
}

interface FiltersProps {
  options: FilterOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  title?: string;
}

export const Filters: FC<FiltersProps> = ({
  options,
  selected,
  onChange,
  title,
}) => {
  const handleChange = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter(v => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className={styles.filters}>
      {title && <h4>{title}</h4>}
      <ul className={styles.list}>
        {options.map(opt => (
          <li key={opt.value}>
            <label>
              <input
                type="checkbox"
                checked={selected.includes(opt.value)}
                onChange={() => handleChange(opt.value)}
              />
              {opt.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
