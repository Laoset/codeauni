import { type ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  return <SafeAreaView style={[{ flex: 1 }, style]} {...otherProps} />;
}
