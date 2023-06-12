import { Instruction } from "../Core/Instruction";

// this is a an extension of an object so it works with our typing
type WaitPayload = {
    time: number
};

/**
 * Class for waiting a set time
 */
export class WaitInst extends Instruction {

    /**
     * 
     * @param payload { time: milliseconds }
     */
    public constructor(payload: WaitPayload){
        super(11, payload);
    }

}