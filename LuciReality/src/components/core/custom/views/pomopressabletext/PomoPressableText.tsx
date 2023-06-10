import React from "react";
import { TouchableOpacity } from "react-native";
import { Typography } from "../../../style/Typography";
import { Font } from "../../../style/typography/Font";
import { PomoText } from "../pomotext/PomoText";

interface Props {
    onPress: () => void;
    text: string;
};

export const PomoPressableText: React.FC<Props> = ({ 
    onPress, 
    text
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <PomoText text={text} font={Typography.instance.pressable}/>
        </TouchableOpacity>
    );
};