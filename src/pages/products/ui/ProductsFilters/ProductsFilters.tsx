import { useEffect, useMemo, type FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleCategory,
  toggleBrand,
  setQuery,
  resetFilters,
  setCategories,
  setBrands,
} from '../../model/actionCreators/productsPageActionCreators';
import { getProductsPageState } from '../../model/selectors/productsPageSelectors';
import { getUniqueCategories } from '@/entities/product/libs/helpers/getUniqueCategories';
import { getUniqueBrands } from '@/entities/product/libs/helpers/getUniqueBrands';
import { ProductsFilterCheckbox } from '../ProductsFilterCheckbox/ProductsFilterCheckbox';
import { ProductsSortSelect } from '../ProductsSortSelect';
import { ProductsPriceFilter } from '../ProductsPriceFilter';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/input';
import Search from '@/shared/libs/assets/svg/icons/search.svg';
import styles from './ProductsFilters.module.scss';

export const ProductsFilters: FC = () => {
  const categories = useMemo(() => getUniqueCategories(), []);
  const brands = useMemo(() => getUniqueBrands(), []);
  const dispatch = useDispatch();
  const { selectedCategories, selectedBrands, query } =
    useSelector(getProductsPageState);

  const [searchParams, setSearchParams] = useSearchParams();

  // --- инициализация из URL ---
  useEffect(() => {
    const urlCategories = searchParams.get('categories')?.split(',') ?? [];
    const urlBrands = searchParams.get('brands')?.split(',') ?? [];
    const urlQuery = searchParams.get('q') ?? '';

    if (urlCategories.length) dispatch(setCategories(urlCategories));
    if (urlBrands.length) dispatch(setBrands(urlBrands));
    if (urlQuery) dispatch(setQuery(urlQuery));
  }, [dispatch]);

  // --- синхронизация URL при изменении фильтров ---
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategories.length)
      params.set('categories', selectedCategories.join(','));
    if (selectedBrands.length) params.set('brands', selectedBrands.join(','));
    if (query) params.set('q', query);
    setSearchParams(params);
  }, [selectedCategories, selectedBrands, query, setSearchParams]);

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
        {categories.map(cat => (
          <ProductsFilterCheckbox
            key={cat.id}
            label={cat.name}
            checked={selectedCategories.includes(cat.name)}
            onChange={() => categoryChange(cat.name)}
          />
        ))}
      </div>

      <div className={styles.filterGroup}>
        <h4>Бренди</h4>
        {brands.map(brand => (
          <ProductsFilterCheckbox
            key={brand}
            label={brand}
            checked={selectedBrands.includes(brand)}
            onChange={() => brandChange(brand)}
          />
        ))}
      </div>
    </div>
  );
};
