import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.hooks';

export function useThemeColor() {
  const theme = useColorScheme() ?? 'light';
  return Colors[theme];
}
