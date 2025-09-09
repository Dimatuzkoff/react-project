import type { ISortType } from "@/shared/model/types/ISortType";

export interface ProductsPageStateSchema {
  priceSortDirection: ISortType['direction'] | null;
  nameSortDirection: ISortType['direction'] | null;
  priceFilter: {
    min: number | null;
    max: number | null;
  } | null;
  query: string | null;
  selectedCategories: string[];
  selectedBrands: string[];
  lastSort: ISortType['type'] | null;
}