import React from "react";
import { TouchableOpacity } from "react-native";
import { Environment } from "../../../../../state/Environment";
import { BaseDimensions } from "../../../style/BaseDimensions";
import { Colour } from "../../../style/colour/Colour";
import { ColourProvider } from "../../../style/ColourProvider";
import { Typography } from "../../../style/Typography";
import { PomoText } from "../pomotext/PomoText";
import { PomoButtonType } from "./PomoButtonTypes";

interface Props {
    onPress: () => void
    label: string
    wide?: boolean,
    colour?: Colour,
    type?: PomoButtonType,
};

export const PomoButton: React.FC<Props> = ({ 
    onPress, 
    label,
    wide = true,
    colour = ColourProvider.instance.primaryButton,
    type = "filled",
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                wide ? { width : "100%" } : { alignSelf: "center" },
                type == "filled" ? { backgroundColor: colour.getColour() } : { borderColor: colour.getColour() },
                { 
                    borderRadius: BaseDimensions.instance.buttonBorderRadius,
                    minHeight: 60,
                    justifyContent: "center",
                    shadowColor: ColourProvider.instance.shadowColour.getColour(),
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    // Shadows appear sligntly differnt on web
                    shadowOpacity: Environment.instance.getOS() == "web" ? 0.16 : 0.12,
                    shadowRadius: Environment.instance.getOS() == "web" ? 12 : 7,
                }
            ]}
        >
            <PomoText text={label} font={Typography.instance.button}/>
        </TouchableOpacity>
    );
};