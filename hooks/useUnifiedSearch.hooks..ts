import { fetchUnifiedSearch } from '@/api';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useUnifiedSearch = (search?: string) => {
  return useInfiniteQuery({
    queryKey: ['unifiedSearch', search],
    queryFn: async ({ pageParam = 1 }) => fetchUnifiedSearch(search, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.next ? lastPage.page + 1 : undefined,
  });
};
