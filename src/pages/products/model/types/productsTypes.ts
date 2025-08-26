export interface ProductsPageStateSchema {
  priceSortDirection: 'asc' | 'desc' | null;
  nameSortDirection: 'asc' | 'desc' | null;
  priceFilter: {
    min: number | null;
    max: number | null;
  } | null;
  query: string | null;
  selectedCategories: string[];
  selectedBrands: string[];
}