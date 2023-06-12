import { Instruction } from "../../core/Instruction";
import { SoundNames } from "./SoundNames";

export class PlaySoundInst extends Instruction {
    
    private soundName: SoundNames;
    private durationMilliSeconds: number;

    constructor(soundName: SoundNames, durationMilliSeconds: number){
        super(
            3,
            {
                soundName: soundName,
                durationMilliSeconds: durationMilliSeconds
            }
        );
        this.soundName = soundName;
        this.durationMilliSeconds = durationMilliSeconds;
    }
}