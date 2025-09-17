// hooks/useSyncUrlFilters.ts
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { ISortType } from '@/shared/model/types/ISortType';
import {
  setCategories,
  setBrands,
  setQuery,
  setPriceFilter,
  setPriceSortDirection,
  setNameSortDirection,
} from '../../model/actionCreators/productsPageActionCreators';

export const useSyncUrlFilters = (searchParams: URLSearchParams) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const urlCategories =
      searchParams
        .get('categories')
        ?.split(',')
        .map(c => c.toLowerCase()) ?? [];
    dispatch(setCategories(urlCategories));

    const urlBrands = searchParams.get('brands')?.split(',') ?? [];
    const urlQuery = searchParams.get('q') ?? '';

    const priceMin = searchParams.get('priceMin')
      ? Number(searchParams.get('priceMin'))
      : null;
    const priceMax = searchParams.get('priceMax')
      ? Number(searchParams.get('priceMax'))
      : null;

    const urlPriceSortRaw = searchParams.get('priceSort');
    const urlNameSortRaw = searchParams.get('nameSort');

    // Тайпгварды
    const isStringArray = (arr: unknown): arr is string[] =>
      Array.isArray(arr) && arr.every(a => typeof a === 'string');

    const isSortDirection = (val: unknown): val is ISortType['direction'] =>
      val === 'asc' || val === 'desc';

    if (isStringArray(urlCategories)) dispatch(setCategories(urlCategories));
    if (isStringArray(urlBrands)) dispatch(setBrands(urlBrands));
    if (typeof urlQuery === 'string' && urlQuery) dispatch(setQuery(urlQuery));

    if (priceMin !== null || priceMax !== null) {
      dispatch(setPriceFilter({ min: priceMin, max: priceMax }));
    }

    if (isSortDirection(urlPriceSortRaw))
      dispatch(setPriceSortDirection(urlPriceSortRaw));
    if (isSortDirection(urlNameSortRaw))
      dispatch(setNameSortDirection(urlNameSortRaw));
  }, [searchParams, dispatch]);
};
