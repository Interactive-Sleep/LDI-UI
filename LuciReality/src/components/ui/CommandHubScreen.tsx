import React from "react";
import { VStack } from "native-base";
import { View, StyleSheet, ScrollView } from "react-native";
import { LuciContainer } from "../core/custom/containers/lucicontainer/LuciContainer";
import { LuciText } from "../core/custom/views/lucitext/LuciText";
import { BaseDimensions } from "../core/style/BaseDimensions";
import { ColourProvider } from "../core/style/ColourProvider";
import { Typography } from "../core/style/Typography";
import { Environment } from "../../state/environment/Environment";

export const CommandHubScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <LuciContainer style={styles.graphContainer}>
                    <LuciText text={"EOG graph"} font={Typography.instance.subTitle}/>
                    <View style={styles.graphTextWrapper}>
                        <LuciText text={"No data"} font={Typography.instance.body} style={styles.graphText}/>
                    </View>
                </LuciContainer>

                <LuciText text={"Commands"} font={Typography.instance.subTitle}/>
                {/* 
                    // TODO: list each device and the commands
                */}
            </ScrollView>
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
    }
});