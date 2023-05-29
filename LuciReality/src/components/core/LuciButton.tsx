import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import LuciColors from "../styles/LuciColors";
import LuciTypography from "../styles/Typography";

interface Props {
    text: string,
    onPress: () => void,
    style?: Object
}

export const LuciButton: React.FC<Props> = ({ text, onPress, style }) => {
    return (
        <TouchableOpacity
            style={[ styles.button, style ]}
            onPress={onPress}
        >
            <Text
                style={[
                    LuciTypography.primaryButton.getStylesheet(),
                    {
                        alignSelf: 'center',
                    }
                ]}
            > 
                { text } 
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: LuciColors.accent.getColor(),
        borderRadius: 10,
        width: '80%',
        height: 60,
        justifyContent: 'center',
    }
})