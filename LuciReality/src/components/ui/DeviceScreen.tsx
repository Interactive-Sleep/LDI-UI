import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ApiController } from '../../state/ApiController';
import StateManager from '../../state/publishers/StateManager';
import { Command } from '../../model/core/Command';
import { DevicesNavigationProp } from './navigation/Params';
import { Device } from '../../model/core/Device';

interface Props {
  navigation: DevicesNavigationProp;
};

export const DeviceScreen: React.FC<Props> = ({ navigation }) => {
    
    StateManager.selectedDevice.subscribe(() => {
      const device = StateManager.selectedDevice.read();
      setSelectedDevice(device);
    })

    const [selectedDevice, setSelectedDevice] = useState<Device | null>(null)

    useEffect(() => {
      const unsubscribe = navigation.addListener('beforeRemove', (e) => {
          // Executed when a navigation event occurs
          // Reset header override
          StateManager.headerTitleOverride.publish(null);
      });
      return unsubscribe;
    }, [navigation]);

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
  