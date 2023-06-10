import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DevicesScreen } from "./Devices";
import { AddCommandScreen } from "./AddCommand";
import { Arduino } from "../../model/core/Arudino";

export type RootStackParamList = {
  "Arduinos": undefined;
  "Add Command": { arduino: Arduino }; // specify parameters for AddCommandScreen
  // add more screens here as needed
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const CommandStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Arduinos" component={DevicesScreen} options={{ headerLargeTitle: true }}/>
      <Stack.Screen name="Add Command" component={AddCommandScreen} options={{ headerLargeTitle: true }}/>
    </Stack.Navigator>
  );
}