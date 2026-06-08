import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HOLA MUNDO</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 25,
    backgroundColor: '#00e969',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
