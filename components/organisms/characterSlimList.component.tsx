import { CharacterListProps } from '@/types/index.types';
import { ErrorMessage } from '../atoms/errorMessage.component';
import { Loader } from '../atoms/loader.component';
import { CharacterSlimCard } from '../molecules/characterSlimCard.component';
import { StyleSheet, ScrollView } from 'react-native';

export function CharacterSlimList({
  characters,
  isLoading,
  error,
}: CharacterListProps) {
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <ScrollView style={styles.container} horizontal>
      {characters.map((character) => (
        <CharacterSlimCard character={character} key={character.id} />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
  },
});
