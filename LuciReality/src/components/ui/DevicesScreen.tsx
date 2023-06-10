import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Arduino } from '../../model/core/Arudino';
import { ApiController } from '../../state/ApiController';
import StateManager from '../../state/publishers/StateManager';

export const DevicesScreen: React.FC = () => {

  // this will update state on completion
  // useEffect(() => {
  //   ApiController.instance.getArduinos();
  // }, []);

  const [ connectedDevices, setConnectedDevices ] = useState<Arduino[]>([])
  // get arduinos
  StateManager.arduinos.subscribe(() => {
    setConnectedDevices(StateManager.arduinos.read())
  })

  return (
    <SafeAreaView style={styles.container}>

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
