import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LuciButton } from '../core/LuciButton';
import { LuciCard } from '../core/LuciCard';
import LuciColors from '../styles/LuciColors';
import LuciTypography from '../styles/Typography';
import { Arduino } from '../../model/core/Arudino';
import { ApiController } from '../../state/ApiController';
import StateManager from '../../state/publishers/StateManager';
import { RootStackParamList } from './CommandStack';
import { StackNavigationProp } from '@react-navigation/stack';

type ArduinosScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Arduinos'
>;

interface Props {
  navigation: ArduinosScreenNavigationProp;
};

export const ArudinosScreen: React.FC<Props> = ({ navigation }) => {

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
    <SafeAreaView style={styles.container}>
        <ScrollView 
          style={styles.scrollview}
          contentInsetAdjustmentBehavior="automatic"  
        >
          {
            connectedArduinos.map(arduino => {
              return (
                <LuciCard 
                onPress={() => navigation.navigate('Add Command', { arduino: arduino })} 
                style={{ 
                  height: 60, 
                  alignItems: 'center',
                  justifyContent: 'center' 
                }}
                >
                  <Text style={[ LuciTypography.cardTitle.getStylesheet(), { color: LuciColors.textDark.getColor() }]}> Arduino #{ arduino.uid } </Text>
                </LuciCard>
              )
            })
          }

          {/* hacky way of making space for button */}
          <View style={{height: 110}}/>
        </ScrollView>

        <LuciButton text={'Refresh'} onPress={() => ApiController.instance.getArduinos()} style={styles.button}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scrollview: {
    flex: 1,
    width: '90%', // this was being so dumb, this is just a prototype so i dont really care but still
  },
  button: {
    position: 'absolute',
    bottom: 60,
  }
});
