import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  ScrollView,
} from 'react-native';
import { SearchInput } from '../atoms/searchInput.component';
import { useUnifiedSearch } from '@/hooks/useUnifiedSearch.hooks.';
import { router } from 'expo-router';
import { getResource } from '@/utils/getResource.utils';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';

export function SearchWithSuggestions() {
  const [search, setSearch] = useState('');
  const { data, isLoading } = useUnifiedSearch(search);
  const colors = useThemeColor();

  const suggestions = data?.pages.flatMap((page) => page.results) || [];

  const handleSelect = (item: any) => {
    const resource = getResource(item);
    setSearch('');
    Keyboard.dismiss();
    router.push(`/${resource}/${item.id}` as any);
  };

  return (
    <View style={styles.container}>
      <SearchInput
        value={search}
        onChangeText={setSearch}
        placeholder='Buscar en la galaxia...'
      />

      {search.length > 0 && (
        <ScrollView
          style={[
            styles.suggestionsContainer,
            { backgroundColor: colors.backgroundSecondaryNoOpacity },
          ]}
        >
          {isLoading ? (
            <Text style={styles.loadingText}>Cargando...</Text>
          ) : suggestions.length > 0 ? (
            suggestions.map((item) => (
              <TouchableOpacity
                key={`${item.type}-${item.id}`}
                style={styles.suggestionItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.suggestionText}>
                  {item.nombre || item.titulo}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noResultsText}>
              No se encontraron resultados
            </Text>
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  suggestionsContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 8,
    zIndex: 1,
    maxHeight: 200,
    overflow: 'hidden',
  },
  suggestionItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  suggestionText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  suggestionType: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  loadingText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  noResultsText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
