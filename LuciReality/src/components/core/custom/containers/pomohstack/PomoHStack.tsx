import React from "react";
import { View } from "react-native";
import { BaseDimensions } from "../../../style/BaseDimensions";

interface Props {
  children: any;
}

export const PomoHStack: React.FC<Props> = ({ children }) => {
    return (
      <View style={{
        flexDirection: 'row',
      }}>
        {children}
      </View>
    )
}

