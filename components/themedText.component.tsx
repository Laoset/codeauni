import { Text, type TextProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'subtitle' | 'subtitleColor';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const colors = useThemeColor();
  const textColor =
    type === 'title'
      ? colors.title
      : type === 'subtitle'
      ? colors.text
      : type === 'subtitleColor'
      ? colors.title
      : colors.text;
  return (
    <Text
      style={[
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'subtitle' || type === 'subtitleColor'
          ? styles.subtitle
          : undefined,
        { color: textColor },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'DinMedium',
  },
  title: {
    fontFamily: 'StarJedi',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'DinBold',
  },
});
