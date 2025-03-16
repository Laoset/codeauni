import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export function ErrorMessage({ message }: { message: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ff000020',
    borderRadius: 8,
    margin: 16,
  },
  text: {
    color: '#ff0000',
    textAlign: 'center',
  },
});
