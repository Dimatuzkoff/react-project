import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { ISortType } from '@/shared/model/types/ISortType';
import {
  setCategories,
  setBrands,
  setQuery,
  setPriceFilter,
  setSort,
} from '../../model/actionCreators/productsPageActionCreators';

export const useSyncUrlFilters = (searchParams: URLSearchParams) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const urlCategories = searchParams
      .get('categories')
      ?.split(',')
      .map(c => c.toLowerCase());
    const urlBrands = searchParams.get('brands')?.split(',') ?? [];
    const urlQuery = searchParams.get('q') ?? '';

    if (urlCategories?.every(c => typeof c === 'string'))
      dispatch(setCategories(urlCategories));
    if (urlBrands?.every(b => typeof b === 'string'))
      dispatch(setBrands(urlBrands));
    if (urlQuery) dispatch(setQuery(urlQuery));

    const priceMin = parseFloat(searchParams.get('priceMin') || '');
    const priceMax = parseFloat(searchParams.get('priceMax') || '');
    dispatch(
      setPriceFilter({
        min: !isNaN(priceMin) ? priceMin : null,
        max: !isNaN(priceMax) ? priceMax : null,
      })
    );

    const sortTypes: ISortType['type'][] = ['price', 'name', 'rating']; // добавляем новые типы по необходимости
    for (const type of sortTypes) {
      const direction = searchParams.get(type + 'Sort') as
        | ISortType['direction']
        | null;
      if (direction === 'asc' || direction === 'desc') {
        dispatch(setSort({ type, direction }));
        break; // берём только первый найденный сорт
      }
    }
  }, [searchParams, dispatch]);

};
