import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DiceButton from './src/components/DiceButton';
import DiceResult from './src/components/DiceResult';

export default function App() {
  return (
    <View style={styles.container}>
      <DiceResult />
      <DiceButton />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
