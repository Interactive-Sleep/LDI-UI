import { Colour } from "../colour/Colour";
import { FontFamily } from "./FontFamily"
import { FontFormatting } from "./FontFormatting";
import { StyleSheet } from "react-native";

export class Font {

    private fontFormatting: FontFormatting;
    private size: number;
    private colour: Colour;
    private fontFamily: FontFamily;

    constructor(fontFormatting: FontFormatting, size: number, fontFamily: FontFamily, colour: Colour){
        this.fontFormatting = fontFormatting;
        this.size = size;
        this.fontFamily = fontFamily;
        this.colour = colour;
    }
    
    get getFontStyleProps(): {} {
        return StyleSheet.create({
            font: {
                fontSize: this.size,
                fontFamily: this.fontFamily.getFont,
                color: this.colour.getColour(),
                ...this.fontFormatting.getFormattingStyleProps
            }
        }).font
    }

}