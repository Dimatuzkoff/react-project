import { useSearchParams } from 'react-router-dom';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setParam = (key: string, value: string | number | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === null || value === '') {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }

    // тут реально обновляем
    console.log('🚨 setSearchParams called with:', params.toString());
    setSearchParams(params, { replace: false });
  };

  return { searchParams, setParam };
};
