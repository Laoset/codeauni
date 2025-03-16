import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '../themedText.component';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';

export function IconButton({ text, icon, path }: any) {
  const color = useThemeColor();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(path as any)}
    >
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: color.backgroundSecondary },
        ]}
      >
        {icon}
      </View>
      {text && <ThemedText style={styles.text}>{text}</ThemedText>}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '23%',
    marginBottom: 8,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  text: {
    textAlign: 'center',
  },
});
