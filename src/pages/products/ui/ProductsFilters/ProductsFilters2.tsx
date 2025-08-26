import { type FC, useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// ui
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/Button';
import { ProductsFilterCheckbox } from '../ProductsFilterCheckbox/ProductsFilterCheckbox';
import { ProductsSortSelect2 } from '../ProductsSortSelect';
import { ProductsPriceFilter2 } from '../ProductsPriceFilter';
// types
import type { Product } from '@/entities/product/model/types/product';
import styles from './ProductsFilters.module.scss';

interface ProductsFiltersProps {
  products: Product[];
  onFilter?: (filtered: Product[]) => void;
}

export const ProductsFilters2: FC<ProductsFiltersProps> = ({
  products,
  onFilter,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [categories, setCategories] = useState<string[]>(
    searchParams.getAll('category')
  );
  const [brands, setBrands] = useState<string[]>(searchParams.getAll('brand'));
  const [price, setPrice] = useState<{
    min: number | null;
    max: number | null;
  }>({
    min: searchParams.get('min') ? Number(searchParams.get('min')) : null,
    max: searchParams.get('max') ? Number(searchParams.get('max')) : null,
  });
  const [sort, setSort] = useState(searchParams.get('sort') || '');

  const uniqueCategories = useMemo(
    () => [...new Set(products.map(p => p.category).filter(Boolean))],
    [products]
  );
  const uniqueBrands = useMemo(
    () => [...new Set(products.map(p => p.brand).filter(Boolean))],
    [products]
  );

  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      const title = p.title ?? '';
      const matchSearch = title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = categories.length
        ? categories.includes(p.category ?? '')
        : true;
      const matchBrand = brands.length ? brands.includes(p.brand ?? '') : true;
      const matchPriceMin =
        price.min !== null ? (p.price ?? 0) >= price.min : true;
      const matchPriceMax =
        price.max !== null ? (p.price ?? 0) <= price.max : true;
      return (
        matchSearch &&
        matchCategory &&
        matchBrand &&
        matchPriceMin &&
        matchPriceMax
      );
    });

    if (sort === 'price-asc')
      result.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    if (sort === 'price-desc')
      result.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    if (sort === 'name-asc')
      result.sort((a, b) => (a.title ?? '').localeCompare(b.title ?? ''));
    if (sort === 'name-desc')
      result.sort((a, b) => (b.title ?? '').localeCompare(a.title ?? ''));

    return result;
  }, [products, search, categories, brands, price, sort]);

  // передача наверх
  useEffect(() => {
    if (onFilter) onFilter(filteredProducts);
  }, [filteredProducts, onFilter]);

  // синхронизация URL
  useEffect(() => {
    const params = new URLSearchParams();

    if (search) params.set('search', search);
    categories.forEach(c => params.append('category', c));
    brands.forEach(b => params.append('brand', b));
    if (price.min !== null) params.set('min', String(price.min));
    if (price.max !== null) params.set('max', String(price.max));
    if (sort) params.set('sort', sort);

    // сравниваем со строкой текущего URL
    if (params.toString() !== window.location.search.replace('?', '')) {
      setSearchParams(params, { replace: true });
    }
  }, [search, categories, brands, price, sort, setSearchParams]); // <--- без searchParams

  const toggleCategory = (category: string) =>
    setCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  const toggleBrand = (brand: string) =>
    setBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  const handlePriceChange = (field: 'min' | 'max', value: string) => {
    const numValue = value === '' ? null : Number(value);
    setPrice(prev => ({ ...prev, [field]: numValue }));
  };
  const resetFilters = () => {
    setSearch('');
    setCategories([]);
    setBrands([]);
    setPrice({ min: null, max: null });
    setSort('');
    setSearchParams({});
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filterGroup}>
        <h4>Search</h4>
        <Input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.filterGroup}>
        <h4>Сортування</h4>
        <ProductsSortSelect2 value={sort} onChange={setSort} />
      </div>

      <div className={styles.filterGroup}>
        <h4>Ціна</h4>
        <ProductsPriceFilter2
          min={price.min}
          max={price.max}
          onChange={handlePriceChange}
        />
      </div>

      <div className={styles.filterGroup}>
        <Button
          children="Очистити фільтри"
          uiColor="danger"
          onClick={resetFilters}
        />
      </div>

      <div className={styles.filterGroup}>
        <h4>Категорії</h4>
        {uniqueCategories.map(c => (
          <ProductsFilterCheckbox
            key={`cat-${c}`}
            label={c}
            checked={categories.includes(c)}
            onChange={() => toggleCategory(c)}
          />
        ))}
      </div>

      <div className={styles.filterGroup}>
        <h4>Бренди</h4>
        {uniqueBrands.map(b => (
          <ProductsFilterCheckbox
            key={`brand-${b}`}
            label={b}
            checked={brands.includes(b)}
            onChange={() => toggleBrand(b)}
          />
        ))}
      </div>
    </div>
  );
};
