import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArudinosScreen } from "./Arduinos";
import { AddCommandScreen } from "./AddCommand";
import { Arduino } from "../../model/core/Arudino";

type RootStackParamList = {
  ArduinosScreen: undefined;
  AddCommandScreen: { arduino: Arduino }; // specify parameters for AddCommandScreen
  // add more screens here as needed
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const CommandStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ArduinosScreen" component={ArudinosScreen} options={{ headerLargeTitle: true }}/>
      <Stack.Screen name="AddCommandScreen" component={AddCommandScreen} options={{ headerLargeTitle: true }}/>
    </Stack.Navigator>
  );
}