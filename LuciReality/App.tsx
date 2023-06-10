import { MainScreen } from './src/components/MainScreen';
import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';

export default function App() {

  return (
    <NativeBaseProvider>
      <MainScreen />
    </NativeBaseProvider>
  );
}
