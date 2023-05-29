import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LuciButton } from './src/components/core/LuciButton';

export default function App() {
  return (
    <View style={styles.container}>
      <LuciButton text={"Demo button"} onPress={() => null}/> 
      <StatusBar style="auto" />
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
