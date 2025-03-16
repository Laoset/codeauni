import { fetchFilmById, fetchFilms } from '@/api';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useGetFilms = (search?: string) => {
  return useInfiniteQuery({
    queryKey: ['films', search],
    queryFn: async ({ pageParam = 1 }) => fetchFilms(search, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.next ? lastPage.page + 1 : undefined,
  });
};
export const useGetFilmsById = (id: string) => {
  return useQuery({
    queryKey: ['filmsId', id],
    queryFn: () => fetchFilmById(id),
    enabled: !!id,
  });
};
