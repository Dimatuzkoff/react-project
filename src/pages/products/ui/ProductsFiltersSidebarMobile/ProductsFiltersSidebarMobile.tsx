import type { FC } from 'react';
import { Drawer } from '@/shared/ui/Drawer'; // твой дровер
import { ProductsFilters } from '../ProductsFilters';

interface ProductsFiltersSidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductsFiltersSidebarMobile: FC<
  ProductsFiltersSidebarMobileProps
> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Фільтри">
      <ProductsFilters />
    </Drawer>
  );
};
