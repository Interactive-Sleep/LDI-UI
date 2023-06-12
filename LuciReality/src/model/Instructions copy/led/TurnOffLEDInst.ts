import { Instruction } from "../../Core/Instruction";

/**
 * Class for turning off LED
 */
export class TurnOffLEDInst extends Instruction {

    public constructor(){
        super(2);
    }

}