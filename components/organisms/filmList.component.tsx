import { FilmListProps } from '@/types/index.types';
import { Loader } from '../atoms/loader.component';
import { ErrorMessage } from '../atoms/errorMessage.component';
import { FilmCard } from '../molecules/filmCard.component';
import { FlatList, StyleSheet } from 'react-native';

export function FilmList({ films, isLoading, error }: FilmListProps) {
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <FlatList
      data={films}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <FilmCard film={item} />}
      contentContainerStyle={styles.container}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
});
