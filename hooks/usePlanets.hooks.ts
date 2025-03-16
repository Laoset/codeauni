import { fetchPlanetById, fetchPlanets } from '@/api';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useGetPlanets = (search?: string) => {
  return useInfiniteQuery({
    queryKey: ['planets', search],
    queryFn: async ({ pageParam = 1 }) => fetchPlanets(search, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.next ? lastPage.page + 1 : undefined,
  });
};
export const useGetPlanetById = (id: string) => {
  return useQuery({
    queryKey: ['planetsId', id],
    queryFn: () => fetchPlanetById(id),
    enabled: !!id,
  });
};
