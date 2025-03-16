import { StyleSheet, TextInput, View } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export function SearchInput({
  value,
  onChangeText,
  placeholder,
}: SearchInputProps) {
  const colors = useThemeColor();

  return (
    <View
      testID='search-input-container'
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <Search size={20} color='#888' style={styles.icon} />
      <TextInput
        testID='search-text-input'
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
      />
      <X
        testID='clear-button'
        size={20}
        color='#888'
        style={styles.icon}
        onPress={() => onChangeText('')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 12,
    paddingHorizontal: 12,
    maxHeight: 45,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
});
