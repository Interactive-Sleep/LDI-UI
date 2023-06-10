import React from "react";
import { Text, ViewStyle } from "react-native";
import { Font } from "../../../style/typography/Font";

interface Props {
    text: string,
    font: Font,
    style?: ViewStyle
}

export const LuciText: React.FC<Props> = ({ text, font, style }) => {
    return (
        <Text style={[font.getFontStyleProps, style]}> { text } </Text>
    )
}