import { useQueryParams } from './useQueryParams';

export const usePageParam = () => {
  const { searchParams, setParam } = useQueryParams();
  const page = Number(searchParams.get('page')) || 1;

  const setPage = (newPage: number) => {
    if (newPage < 1) return;
    setParam('page', newPage);
  };

  return { page, setPage };
};
