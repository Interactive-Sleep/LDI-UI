import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Device } from '../../model/core/Device';
import { ApiController } from '../../state/ApiController';
import StateManager from '../../state/publishers/StateManager';
import { LuciFloatingCard } from '../core/custom/containers/lucifloatingcard/LuciFloatingCard';
import { LuciText } from '../core/custom/views/lucitext/LuciText';
import { BaseDimensions } from '../core/style/BaseDimensions';
import { ColourProvider } from '../core/style/ColourProvider';
import { Typography } from '../core/style/Typography';

interface DeviceScreenProps {

};

export const DevicesScreen: React.FC<DeviceScreenProps> = () => {

  // this will update state on completion
  useEffect(() => {
    ApiController.instance.getDevices();
  }, []);

  const [ connectedDevices, setConnectedDevices ] = useState<Device[]>([])
  // get arduinos
  StateManager.arduinos.subscribe(() => {
    setConnectedDevices(StateManager.arduinos.read())
  })

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        {
          connectedDevices.map((device: Device) => <DeviceComponent key={device.uid} device={device}/>)
        }
      </ScrollView>
    </View>
  );
};

interface DeviceComponentProps {
  device: Device;
};

const DeviceComponent: React.FC<DeviceComponentProps> = ({ device }) => {
  return (
    <LuciFloatingCard>
      <LuciText text={`Device ${device.uid}`} font={Typography.instance.cardTitle}/>
    </LuciFloatingCard>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: BaseDimensions.instance.screenPadding,
    backgroundColor: ColourProvider.instance.background.getColour()
  },
  button: {
    position: 'absolute',
    bottom: 60,
  }
});
