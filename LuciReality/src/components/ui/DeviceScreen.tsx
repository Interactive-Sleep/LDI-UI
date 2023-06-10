import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ApiController } from '../../state/ApiController';
import StateManager from '../../state/publishers/StateManager';
import { RouteProp } from '@react-navigation/native';
import { Command } from '../../model/core/Command';


export const DeviceScreen: React.FC = ({  }) => {

    // useEffect(() => {
    //     ApiController.instance.getCommandsForArduino(route.params.arduino);
    // }, [])
    
    // TODO: publish override title
    
    const [ commands, setCommands ] = useState<Command[]>([]);

    StateManager.commands.subscribe(() => {
        setCommands(StateManager.commands.read());
    })

    return (
        <SafeAreaView style={styles.container}>

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
    },
  });
  