// react
import type { FC } from 'react';
// hooks
import { usePageParam } from '@/shared/libs/hooks/usePageParam';
// components
import { Button } from '../Button';
// styles
import styles from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({ totalPages }) => {
  const { page, setPage } = usePageParam();
  return (
    <div className={styles.pagination}>
      <Button
        uiColor="danger"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        ←
      </Button>

      <div className={styles.counter}>
        {page} / {totalPages}
      </div>

      <Button
        uiColor="danger"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
       →
      </Button>
    </div>
  );
};
