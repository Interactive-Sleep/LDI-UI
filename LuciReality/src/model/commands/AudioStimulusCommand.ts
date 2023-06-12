import { Command } from "../core/Command";
import { Attatchment } from "../core/Attatchment";
import { PlaySoundInst } from "../Instructions/sound/PlaySoundInst";
import { StopSoundInst } from "../Instructions/sound/StopSoundInst";
import { WaitInst } from "../Instructions/WaitInst";
import { COMMAND_DURATION_MILLIS, COMMAND_NAMES } from "./CommandTypes";

export class AudioStimulusCommand extends Command {

    public constructor(){
        const playSound = new PlaySoundInst("alpha");
        const stopSound = new StopSoundInst();
        const wait = new WaitInst({
            time: COMMAND_DURATION_MILLIS
        });

        super(
            COMMAND_NAMES.AUDIO_STIMULUS, 
            [playSound, wait, stopSound], 
            [
                new Attatchment(
                    1,
                    "Speakers",
                    "The speakers can controlled by the connected device. They can be used to play the audio stimulus"
                )
            ]
        );
    }
}