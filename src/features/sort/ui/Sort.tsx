// features/sort/Sort.tsx
import type { FC } from 'react';

export interface SortOption {
  label: string;
  type: 'price' | 'alpha';
  value: 'asc' | 'desc';
}

interface SortProps {
  options: SortOption[];
  onChange: (option: SortOption) => void;
}

export const Sort: FC<SortProps> = ({ options, onChange }) => {
  return (
    <label>
      Sort:
      <select
        onChange={e => {
          const selected = options.find(opt => opt.label === e.target.value);
          if (selected) onChange(selected);
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
