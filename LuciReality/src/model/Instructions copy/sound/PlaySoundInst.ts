import { Instruction } from "../../Core/Instruction";
import { SoundNames } from "./SoundNames";

export class PlaySoundInst extends Instruction {
    
    private soundName: SoundNames;

    constructor(soundName: SoundNames){
        super(
            3,
            {soundName: soundName}
        );
        this.soundName = soundName;
    }
}