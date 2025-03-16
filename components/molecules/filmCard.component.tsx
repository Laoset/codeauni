import { Film } from '@/types/index.types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../themedText.component';
import { router } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';

export function FilmCard({ film }: { film: Film }) {
  const path: string = `/film/${film.id}`;
  const colors = useThemeColor();

  return (
    <TouchableOpacity onPress={() => router.push(path as any)}>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.backgroundSecondary },
        ]}
      >
        <ThemedText style={styles.name}>{film.titulo}</ThemedText>
        <View style={styles.details}>
          <ThemedText style={styles.detail}>
            Directo: {film.director}
          </ThemedText>
          <ThemedText style={styles.detail}>
            Fecha de estreno: {film.fecha_lanzamiento}
          </ThemedText>
        </View>
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
