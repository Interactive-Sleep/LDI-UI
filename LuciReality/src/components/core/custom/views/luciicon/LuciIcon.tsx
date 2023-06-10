import React from 'react';
import { ViewStyle } from 'react-native';
import { Colour } from '../../../style/colour/Colour';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getLuciIconSizeNumber, LuciIconSize } from './LuciIconTypes'

interface Props {
    // Icon name (https://pictogrammers.com/library/mdi/)
    icon: string;
    // Icon fill color
    colour: Colour;
    // Icon size
    size: LuciIconSize;
    // Custom style
    style?: ViewStyle;
};

export const LuciIcon: React.FC<Props> = ({ 
    icon,
    colour,
    size,
    style,
}) => {
    return (
        <Icon 
            name={icon} 
            size={getLuciIconSizeNumber(size)} 
            color={colour.getColour()} 
            style={style}
        />
    );
};