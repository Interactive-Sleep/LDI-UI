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
import { RouteProp } from '@react-navigation/native';
import { Command } from '../../model/core/Command';

type AddCommandScreenRouteProp = RouteProp<RootStackParamList, 'Add Command'>;

interface Props {
    route: AddCommandScreenRouteProp;
}

export const AddCommandScreen: React.FC<Props> = ({ route }) => {

    useEffect(() => {
        ApiController.instance.getCommandsForArduino(route.params.arduino);
    }, [])
    
    const [ commands, setCommands ] = useState<Command[]>([]);

    StateManager.commands.subscribe(() => {
        setCommands(StateManager.commands.read());
    })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}>
                {
                    commands.map(command => {
                        return (
                            <LuciCard 
                                onPress={() => null} 
                                style={{ 
                                    height: 60, 
                                    alignItems: 'center',
                                    justifyContent: 'center' 
                                }}
                            >
                                <Text style={[ LuciTypography.cardTitle.getStylesheet(), { color: LuciColors.textDark.getColor() }]}> {command.name} </Text>
                            </LuciCard>
                        )
                    })
                }

                {/* hacky way of making space for button */}
                <View style={{height: 110}}/>
            </ScrollView>

            <LuciButton text={'Add command'} onPress={() => {
                    ApiController.instance.scheduleCommandForArduino(route.params.arduino, () => null);
                    ApiController.instance.getCommandsForArduino(route.params.arduino);
                }} 
                style={styles.button}
            />
        </SafeAreaView>
    )
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
  