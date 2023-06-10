import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { BaseDimensions } from "../../../style/BaseDimensions";
import { Colour } from "../../../style/colour/Colour";
import { ColourProvider } from "../../../style/ColourProvider";

interface Props {
    colour?: Colour;
    transparent?: boolean;
    style?: ViewStyle;
    children: any;
};

export const LuciContainer: React.FC<Props> = ({ 
    colour = ColourProvider.instance.cardBackground, 
    transparent = false,
    style,
    children 
}) => {
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: transparent ? "transparent" : colour.getColour() },
                style
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: BaseDimensions.instance.cardBorderRadius,
        padding: BaseDimensions.instance.screenPadding
    }
})