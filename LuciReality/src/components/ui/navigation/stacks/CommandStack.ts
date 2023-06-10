import LuciScreen from "../../../core/navigation/LuciScreen";
import LuciStack from "../../../core/navigation/LuciStack";
import { CommandHubScreen } from "../../CommandHubScreen";

export const CommandStack = new LuciStack(
    "Hub",
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