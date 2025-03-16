import { Planet } from '@/types/index.types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../themedText.component';
import { router } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';

export function PlanetCard({ planet }: { planet: Planet }) {
  const path: string = `/planet/${planet.id}`;
  const colors = useThemeColor();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
      onPress={() => router.push(path as any)}
    >
      <ThemedText style={styles.name}>{planet.nombre}</ThemedText>
      <View style={styles.details}>
        <ThemedText style={styles.detail}>Clima: {planet.clima}</ThemedText>
        <ThemedText style={styles.detail}>Terreno: {planet.terreno}</ThemedText>
        <ThemedText style={styles.detail}>
          Población: {planet.poblacion}
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
