import { NavigationContainer } from '@react-navigation/native';
import { ArudinosScreen } from './src/components/stacks/Arduinos';
import { CommandStack } from './src/components/stacks/CommandStack';

export default function App() {

  return (
    <NavigationContainer>
      <CommandStack/>
    </NavigationContainer>
  );
}
