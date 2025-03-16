import { fetchPeople, fetchPeopleById } from '@/api';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useGetPeople = (search?: string) => {
  return useInfiniteQuery({
    queryKey: ['people', search],
    queryFn: async ({ pageParam = 1 }) => fetchPeople(search, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.next ? lastPage.page + 1 : undefined,
  });
};
export const useGetPeopleById = (id: string) => {
  return useQuery({
    queryKey: ['peopleId', id],
    queryFn: () => fetchPeopleById(id),
    enabled: !!id,
  });
};
