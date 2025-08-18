// components
import { Drawer } from '@/shared/ui/Drawer';
import { CategoriesSidebar } from '@/widgets/categoriesSidebar/ui/CategoriesSidebar';

interface CategoriesSidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CategoriesSidebarMobile: React.FC<
  CategoriesSidebarMobileProps
> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Categories">
      <CategoriesSidebar />
    </Drawer>
  );
};
