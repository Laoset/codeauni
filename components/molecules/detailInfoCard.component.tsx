import { Card } from '../atoms/card.component';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../themedText.component';

export function InfoCard({
  icon,
  label,
  value,
  orientation = 'vertical',
}: {
  icon: React.ReactNode;
  label: string | null;
  value: string;
  orientation?: 'vertical' | 'horizontal' | 'mixed';
}) {
  if (orientation === 'horizontal') {
    return (
      <Card horizontal={true}>
        {icon}
        {label && <ThemedText style={styles.colorLabel}>{label}</ThemedText>}
        <ThemedText style={styles.colorValue}>{value}</ThemedText>
      </Card>
    );
  }
  if (orientation === 'mixed') {
    return (
      <Card horizontal={true}>
        {icon}
        <View>
          {label && <ThemedText style={styles.colorLabel}>{label}</ThemedText>}
          <ThemedText style={styles.colorValue}>{value}</ThemedText>
        </View>
      </Card>
    );
  }
  return (
    <Card>
      {icon}
      {label && <ThemedText style={styles.infoLabel}>{label}</ThemedText>}
      <ThemedText style={styles.infoValue}>{value}</ThemedText>
    </Card>
  );
}
const styles = StyleSheet.create({
  infoLabel: {
    fontWeight: 'semibold',
  },
  infoValue: {
    textAlign: 'center',
  },
  colorLabel: {
    fontWeight: 'semibold',
    flex: 1,
  },
  colorValue: {
    fontSize: 16,
    fontWeight: '600',
  },
});
