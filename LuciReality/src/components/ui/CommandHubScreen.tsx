import React, { useEffect, useState } from "react";
import { VStack } from "native-base";
import { View, StyleSheet, ScrollView } from "react-native";
import { LuciContainer } from "../core/custom/containers/lucicontainer/LuciContainer";
import { LuciText } from "../core/custom/views/lucitext/LuciText";
import { BaseDimensions } from "../core/style/BaseDimensions";
import { ColourProvider } from "../core/style/ColourProvider";
import { Typography } from "../core/style/Typography";
import { Environment } from "../../state/environment/Environment";
import { CommandHubNavigationProp } from "./navigation/Params";
import StateManager from "../../state/publishers/StateManager";
import { Device } from "../../model/core/Device";
import { Command } from "../../model/core/Command";
import { ApiController } from "../../state/ApiController";
import UUID from "../../model/util/UUID";
import { LuciHStack } from "../core/custom/containers/lucihstack/LuciHStack";
import { LuciButton } from "../core/custom/views/lucibutton/LuciButton";

interface Props {
    navigation: CommandHubNavigationProp;
};

export const CommandHubScreen: React.FC<Props> = ({ navigation }) => {

    useEffect(() => {
        ApiController.instance.getDevices();
    }, []);

    const [devices, setDevices] = useState<Device[] | null>(null);

    StateManager.devices.subscribe(() => {
        setDevices(StateManager.devices.read())
    });

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <LuciText text={"EOG graph"} font={Typography.instance.subTitle}/>
                <View style={{ paddingVertical: BaseDimensions.instance.screenSpacing }}>
                    <LuciContainer style={styles.graphContainer}>
                        <View style={styles.graphTextWrapper}>
                            <LuciText text={"No data"} font={Typography.instance.body} style={styles.graphText}/>
                        </View>
                    </LuciContainer>
                </View>

                <LuciText text={"Commands for"} font={Typography.instance.subTitle}/>
                <Devices devices={devices}/>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <LuciButton label={"Refresh"} onPress={() => ApiController.instance.getDevices()}/>
            </View>

        </View>
    );
};

interface DevicesProps {
    devices: Device[] | null
}

const Devices: React.FC<DevicesProps> = ({ devices }) => {
    
    if (devices == null){
        return (
            <LuciContainer style={styles.emptyContainer}>
                <LuciText text={"No devices connected"} font={Typography.instance.body}/>
            </LuciContainer>
        );
    };

    return (
        <View>
            {
                devices.map((device: Device) => {
                    return (
                        <View style={{ flex: 1, paddingVertical: BaseDimensions.instance.screenSpacing }} key={UUID.generate().toString()}>
                            <LuciText text={`Device ${device.uid}`} font={Typography.instance.cardTitle} key={UUID.generate().toString()}/>
                            {
                                device.commandSchedular.scheduledCommands.length <= 0 ?
                                    <LuciContainer style={styles.emptyContainer} key={UUID.generate().toString()}>
                                        <LuciText text={`No commands for device ${device.uid}`} font={Typography.instance.body} key={UUID.generate().toString()}/>
                                    </LuciContainer>
                                    :
                                    <View style={{ flex: 1 }} key={UUID.generate().toString()}>
                                        {
                                            device.commandSchedular.scheduledCommands.map((command: Command) => {
                                                return (
                                                    <LuciContainer key={UUID.generate().toString()}>
                                                        <LuciText text={command.name} font={Typography.instance.cardTitle} key={UUID.generate().toString()}/>
                                                    </LuciContainer>           
                                                );
                                            })
                                        }
                                    </View>
                            }
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
        padding: BaseDimensions.instance.screenPadding,
        backgroundColor: ColourProvider.instance.background.getColour(),
    },
    scrollView: {
        flex: 1,
    },
    graphContainer: {
        height: Environment.instance.getScreenHeight()/3
    },
    graphTextWrapper: {
        flex: 1,
        justifyContent: "center"
    },
    graphText: {
        alignSelf: "center",
    },
    emptyContainer: {
        justifyContent: "center",
        alignItems: "center",
        minHeight: 100
    },
    buttonContainer: {
        paddingBottom: BaseDimensions.instance.buttonSpacingFromBottom,
    }
});