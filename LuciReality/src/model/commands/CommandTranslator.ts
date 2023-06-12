import { VisualStimulusCommand } from "./VisualStimulusCommand";
import { Command } from "../core/Command";
import { COMMAND_NAMES } from "./CommandTypes";
import { AudioStimulusCommand } from "./AudioStimulusCommand";

/**
 * The purpose of this class is just to translate a command name string into the corresponding command class
 */
export class CommandTranslator {

    public static commandNameToCommand(commandName: string): Command | undefined {
        switch (commandName){
            case (COMMAND_NAMES.VISUAL_STIMULUS):
                return new VisualStimulusCommand();
            case (COMMAND_NAMES.AUDIO_STIMULUS):
                return new AudioStimulusCommand();
            default:
                console.log(`Command ${commandName} is not an existing command`);
                return undefined;
        }
    }
}