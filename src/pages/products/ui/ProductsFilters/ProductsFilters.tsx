// react
import { useEffect, useMemo, useRef, type FC } from 'react';
import { useSearchParams } from 'react-router-dom';
// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleCategory,
  toggleBrand,
  setQuery,
  resetFilters,
  setSort,
} from '../../model/actionCreators/productsPageActionCreators';
import { getProductsPageState } from '../../model/selectors/productsPageSelectors';
// helpers
import { getUniqueCategories } from '@/entities/product/libs/helpers/getUniqueCategories';
import { getUniqueBrands } from '@/entities/product/libs/helpers/getUniqueBrands';
// components
import { ProductsSortSelect } from '../ProductsSortSelect';
import { ProductsPriceFilter } from '../ProductsPriceFilter';
import { ProductsFilterCheckboxList } from '../ProductsFilterCheckboxList';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/input';
// hooks
import { useSyncUrlFilters } from '../../libs/hooks/useSyncUrlFilters';
// constants
import { sortOptions } from '@/shared/libs/constants/sortOptions';
// assets
import Search from '@/shared/libs/assets/svg/icons/search.svg';
// styles
import styles from './ProductsFilters.module.scss';

// Типизация фильтров (можно вынести в отдельный файл)
interface FiltersState {
  query: string | null;
  sort: { type: string; direction: string } | null;
  priceFilter: { min: number | null; max: number | null } | null;
  categories: string[];
  brands: string[];
}

export const ProductsFilters: FC = () => {
  const categories = useMemo(() => getUniqueCategories(), []);
  const brands = useMemo(() => getUniqueBrands(), []);
  const dispatch = useDispatch();

  const { selectedCategories, selectedBrands, query, priceFilter, sort } =
    useSelector(getProductsPageState);

  const [searchParams, setSearchParams] = useSearchParams();

  // --- инициализация из URL ---
  useSyncUrlFilters(searchParams);

  // хранение предыдущих фильтров
  const prevFiltersRef = useRef<FiltersState>({
    query: null,
    sort: null,
    priceFilter: null,
    categories: [],
    brands: [],
  });

  // --- синхронизация URL при изменении фильтров ---
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    // categories
    if (selectedCategories.length) {
      params.set('categories', selectedCategories.join(','));
    } else {
      params.delete('categories');
    }

    // brands
    if (selectedBrands.length) {
      params.set('brands', selectedBrands.join(','));
    } else {
      params.delete('brands');
    }

    // query
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }

    // priceFilter
    if (priceFilter?.min != null) {
      params.set('priceMin', String(priceFilter.min));
    } else {
      params.delete('priceMin');
    }

    if (priceFilter?.max != null) {
      params.set('priceMax', String(priceFilter.max));
    } else {
      params.delete('priceMax');
    }

    // sort
    if (sort) {
      params.set('sort', `${sort.type}-${sort.direction}`);
    } else {
      params.delete('sort');
    }

    // --- сравниваем с предыдущими ---
    const prev = prevFiltersRef.current;
    const filtersChanged =
      prev.query !== query ||
      prev.sort?.type !== sort?.type ||
      prev.sort?.direction !== sort?.direction ||
      prev.priceFilter?.min !== priceFilter?.min ||
      prev.priceFilter?.max !== priceFilter?.max ||
      prev.categories.join(',') !== selectedCategories.join(',') ||
      prev.brands.join(',') !== selectedBrands.join(',');

    if (filtersChanged) {
      params.set('page', '1');
    }

    setSearchParams(params);

    // обновляем prev
    prevFiltersRef.current = {
      query,
      sort,
      priceFilter,
      categories: [...selectedCategories],
      brands: [...selectedBrands],
    };
  }, [
    selectedCategories,
    selectedBrands,
    query,
    priceFilter,
    sort,
    searchParams,
    setSearchParams,
  ]);

  const reset = () => {
    dispatch(resetFilters());
    setSearchParams({});
  };

  const categoryChange = (category: string) =>
    dispatch(toggleCategory(category));
  const brandChange = (brand: string) => dispatch(toggleBrand(brand));
  const queryChange = (value: string) => dispatch(setQuery(value));

  return (
    <div className={styles.filters}>
      <div className={styles.filterGroup}>
        <h4>Пошук продуктів</h4>
        <Input
          value={query ?? ''}
          onChange={e => queryChange(e.target.value)}
          type="search"
          iconBefore={<img src={Search} alt="search" />}
          uiType="outline"
          placeholder="Search products..."
        />
      </div>

      <div className={styles.filterGroup}>
        <h4>Сортування:</h4>
        <ProductsSortSelect
          value={sort}
          placeholder="Sort by ..."
          options={sortOptions}
          onChange={val => dispatch(setSort(val ?? null))}
        />
      </div>

      <div className={styles.filterGroup}>
        <h4>Ціна</h4>
        <ProductsPriceFilter />
      </div>

      <div className={styles.filterGroup}>
        <h4>Категорії</h4>
        <ProductsFilterCheckboxList
          items={categories.map(cat => ({
            label: cat.name,
            checked: selectedCategories.includes(cat.name.toLowerCase()),
            onChange: () => categoryChange(cat.name.toLowerCase()),
          }))}
        />
      </div>

      <div className={styles.filterGroup}>
        <h4>Бренди</h4>
        <ProductsFilterCheckboxList
          items={brands.map(brand => ({
            label: brand,
            checked: selectedBrands.includes(brand),
            onChange: () => brandChange(brand),
          }))}
        />
      </div>

      <div className={styles.filterGroup}>
        <Button uiColor="danger" onClick={reset}>
          Очистити фільтри
        </Button>
      </div>
    </div>
  );
};
