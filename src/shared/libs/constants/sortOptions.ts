import type { ISortOption } from '@/shared/model/types/ISortOptions';

export const sortOptions: ISortOption[] = [
  { value: { type: 'price', direction: 'asc' }, label: 'Price min → max' },
  { value: { type: 'price', direction: 'desc' }, label: 'Price max → min' },
  { value: { type: 'name', direction: 'asc' }, label: 'Name A-Z' },
  { value: { type: 'name', direction: 'desc' }, label: 'Name Z-A' },
  { value: { type: 'rating', direction: 'asc' }, label: 'Rating low → high' },
  { value: { type: 'rating', direction: 'desc' }, label: 'Rating high → low' },
];
