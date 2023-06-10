import React, { useState } from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { StateManager } from "../../../../../state/publishers/StateManager";
import { BaseDimensions } from "../../../style/BaseDimensions";
import { ColourProvider } from "../../../style/ColourProvider";

interface Props {
    onPress: () => any;
    style?: ViewStyle;
    initiallySelected?: boolean;
    children: any;
};

export const PomoSelectableView:React.FC<Props> = ({
    style,
    onPress,
    initiallySelected = false,
    children 
}) => {
    
    const [ selected, setSelected ] = useState(initiallySelected);

    StateManager.selectedViewIsSelected.subscribe(() => {
        // this sets all selected views to unselected
        setSelected(false);
    });

    
    return (
        <TouchableOpacity
            onPress={() => {
                onPress();
                // update all selected views to deselected
                StateManager.selectedViewIsSelected.publish();
                setSelected(!selected);
            }}
            style={[
                style,
                { 
                    backgroundColor: selected ? ColourProvider.instance.selectableView.getColour() : "transparent",
                    borderRadius: 3.5,
                    padding: 3.5
                }
            ]}
        >
            { children }
        </TouchableOpacity>
    );
};