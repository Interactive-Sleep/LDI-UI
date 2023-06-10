import { Instruction } from "../Core/Instruction";

/**
 * Class for turning on LED
 */
export class TurnOnLEDInst extends Instruction {

    public constructor(){
        super(1);
    }

}