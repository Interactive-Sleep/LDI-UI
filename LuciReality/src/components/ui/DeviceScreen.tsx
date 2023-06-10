import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ApiController } from '../../state/ApiController';
import StateManager from '../../state/publishers/StateManager';
import { Command } from '../../model/core/Command';
import { DevicesNavigationProp } from './navigation/Params';
import { Device } from '../../model/core/Device';
import { ColourProvider } from '../core/style/ColourProvider';
import { BaseDimensions } from '../core/style/BaseDimensions';
import { LuciText } from '../core/custom/views/lucitext/LuciText';
import { Typography } from '../core/style/Typography';

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
        <View style={styles.container}>
          <ScrollView style={{ flex: 1 }}>
            <LuciText text={"Attatchments"} font={Typography.instance.subTitle}/>
          </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: ColourProvider.instance.background.getColour(),
      padding: BaseDimensions.instance.screenPadding
    },
    button: {
      position: 'absolute',
      bottom: 60,
    },
  });
  