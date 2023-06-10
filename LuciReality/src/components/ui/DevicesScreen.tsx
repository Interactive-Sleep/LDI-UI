import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Attatchment } from '../../model/core/Attatchment';
import { Device } from '../../model/core/Device';
import { ApiController } from '../../state/ApiController';
import StateManager from '../../state/publishers/StateManager';
import { LuciFloatingCard } from '../core/custom/containers/lucifloatingcard/LuciFloatingCard';
import { LuciButton } from '../core/custom/views/lucibutton/LuciButton';
import { LuciText } from '../core/custom/views/lucitext/LuciText';
import { BaseDimensions } from '../core/style/BaseDimensions';
import { ColourProvider } from '../core/style/ColourProvider';
import { Typography } from '../core/style/Typography';
import { DevicesNavigationProp } from './navigation/Params';

interface DeviceScreenProps {
  navigation: DevicesNavigationProp;
};

export const DevicesScreen: React.FC<DeviceScreenProps> = ({ navigation }) => {

  // this will update state on completion
  useEffect(() => {
    ApiController.instance.getDevices();
  }, []);

  const [ connectedDevices, setConnectedDevices ] = useState<Device[]>([])
  // get arduinos
  StateManager.devices.subscribe(() => {
    setConnectedDevices(StateManager.devices.read())
  })

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1, paddingBottom: 90}}>
        {
          connectedDevices.map((device: Device) => <DeviceComponent key={device.uid} device={device} navigation={navigation}/>)
        }
      </ScrollView>

      <View style={styles.buttonContainer}>
        <LuciButton label={"Refresh"} onPress={() => ApiController.instance.getDevices()}/>
      </View>
    </View>
  );
};

interface DeviceComponentProps {
  device: Device;
  navigation: DevicesNavigationProp;
};

const DeviceComponent: React.FC<DeviceComponentProps> = ({ device, navigation }) => {
  return (
    <View style={styles.deviceWrapper}>
      <LuciFloatingCard
        onPress={() => {
          // update state 
          StateManager.selectedDevice.publish(device);
          StateManager.headerTitleOverride.publish(`Device ${device.uid}`);
          navigation.navigate("DEVICE");
        }}
      >
        <LuciText text={`Device ${device.uid}`} font={Typography.instance.cardTitle}/>
        <LuciText text={"Attatchments"} font={Typography.instance.cardSubTitle}/>
        {
          device.attatchments.length <= 0 ?
            <LuciText text={"None"} font={Typography.instance.body}/>
            :
            device.attatchments.map((attatchment: Attatchment) =>  <LuciText text={attatchment.name} font={Typography.instance.body}/>)
        }
      </LuciFloatingCard>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: BaseDimensions.instance.screenPadding,
    backgroundColor: ColourProvider.instance.background.getColour(),
  },
  deviceWrapper: {
    paddingVertical: BaseDimensions.instance.screenPadding
  },
  buttonContainer: {
    paddingBottom: BaseDimensions.instance.buttonSpacingFromBottom
  },
});
