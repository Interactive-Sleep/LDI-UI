export const VISIUAL_STIMULUS_FLASH_RATE_MILLIS = 500; 
export const VISIUAL_STIMULUS_FLASH_NUMBER = 10;

// we pause before and after the flash, thus, *2
export const COMMAND_DURATION_MILLIS = VISIUAL_STIMULUS_FLASH_NUMBER * VISIUAL_STIMULUS_FLASH_RATE_MILLIS * 2;

export const COMMAND_NAMES = {
    VISUAL_STIMULUS: "VisualStimulus",
    AUDIO_STIMULUS: "AudioStimulus"
}