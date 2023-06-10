import LuciInterface from "../../core/navigation/LuciAccountUI";
import { DeviceStack } from "./stacks/DeviceStack";

export const UserInterface = new LuciInterface(
    "USER_INTERFACE",
    [DeviceStack],
);