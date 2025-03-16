import { LoadMoreButton } from '@/components/atoms/loadMoreButton.component';
import { SearchInput } from '@/components/atoms/searchInput.component';
import { FilmList } from '@/components/organisms/filmList.component';
import { ThemedView } from '@/components/themedView.component';
import { useGetFilms } from '@/hooks/useFilms.hooks';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

export default function FilmsScreen() {
  const [search, setSearch] = useState('');
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetFilms(search);

  const films = data?.pages.flatMap((page) => page.results) || [];

  return (
    <ThemedView>
      <SearchInput
        value={search}
        onChangeText={setSearch}
        placeholder='Buscar peliculas...'
      />
      <FilmList films={films} isLoading={isLoading} />
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
});
