import { VisualStimulusCommand } from "../Commands/VisualStimulusCommand";
import { Command } from "./Command";
import { CommandNames } from "./CommandNameEnum";

/**
 * The purpose of this class is just to translate a command name string into the corresponding command class
 */
export class CommandTranslator {

    public static commandNameToCommand(commandName: string): Command | undefined {
        switch (commandName){
            case (CommandNames.VisualStimulus):
                return new VisualStimulusCommand();
            default:
                return undefined;
        }
    }
}