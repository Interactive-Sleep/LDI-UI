import { StackNavigationProp } from "@react-navigation/stack";

type DevicesStackParamList = {
    "CONNECTED_DEVICES": undefined; 
    "DEVICE": undefined; 
}

type CommandHubStackParamList = {
    "COMMAND_HUB": undefined; 
}

export type DevicesNavigationProp = StackNavigationProp<DevicesStackParamList, "CONNECTED_DEVICES">
export type CommandHubNavigationProp = StackNavigationProp<CommandHubStackParamList, "COMMAND_HUB">