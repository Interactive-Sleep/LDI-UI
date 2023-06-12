import React, { useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Commands } from "../../model/commands/Commands";
import { Command } from "../../model/core/Command";
import { CommandSchedular } from "../../model/core/CommandSchedular";
import { Device } from "../../model/core/Device";
import UUID from "../../model/util/UUID";
import { ApiController } from "../../state/ApiController";
import StateManager from "../../state/publishers/StateManager";
import { LuciFloatingCard } from "../core/custom/containers/lucifloatingcard/LuciFloatingCard";
import { LuciHStack } from "../core/custom/containers/lucihstack/LuciHStack";
import { LuciIcon } from "../core/custom/views/luciicon/LuciIcon";
import { LuciText } from "../core/custom/views/lucitext/LuciText";
import { BaseDimensions } from "../core/style/BaseDimensions";
import { ColourProvider } from "../core/style/ColourProvider";
import { Typography } from "../core/style/Typography";

interface Props {
    showModal: boolean;
    setShowModal: (state: boolean) => void;
    commands: Command[];
    setCommands: (commands: Command[]) => void;
}

export const AddCommandModal: React.FC<Props> = ({
    showModal,
    setShowModal,
    commands,
    setCommands
}) => {

    const [selectedDevice, setSelectedDevice] = useState(StateManager.selectedDevice.read());

    StateManager.selectedDevice.subscribe(() => {
        setSelectedDevice(StateManager.selectedDevice.read());
    })

    const addCommand = (device: Device | null, command: Command) => {
        if(device != null && CommandSchedular.checkIfDeviceCanExecute(command, device)){
            ApiController.instance.scheduleCommandForDevice(device, command, () => {
              const tmp = [...commands];
              tmp.push(command);
              setCommands(tmp);
            });
        }

        setShowModal(false);
    }
  
    return (
        <Modal
            animationType={"slide"}
            visible={showModal}
            onRequestClose={() => {
                setShowModal(!showModal);
            }}
            style={{ flex: 1 }}
        >
            <SafeAreaView
                style={{
                    flex: 1,
                    padding: BaseDimensions.instance.screenPadding
                }}
            >
                <LuciHStack>
                    <LuciText text={"Add Command"} font={Typography.instance.title}/>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => setShowModal(false)}
                            style={{
                                padding: BaseDimensions.instance.screenSpacing,
                                alignSelf: "flex-end",
                            }}
                        >
                            <LuciIcon icon={"cross"} colour={ColourProvider.instance.secondaryButton} size={"medium"}/>
                        </TouchableOpacity>
                    </View>
                </LuciHStack>
                
                {
                    selectedDevice != null ?
                    Commands.map(command => {
                        return (
                            <View 
                                style={{
                                    paddingVertical: BaseDimensions.instance.cardSpacing
                                }}
                                key={UUID.generate().toString()}
                            >
                                <LuciFloatingCard
                                    style={{
                                        opacity: CommandSchedular.checkIfDeviceCanExecute(command, selectedDevice) ? 1 : 0.5
                                    }}
                                    onPress={() => addCommand(selectedDevice, command)}
                                    key={UUID.generate().toString()}
                                    >
                                        <LuciText text={command.name} font={Typography.instance.cardTitle} key={UUID.generate().toString()}/>
                                </LuciFloatingCard>
                            </View>
                            )
                        })
                    :
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <LuciText text={"Failed to get device"} font={Typography.instance.body}/>
                    </View>
                }
            </SafeAreaView>
        </Modal>
    )
}