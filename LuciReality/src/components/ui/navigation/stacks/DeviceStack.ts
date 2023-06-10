import LuciScreen from "../../../core/navigation/LuciScreen";
import LuciStack from "../../../core/navigation/LuciStack";
import { DevicesScreen } from "../../Devices";

export const DeviceStack = new LuciStack(
    "Connected Devices",
    "home-outline",
    "home"
)
.addScreen(
    new LuciScreen(
        "Devices",
        "DEVICES",
        DevicesScreen
    )
);