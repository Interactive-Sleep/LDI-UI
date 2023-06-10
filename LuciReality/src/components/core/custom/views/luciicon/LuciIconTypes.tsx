export type LuciIconSize = 
    "large" |
    "medium" |
    "small" |
    number;

export const getLuciIconSizeNumber = (size: LuciIconSize): number => {
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