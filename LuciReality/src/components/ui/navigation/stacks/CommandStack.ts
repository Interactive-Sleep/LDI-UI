import LuciScreen from "../../../core/navigation/LuciScreen";
import LuciStack from "../../../core/navigation/LuciStack";
import { DevicesScreen } from "../../DevicesScreen";
import { DeviceScreen } from "../../DeviceScreen";

export const CommandStack = new LuciStack(
    "Command Hub",
    "clipboard-list-outline",
    "clipboard-list"
)
.addScreen(
    new LuciScreen(
        "Devices",
        "DEVICES",
        DevicesScreen
    )
)
.addScreen(
    new LuciScreen(
        "Device",
        "DEVICE",
        DeviceScreen
    )
)