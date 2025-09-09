import type { ISortOption } from '@/shared/model/types/ISortOptions';

export const priceSortOptions: ISortOption[] = [
  { value: 'asc', label: 'Price min → max' },
  { value: 'desc', label: 'Price max → min' },
];

export const nameSortOptions: ISortOption[] = [
  { value: 'asc', label: 'Name A-Z' },
  { value: 'desc', label: 'Name Z-A' },
];
