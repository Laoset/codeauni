import { useThemeColor } from '@/hooks/useThemeColor.hooks';
import { StyleSheet, View } from 'react-native';

export function Card({
  children,
  horizontal,
}: {
  children: React.ReactNode;
  horizontal?: boolean;
}) {
  const colors = useThemeColor();

  return (
    <View
      testID='card-component'
      style={[
        horizontal ? styles.horizontal : styles.vertical,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  vertical: {
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '48%',
    gap: 8,
  },
  horizontal: {
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});
