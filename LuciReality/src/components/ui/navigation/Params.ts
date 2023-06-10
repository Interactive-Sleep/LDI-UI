import { StackNavigationProp } from "@react-navigation/stack";

type UIStackParamList = {
    "CONNECTED_DEVICES": undefined; 
    "COMMAND_HUB": undefined; 
}

export type UINavigationProp = StackNavigationProp<UIStackParamList, "CONNECTED_DEVICES">