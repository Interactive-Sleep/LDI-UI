import LuciScreen from "../../../core/navigation/LuciScreen";
import LuciStack from "../../../core/navigation/LuciStack";
import { DevicesScreen } from "../../DevicesScreen";
import { DeviceScreen } from "../../DeviceScreen";
import { CommandHubScreen } from "../../CommandHubScreen";

export const CommandStack = new LuciStack(
    "Command Hub",
    "clipboard-list-outline",
    "clipboard-list"
)
.addScreen(
    new LuciScreen(
        "Hub",
        "COMMAND_HUB",
        CommandHubScreen
    )
)