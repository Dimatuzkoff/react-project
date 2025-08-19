import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ProductList } from '@/entities/product/ui/ProductList';
import { Filters } from '@/features/filters';
import { Sort, type SortOption } from '@/features/sort';
import { products as mockProducts } from '@/mockData/products';
import { productActionCreators } from '@/entities/product/model/actionCreators/productActionCreators';
import type { StateSchema } from '@/app/config/store/stateSchema';
import styles from './ProductsPage.module.scss';

export const ProductsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { setProducts, setFilters, setSort } = productActionCreators;

  const allProducts = useSelector(
    (state: StateSchema) => state.products.products
  );
  const filteredProducts = useSelector(
    (state: StateSchema) => state.products.filteredProducts
  );

  const [searchParams, setSearchParams] = useSearchParams();

  // --- Инициализация Redux с мок-данными
  useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  // --- Опции фильтров
  const categories = Array.from(new Set(mockProducts.map(p => p.category)));
  const filterOptions = categories.map(cat => ({
    label: cat.charAt(0).toUpperCase() + cat.slice(1),
    value: cat,
  }));

  // --- Опции сортировки
  const priceSortOptions: readonly SortOption[] = [
    { label: 'Price Asc', value: 'asc', type: 'price' },
    { label: 'Price Desc', value: 'desc', type: 'price' },
  ];

  const alphaSortOptions: readonly SortOption[] = [
    { label: 'A → Z', value: 'asc', type: 'alpha' },
    { label: 'Z → A', value: 'desc', type: 'alpha' },
  ];

  // --- Начальные значения из query
  const initialCategories = searchParams.get('category')?.split(',') || [];
  const initialPriceSort = (searchParams.get('priceSort') || '') as
    | 'asc'
    | 'desc'
    | '';
  const initialAlphaSort = (searchParams.get('alphaSort') || '') as
    | 'asc'
    | 'desc'
    | '';

  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(initialCategories);
  const [selectedPriceSort, setSelectedPriceSort] = useState<
    'asc' | 'desc' | ''
  >(initialPriceSort);
  const [selectedAlphaSort, setSelectedAlphaSort] = useState<
    'asc' | 'desc' | ''
  >(initialAlphaSort);

  // --- Инициализация фильтров и сортировки при монтировании
  useEffect(() => {
    if (selectedCategories.length) {
      dispatch(setFilters({ category: selectedCategories }));
    }
    if (selectedPriceSort) {
      dispatch(setSort({ type: 'price', value: selectedPriceSort }));
    }
    if (selectedAlphaSort) {
      dispatch(setSort({ type: 'alpha', value: selectedAlphaSort }));
    }
  }, [dispatch, selectedCategories, selectedPriceSort, selectedAlphaSort]);

  // --- Обработчики
  const handleFilterChange = (newSelected: string[]) => {
    setSelectedCategories(newSelected);
    dispatch(setFilters({ category: newSelected }));
    setSearchParams({
      category: newSelected.join(','),
      priceSort: selectedPriceSort,
      alphaSort: selectedAlphaSort,
    });
  };

  const handleSortChange = (type: 'price' | 'alpha', value: 'asc' | 'desc') => {
    if (type === 'price') setSelectedPriceSort(value);
    if (type === 'alpha') setSelectedAlphaSort(value);
    dispatch(setSort({ type, value }));
    setSearchParams({
      category: selectedCategories.join(','),
      priceSort: type === 'price' ? value : selectedPriceSort,
      alphaSort: type === 'alpha' ? value : selectedAlphaSort,
    });
    console.log(`Sorted by ${type}: ${value}`);
  };

  return (
    <div className={styles.container}>
      <Filters
        options={filterOptions}
        selected={selectedCategories}
        onChange={handleFilterChange}
        title="Categories"
      />

      <div className={styles.right}>
        <div className={styles.sorts}>
          <Sort
            title="Price"
            options={priceSortOptions}
            onChange={(value, type) => handleSortChange(type, value)}
          />

          <Sort
            title="Name"
            options={alphaSortOptions}
            onChange={(value, type) => handleSortChange(type, value)}
          />
        </div>

        <ProductList
          products={filteredProducts.length ? filteredProducts : allProducts}
        />
      </div>
    </div>
  );
};
