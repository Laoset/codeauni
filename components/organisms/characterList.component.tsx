import { FlatList, StyleSheet } from 'react-native';
import { CharacterCard } from '../molecules/characterCard.component';
import { CharacterListProps } from '@/types/index.types';
import { ErrorMessage } from '../atoms/errorMessage.component';
import { Loader } from '../atoms/loader.component';

export function CharacterList({
  characters,
  isLoading,
  error,
}: CharacterListProps) {
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CharacterCard character={item} />}
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
