import type { ISortType } from "@/shared/model/types/ISortType";

export interface ProductsPageStateSchema {
  sort: ISortType | null;
  priceFilter: {
    min: number | null;
    max: number | null;
  } | null;
  query: string | null;
  selectedCategories: string[];
  selectedBrands: string[];
}