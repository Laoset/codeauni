import { CharacterSlimList } from '@/components/organisms/characterSlimList.component';
import { ThemedText } from '@/components/themedText.component';
import { useGetPeople } from '@/hooks/usePeople.hooks';
import { StyleSheet, Image, View, ScrollView, Pressable } from 'react-native';
import IconGroup from '@/components/molecules/iconGroup.component';
import { SearchWithSuggestions } from '@/components/molecules/searchWithSuggestions.component';
import { router } from 'expo-router';
import ThemeButton from '@/components/atoms/themeButton.component';

export default function HomeScreen() {
  const { data, isLoading } = useGetPeople();
  const allCharacters = data?.pages.flatMap((page) => page.results) || [];
  const featuredCharacters = allCharacters.filter(
    (character) =>
      character.nombre === 'Luke Skywalker' ||
      character.nombre === 'Darth Vader' ||
      character.nombre === 'Leia Organa'
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <ThemedText type='title' style={styles.title}>
          Star Wars Wiki
        </ThemedText>
        <ThemeButton />
        <SearchWithSuggestions />

        <ThemedText type='subtitle' style={styles.subtitle}>
          Categorias
        </ThemedText>
        <IconGroup />

        <ThemedText type='subtitle' style={styles.subtitle}>
          Personajes principales
        </ThemedText>
        <CharacterSlimList
          characters={featuredCharacters}
          isLoading={isLoading}
        />

        <ThemedText type='subtitle' style={styles.subtitle}>
          Empieza por
        </ThemedText>

        <View style={styles.recommendationContainer}>
          <Pressable
            onPress={() => router.push('/film/4' as any)}
            style={styles.recommendationPressable}
          >
            <Image
              source={require('../../assets/images/sw1.jpg')}
              style={styles.recommendationImage}
            />
            <ThemedText style={styles.recommendationText}>
              The Phantom Menace
            </ThemedText>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    overflowY: 'visible',
  },
  title: {
    marginVertical: 16,
    textAlign: 'center',
    fontSize: 56,
  },
  subtitle: {
    marginTop: 24,
    marginBottom: 16,
  },
  recommendationContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  recommendationPressable: {
    alignItems: 'center',
  },
  recommendationImage: {
    width: 200,
    height: 250,
    objectFit: 'contain',
  },
  recommendationText: {
    marginTop: 8,
  },
});
