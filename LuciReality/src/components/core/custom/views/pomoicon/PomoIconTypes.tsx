export type PomoIconSize = 
    "large" |
    "medium" |
    "small" |
    number;

export const getPomoIconSizeNumber = (size: PomoIconSize): number => {
    switch (size){
        case "large":
            return 100;
        case "medium":
            return 50;
        case "small":
            return 25;
        default:
            return size;
    }
}