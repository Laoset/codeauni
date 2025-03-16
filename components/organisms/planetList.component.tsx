import { PlanetListProps } from '@/types/index.types';
import { FlatList, StyleSheet } from 'react-native';
import { ErrorMessage } from '../atoms/errorMessage.component';
import { Loader } from '../atoms/loader.component';
import { PlanetCard } from '../molecules/planetCard.component';
export default function PlanetList({
  planets,
  isLoading,
  error,
}: PlanetListProps) {
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <FlatList
      data={planets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlanetCard planet={item} />}
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
