import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { CharacterCardProps } from '@/types/index.types';
import { ThemedText } from '../themedText.component';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';

export function CharacterCard({ character }: CharacterCardProps) {
  const path: string = `/character/${character.id}`;
  const colors = useThemeColor();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
      onPress={() => router.push(path as any)}
    >
      <ThemedText style={styles.name}>{character.nombre}</ThemedText>
      <View style={styles.details}>
        <ThemedText style={styles.detail}>
          Género: {character.genero}
        </ThemedText>
        <ThemedText style={styles.detail}>
          Año de nacimiento: {character.año_nacimiento}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    maxHeight: 120,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    gap: 4,
  },
  detail: {
    fontSize: 14,
  },
});
