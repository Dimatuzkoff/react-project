// react
import { useEffect, useMemo, type FC } from 'react';
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
import { usePageParam } from '@/shared/libs/hooks/usePageParam';

export const ProductsFilters: FC = () => {
  const categories = useMemo(() => getUniqueCategories(), []);
  const brands = useMemo(() => getUniqueBrands(), []);
  const dispatch = useDispatch();
  const { setPage } = usePageParam();

  const { selectedCategories, selectedBrands, query, priceFilter, sort } =
    useSelector(getProductsPageState);

  const [searchParams, setSearchParams] = useSearchParams();

  // --- инициализация из URL ---
  useSyncUrlFilters(searchParams);

  // --- синхронизация URL при изменении фильтров ---
  useEffect(() => {
    // Клонируем текущие параметры, чтобы не сбросить page и другие query
    const params = new URLSearchParams(searchParams.toString());

    if (selectedCategories.length)
      params.set('categories', selectedCategories.join(','));
    else params.delete('categories');

    if (selectedBrands.length) params.set('brands', selectedBrands.join(','));
    else params.delete('brands');

    if (query) params.set('q', query);
    else params.delete('q');

    if (priceFilter?.min != null)
      params.set('priceMin', String(priceFilter.min));
    else params.delete('priceMin');

    if (priceFilter?.max != null)
      params.set('priceMax', String(priceFilter.max));
    else params.delete('priceMax');

    if (sort) params.set('sort', `${sort.type}-${sort.direction}`);
    else params.delete('sort');

    // сброс страницы на 1 при фильтрах или поиске
    if (
      selectedCategories.length ||
      selectedBrands.length ||
      query ||
      priceFilter?.min != null ||
      priceFilter?.max != null ||
      sort
    ) {
      params.set('page', '1');
    }

    setSearchParams(params);
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
          iconBefore={<img src={Search} alt="cart" />}
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
          onChange={val => {
            if (!val) {
              dispatch(setSort(null));
            } else {
              dispatch(setSort(val));
            }
          }}
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
            label: cat.name, // отображение с первой заглавной буквой
            checked: selectedCategories.includes(cat.name.toLowerCase()), // сравниваем с state в нижнем регистре
            onChange: () => categoryChange(cat.name.toLowerCase()), // диспатчим toggle
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
        <Button children="Очистити фільтри" uiColor="danger" onClick={reset} />
      </div>
    </div>
  );
};
