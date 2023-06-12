import { Attatchment } from "../core/Attatchment";
import { Command } from "../core/Command";
import { COMMAND_NAMES } from "./CommandTypes";
import { Instruction } from "../core/Instruction";
import { TurnOffLEDInst } from "../instructions/led/TurnOffLEDInst";
import { TurnOnLEDInst } from "../instructions/led/TurnOnLEDInst";
import { WaitInst } from "../instructions/WaitInst";
import { VISIUAL_STIMULUS_FLASH_NUMBER, VISIUAL_STIMULUS_FLASH_RATE_MILLIS } from "./CommandTypes";

export class VisualStimulusCommand extends Command {

    public constructor(){
        
        const turnOnLED = new TurnOnLEDInst();
        const turnOffLed = new TurnOffLEDInst();
        const wait = new WaitInst({
            time: VISIUAL_STIMULUS_FLASH_RATE_MILLIS
        });

        // create instructions to flash light ten times
        const instructions: Instruction[] = [];
        for (let i=0; i<VISIUAL_STIMULUS_FLASH_NUMBER; i++){
            instructions.push(turnOnLED);
            instructions.push(wait);
            instructions.push(turnOffLed);
            instructions.push(wait);
        }

        super(
            COMMAND_NAMES.VISUAL_STIMULUS, 
            instructions, 
            [
                new Attatchment(
                    0, 
                    "VisualStimulus",
                    "These LEDs can be turned on/off by the connected device. They can be used with the visual stimulus command"
                )
            ]
        );
    }

}
