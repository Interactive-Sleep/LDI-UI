import React from "react";
import { TouchableOpacity } from "react-native";
import { Typography } from "../../../style/Typography";
import { LuciText } from "../lucitext/LuciText";

interface Props {
    onPress: () => void;
    text: string;
};

export const LuciPressableText: React.FC<Props> = ({ 
    onPress, 
    text
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <LuciText text={text} font={Typography.instance.pressable}/>
        </TouchableOpacity>
    );
};