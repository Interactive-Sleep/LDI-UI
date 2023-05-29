import React, { Children } from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import LuciColors from "../styles/LuciColors";

interface Props {
    onPress: () => void;
    children: any;
    style?: Object;
}

export const LuciCard: React.FC<Props> = ({ onPress, children, style }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[ styles.card, style ]}
                onPress={ onPress }
                >
                { children }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        widht: '80%'
    },
    card: {
        backgroundColor: LuciColors.cardBackgroundLight.getColor(),
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    }
})