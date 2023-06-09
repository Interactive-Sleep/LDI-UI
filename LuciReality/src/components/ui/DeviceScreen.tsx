import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ApiController } from '../../state/ApiController';
import StateManager from '../../state/publishers/StateManager';
import { Command } from '../../model/core/Command';
import { DevicesNavigationProp } from './navigation/Params';
import { Device } from '../../model/core/Device';
import { ColourProvider } from '../core/style/ColourProvider';
import { BaseDimensions } from '../core/style/BaseDimensions';
import { LuciText } from '../core/custom/views/lucitext/LuciText';
import { Typography } from '../core/style/Typography';
import { LuciContainer } from '../core/custom/containers/lucicontainer/LuciContainer';
import { Attatchment } from '../../model/core/Attatchment';
import UUID from '../../model/util/UUID';
import { LuciHStack } from '../core/custom/containers/lucihstack/LuciHStack';
import { LuciButton } from '../core/custom/views/lucibutton/LuciButton';
import { Environment } from '../../state/environment/Environment';
import { ScreenType } from '../../state/environment/types/ScreenType';
import { VisualStimulusCommand } from '../../model/commands/VisualStimulusCommand';
import { AddCommandModal } from './AddCommandModal';

interface Props {
  navigation: DevicesNavigationProp;
};

export const DeviceScreen: React.FC<Props> = ({ navigation }) => {
    
    StateManager.selectedDevice.subscribe(() => {
      const device = StateManager.selectedDevice.read();
      setSelectedDevice(device);
      StateManager.commands.publish(device?.commandSchedular.commands || []);
    })

    StateManager.commands.subscribe(() => {
      const commands = StateManager.commands.read();
      setCommands(commands);
    })

    const addCommand = (device: Device | null, command: Command) => {
      if (device != null){
        ApiController.instance.scheduleCommandForDevice(device, command, () => {
          const tmp = [...commands];
          tmp.push(command);
          setCommands(tmp);
        });
      }
    }

    const [showModal, setShowModal] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState<Device | null>(StateManager.selectedDevice.read());
    const [commands, setCommands] = useState<Command[]>(StateManager.commands.read());

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
            <LuciText text={"Attachments"} font={Typography.instance.subTitle}/>

            <View style={styles.verticalPaddedView}>
              <DeviceAttatchments device={selectedDevice}/>
            </View>

            <LuciText text={"Commands"} font={Typography.instance.subTitle}/>
            <DeviceCommands commands={commands}/>
          </ScrollView>

          <LuciHStack>
            <View style={styles.buttonContainer}>
              <LuciButton label={Environment.instance.getScreenType() == ScreenType.large ? "Add command" : "Add"} onPress={() => setShowModal(true)}/>
            </View>
            <View style={styles.buttonContainer}>
              <LuciButton label={"Refresh"} onPress={() => ApiController.instance.getCommandsForDevice(selectedDevice)} colour={ColourProvider.instance.secondaryButton}/>
            </View>
          </LuciHStack>

          <AddCommandModal 
            showModal={showModal}
            setShowModal={setShowModal}
            commands={commands}
            setCommands={setCommands}
          />
        </View>
    )
}

interface DeviceProps {
  device: Device | null;  
};

const DeviceAttatchments: React.FC<DeviceProps> = ({ device }) => {

  if (device == null || device.attatchments.length <= 0){
    return (
      <LuciContainer style={styles.emptyContainer}>
        <LuciText text={"No attatcments"} font={Typography.instance.body}/>
      </LuciContainer>
    );
  };

  return (
    <LuciContainer>
      {
        device.attatchments.map((attatchment: Attatchment) => {
          return(
            <View style={{ flex: 1 }} key={UUID.generate().toString()}>
              <LuciText key={UUID.generate().toString()} text={attatchment.name} font={Typography.instance.cardSubTitle}/>
              <LuciText key={UUID.generate().toString()} text={attatchment.description} font={Typography.instance.body}/>
            </View>
          )
        })
      }
    </LuciContainer>
  );
}

interface CommandProps {
  commands: Command[];
};

const DeviceCommands: React.FC<CommandProps> = ({ commands }) => {
  
  if (commands.length <= 0){
    return (
      <LuciContainer style={styles.emptyContainer}>
        <LuciText text={"No commands"} font={Typography.instance.body}/>
      </LuciContainer>
    )
  };

  return (
    <View>
      {
        commands.map((command: Command, index: number) => {
          return (
            <View style={styles.verticalPaddedView} key={UUID.generate().toString()}>
              <LuciContainer>
                <LuciText key={UUID.generate().toString()} text={command.name} font={Typography.instance.cardTitle}/>
              </LuciContainer>
            </View>
          )
        })
      }
    </View>  
  );
};

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
    emptyContainer: {
      justifyContent: "center",
      alignItems: "center",
      minHeight: 100
    },
    buttonContainer: {
      flex: 1,
      alignItems: "center",
      padding: BaseDimensions.instance.cardSpacing,
      paddingBottom: BaseDimensions.instance.buttonSpacingFromBottom
    },
    verticalPaddedView: {
      paddingVertical: BaseDimensions.instance.screenSpacing
    }
  });
  