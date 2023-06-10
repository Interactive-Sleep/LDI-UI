import React from "react";
import { View } from "react-native";

interface Props {
  children: any;
}

export const LuciHStack: React.FC<Props> = ({ children }) => {
    return (
      <View style={{
        flexDirection: 'row',
      }}>
        {children}
      </View>
    )
}

