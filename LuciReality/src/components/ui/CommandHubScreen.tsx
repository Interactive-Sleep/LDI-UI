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
import { LuciButton } from "../core/custom/views/lucibutton/LuciButton";
import { LuciGraph } from "../core/custom/views/lucigraph/LuciGraph";
import { EogDataType } from "../../model/eog/Types";

interface Props {
    navigation: CommandHubNavigationProp;
};

export const CommandHubScreen: React.FC<Props> = ({ navigation }) => {

    useEffect(() => {
        ApiController.instance.getDevices();
        ApiController.instance.getEogData(1);
    }, []);

    const [devices, setDevices] = useState<Device[] | null>(null);
    const [eogStream, setEogStream] = useState<EogDataType[]>([]);

    StateManager.devices.subscribe(() => {
        setDevices(StateManager.devices.read())
    });

    StateManager.eogStream.subscribe(() => {
        setEogStream(StateManager.eogStream.read())
    });

    const convertNumArrToStrArr = (numbers: number[]): string[] => {
        const strings: string[] = [];
        for (let number of numbers){
            strings.push("");
        }

        return strings;
    }

    const getVoltages = (eogData: EogDataType[]): number[] => {
        const voltages: number[] = [];
        for (let data of eogData){
            voltages.push(data.voltage || 0);
        }

        return voltages;
    }

    const getTimes = (eogData: EogDataType[]): number[] => {
        const times: number[] = [];
        for (let data of eogData){
            times.push(data.time);
        }

        return times;
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <LuciText text={"EOG graph"} font={Typography.instance.subTitle}/>
                <View style={{ paddingVertical: BaseDimensions.instance.screenSpacing }}>
                    <LuciContainer
                        style={{
                            height: Environment.instance.getScreenHeight()/2.5,
                            justifyContent: "center"
                        }}
                    >
                        <LuciGraph
                            lineData={{
                                labels: convertNumArrToStrArr(getTimes(eogStream)),
                                datasets: [
                                    {
                                        data: getVoltages(eogStream),
                                        strokeWidth: 2
                                    }
                                ]
                            }}
                            style={{
                                alignSelf: "center",
                                borderRadius: BaseDimensions.instance.cardBorderRadius
                            }}
                        />
                    </LuciContainer>
                    {/* <LuciContainer style={styles.graphContainer}>
                        <View style={styles.graphTextWrapper}>
                            <LuciText text={"No data"} font={Typography.instance.body} style={styles.graphText}/>
                        </View>
                    </LuciContainer> */}
                </View>

                <LuciText text={"Commands for"} font={Typography.instance.subTitle}/>
                <Devices devices={devices}/>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <LuciButton label={"Refresh"} onPress={() => {
                        ApiController.instance.getDevices();
                        ApiController.instance.getEogData(1);
                    }}
                />
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
                                    <View key={UUID.generate().toString()}>
                                        {
                                            device.commandSchedular.scheduledCommands.map((command: Command) => {
                                                return (
                                                    <View style={styles.verticalPaddedView} key={UUID.generate().toString()}>
                                                        <LuciContainer key={UUID.generate().toString()}>
                                                            <LuciText text={command.name} font={Typography.instance.cardTitle} key={UUID.generate().toString()}/>
                                                        </LuciContainer>           
                                                     </View>   
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
    },
    verticalPaddedView: {
        paddingVertical: BaseDimensions.instance.screenSpacing
    }
});