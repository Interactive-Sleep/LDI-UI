import { Command } from "../core/Command";
import { CommandNames } from "../core/CommandNameEnum";
import { Instruction } from "../core/Instruction";
import { TurnOffLEDInst } from "../instructions/TurnOffLEDInst";
import { TurnOnLEDInst } from "../instructions/TurnOnLEDInst";
import { WaitInst } from "../instructions/WaitInst";

export class VisualStimulusCommand extends Command {

    public constructor(){
        
        const turnOnLED = new TurnOnLEDInst();
        const turnOffLed = new TurnOffLEDInst();
        const wait5sec = new WaitInst({time: 500});

        // create instructions to flash light ten times
        const instructions: Instruction[] = [];
        for (let i=0; i<10; i++){
            instructions.push(turnOnLED);
            instructions.push(wait5sec);
            instructions.push(turnOffLed);
            instructions.push(wait5sec);
        }

        super(CommandNames.VisualStimulus, instructions);
    }

}
