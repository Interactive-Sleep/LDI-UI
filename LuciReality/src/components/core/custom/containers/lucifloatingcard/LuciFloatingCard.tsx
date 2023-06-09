import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { Environment } from "../../../../../state/environment/Environment";
import { BaseDimensions } from "../../../style/BaseDimensions";
import { Colour } from "../../../style/colour/Colour";
import { ColourProvider } from "../../../style/ColourProvider";

interface Props {
    disabled?: boolean;
    onPress?: () => void;
    colour?: Colour;
    style?: ViewStyle;
    children: any;
};

export const LuciFloatingCard: React.FC<Props> = ({ 
    disabled = false,
    onPress = () => null,
    colour = ColourProvider.instance.cardBackground, 
    style,
    children 
}) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[
                styles.container,
                { backgroundColor: colour.getColour() },
                style
            ]}
        >
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: BaseDimensions.instance.cardBorderRadius,
        padding: BaseDimensions.instance.screenPadding,
        shadowColor: ColourProvider.instance.shadowColour.getColour(),
        shadowOffset: {
            width: 0,
            height: 3,
        },
        // Shadows appear sligntly differnt on web
        shadowOpacity: Environment.instance.getOS() == "web" ? 0.16 : 0.12,
        shadowRadius: Environment.instance.getOS() == "web" ? 4 : 2,
    }
})