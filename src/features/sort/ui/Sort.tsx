// features/sort/Sort.tsx
import type { FC } from 'react';

export interface SortOption {
  label: string;
  type: 'price' | 'alpha';
  value: 'asc' | 'desc';
}

interface SortProps {
  title?: string;
  options: readonly SortOption[];
  onChange: (value: 'asc' | 'desc', type: 'price' | 'alpha') => void;
}


export const Sort: FC<SortProps> = ({ title, options, onChange }) => {
  return (
    <label>
      {title && <span>{title}: </span>}
      <select
        onChange={e => {
          const selected = options.find(opt => opt.label === e.target.value);
          if (selected) onChange(selected.value, selected.type);
        }}
      >
        <option value="">Select</option>
        {options.map(opt => (
          <option key={opt.label} value={opt.label}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
};
