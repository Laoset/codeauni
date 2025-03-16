import { LoadMoreButton } from '@/components/atoms/loadMoreButton.component';
import { SearchInput } from '@/components/atoms/searchInput.component';
import PlanetList from '@/components/organisms/planetList.component';
import { ThemedView } from '@/components/themedView.component';
import { useGetPlanets } from '@/hooks/usePlanets.hooks';
import { useState } from 'react';

export default function PlanetsScreen() {
  const [search, setSearch] = useState('');
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPlanets(search);

  const planets = data?.pages.flatMap((page) => page.results) || [];
  return (
    <ThemedView>
      <SearchInput
        value={search}
        onChangeText={setSearch}
        placeholder='Buscar planetas...'
      />
      <PlanetList planets={planets} isLoading={isLoading} />
      {hasNextPage && (
        <LoadMoreButton
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
        />
      )}
    </ThemedView>
  );
}
