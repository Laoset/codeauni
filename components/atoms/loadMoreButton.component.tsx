import { useThemeColor } from '@/hooks/useThemeColor.hooks';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '../themedText.component';

interface LoadMoreButtonProps {
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  hasNextPage?: boolean;
}

export function LoadMoreButton({
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
}: LoadMoreButtonProps) {
  if (!hasNextPage) return null;
  const colors = useThemeColor();

  return (
    <TouchableOpacity
      testID='load-more-button'
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
      onPress={fetchNextPage}
      disabled={isFetchingNextPage}
    >
      {isFetchingNextPage ? (
        <ActivityIndicator color={colors.title} testID='activity-indicator' />
      ) : (
        <ThemedText style={styles.text}>Cargar más</ThemedText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
