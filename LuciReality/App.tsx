import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LuciButton } from './src/components/core/LuciButton';
import { LuciCard } from './src/components/core/LuciCard';
import LuciColors from './src/components/styles/LuciColors';
import LuciTypography from './src/components/styles/Typography';
import { Arduino } from './src/model/core/Arudino';
import { ApiController } from './src/state/ApiController';
import StateManager from './src/state/publishers/StateManager';

export default function App() {

  // this will update state on completion
  useEffect(() => {
    ApiController.instance.getArduinos();
  }, []);

  const [ connectedArduinos, setConnectedArduinos ] = useState<Arduino[]>([])
  // get arduinos
  StateManager.arduinos.subscribe(() => {
    setConnectedArduinos(StateManager.arduinos.read())
  })

  return (
    <View style={styles.container}>
      {
        connectedArduinos.map(arduino => {
          return (
            // TODO: navigate to commands
            <LuciCard 
              onPress={() => null} 
              style={{ 
                height: 60, 
                alignItems: 'center',
                justifyContent: 'center' 
              }}
            >
              <Text style={[LuciTypography.cardTitle.getStylesheet(), { color: LuciColors.textDark.getColor() }]}> Arduino #{ arduino.uid } </Text>
            </LuciCard>
          )
        })
      }

      <LuciButton text={'Refresh'} onPress={() => ApiController.instance.getArduinos()} style={styles.button}/>
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
  button: {
    position: 'absolute',
    bottom: 60
  }
});
