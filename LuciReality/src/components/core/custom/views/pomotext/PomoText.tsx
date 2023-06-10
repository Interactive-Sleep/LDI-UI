import React from "react";
import { Text } from "react-native";
import { Font } from "../../../style/typography/Font";

interface Props {
    text: string,
    font: Font
}

export const PomoText: React.FC<Props> = ({ text, font }) => {
    return (
        <Text style={font.getFontStyleProps}> { text } </Text>
    )
}