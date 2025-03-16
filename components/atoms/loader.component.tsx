import { View, ActivityIndicator, StyleSheet } from 'react-native';
export function Loader() {
  return (
    <View style={styles.container} testID='loader-container'>
      <ActivityIndicator
        testID='loader-indicator'
        size='large'
        color='#ffd700'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
