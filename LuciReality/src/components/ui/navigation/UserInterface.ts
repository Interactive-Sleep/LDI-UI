import LuciInterface from "../../core/navigation/LuciAccountUI";
import { CommandStack } from "./stacks/CommandStack";
import { DeviceStack } from "./stacks/DeviceStack";

export const UserInterface = new LuciInterface(
    "USER_INTERFACE",
    [DeviceStack, CommandStack],
);