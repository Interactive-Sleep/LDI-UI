import { StackNavigationProp } from "@react-navigation/stack";

type DevicesStackParamList = {
    "CONNECTED_DEVICES": undefined; 
    "DEVICE": undefined; 
}

export type DevicesNavigationProp = StackNavigationProp<DevicesStackParamList, "CONNECTED_DEVICES">