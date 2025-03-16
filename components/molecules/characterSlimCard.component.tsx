import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { CharacterCardProps } from '@/types/index.types';
import { router } from 'expo-router';
import { ThemedText } from '../themedText.component';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';

export function CharacterSlimCard({ character }: CharacterCardProps) {
  const path: string = `/character/${character.id}`;
  const color = useThemeColor();

  const selectImage = () => {
    switch (character.nombre) {
      case 'Luke Skywalker':
        return require('../../assets/images/luke.jpeg');
      case 'Darth Vader':
        return require('../../assets/images/darth.jpg');
      case 'Leia Organa':
        return require('../../assets/images/leia.jpeg');
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color.backgroundSecondary }]}
      onPress={() => router.push(path as any)}
    >
      <View style={styles.imageContainer}>
        <Image source={selectImage()} style={styles.image} />
      </View>
      <ThemedText style={styles.name}>{character.nombre}</ThemedText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    width: 140,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 232, 31, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    textAlign: 'center',
    marginBottom: 4,
  },
});
