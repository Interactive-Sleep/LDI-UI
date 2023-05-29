import React, { Children } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import LuciColors from "../styles/LuciColors";

interface Props {
    onPress: () => void;
    children: any;
}

export const LuciCard: React.FC<Props> = ({ onPress, children }) => {
    return (
        <TouchableOpacity
            style={ styles.card }
            onPress={ onPress }
        >
            { children }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: LuciColors.cardBackgroundLight.getColor(),
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    }
})