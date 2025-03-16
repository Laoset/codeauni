import { LoadMoreButton } from '@/components/atoms/loadMoreButton.component';
import { SearchInput } from '@/components/atoms/searchInput.component';
import { CharacterList } from '@/components/organisms/characterList.component';
import { ThemedView } from '@/components/themedView.component';
import { useGetPeople } from '@/hooks/usePeople.hooks';
import { useState } from 'react';

export default function CharactersScreen() {
  const [search, setSearch] = useState('');
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPeople(search);

  const characters = data?.pages.flatMap((page) => page.results) || [];

  return (
    <ThemedView>
      <SearchInput
        value={search}
        onChangeText={setSearch}
        placeholder='Buscar personajes...'
      />
      <CharacterList characters={characters} isLoading={isLoading} />
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
