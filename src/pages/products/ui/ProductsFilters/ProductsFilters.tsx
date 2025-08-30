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
  setCategories,
  setBrands,
  setPriceFilter,
  setPriceSortDirection,
  setNameSortDirection,
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
// assets
import Search from '@/shared/libs/assets/svg/icons/search.svg';
// styles
import styles from './ProductsFilters.module.scss';

export const ProductsFilters: FC = () => {
  const categories = useMemo(() => getUniqueCategories(), []);
  const brands = useMemo(() => getUniqueBrands(), []);
  const dispatch = useDispatch();

  const {
    selectedCategories,
    selectedBrands,
    query,
    priceFilter,
    priceSortDirection,
    nameSortDirection,
  } = useSelector(getProductsPageState);

  const [searchParams, setSearchParams] = useSearchParams();

  // --- инициализация из URL ---
  useEffect(() => {
    const urlCategories = searchParams.get('categories')?.split(',') ?? [];
    const urlBrands = searchParams.get('brands')?.split(',') ?? [];
    const urlQuery = searchParams.get('q') ?? '';
    const urlPriceMin = searchParams.get('priceMin');
    const urlPriceMax = searchParams.get('priceMax');
    const urlPriceSort = searchParams.get('priceSort') as 'asc' | 'desc' | null;
    const urlNameSort = searchParams.get('nameSort') as 'asc' | 'desc' | null;

    if (urlCategories.length) dispatch(setCategories(urlCategories));
    if (urlBrands.length) dispatch(setBrands(urlBrands));
    if (urlQuery) dispatch(setQuery(urlQuery));
    if (urlPriceMin || urlPriceMax) {
      dispatch(
        setPriceFilter({
          min: urlPriceMin ? Number(urlPriceMin) : null,
          max: urlPriceMax ? Number(urlPriceMax) : null,
        })
      );
    }
    if (urlPriceSort) dispatch(setPriceSortDirection(urlPriceSort));
    if (urlNameSort) dispatch(setNameSortDirection(urlNameSort));
  }, []);

  // --- синхронизация URL при изменении фильтров ---
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategories.length)
      params.set('categories', selectedCategories.join(','));
    if (selectedBrands.length) params.set('brands', selectedBrands.join(','));
    if (query) params.set('q', query);
    if (priceFilter?.min != null)
      params.set('priceMin', String(priceFilter.min));
    if (priceFilter?.max != null)
      params.set('priceMax', String(priceFilter.max));
    if (priceSortDirection) params.set('priceSort', priceSortDirection);
    if (nameSortDirection) params.set('nameSort', nameSortDirection);

    setSearchParams(params);
  }, [
    selectedCategories,
    selectedBrands,
    query,
    priceFilter,
    priceSortDirection,
    nameSortDirection,
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
          type="text"
          iconBefore={<img src={Search} alt="cart" />}
          uiType="outline"
          placeholder="Search products..."
        />
      </div>

      <div className={styles.filterGroup}>
        <h4>Сортування</h4>
        <ProductsSortSelect />
      </div>

      <div className={styles.filterGroup}>
        <h4>Ціна</h4>
        <ProductsPriceFilter />
      </div>

      <div className={styles.filterGroup}>
        <Button children="Очистити фільтри" uiColor="danger" onClick={reset} />
      </div>

      <div className={styles.filterGroup}>
        <h4>Категорії</h4>
        <ProductsFilterCheckboxList
          items={categories.map(cat => ({
            label: cat.name,
            checked: selectedCategories.includes(cat.name),
            onChange: () => categoryChange(cat.name),
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
    </div>
  );
};
