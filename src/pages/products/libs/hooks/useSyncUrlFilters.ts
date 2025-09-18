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

    const urlPriceSortRaw = searchParams.get('priceSort') as
      | ISortType['direction']
      | null;
    const urlNameSortRaw = searchParams.get('nameSort') as
      | ISortType['direction']
      | null;

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

    // единый сорт
    if (isSortDirection(urlPriceSortRaw)) {
      dispatch(setSort({ type: 'price', direction: urlPriceSortRaw }));
    } else if (isSortDirection(urlNameSortRaw)) {
      dispatch(setSort({ type: 'name', direction: urlNameSortRaw }));
    }
  }, [searchParams, dispatch]);
};
