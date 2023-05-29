import LuciColor from "../color/LuciColor";
import { LuciFontFamily } from "./LuciFontFamily";
import LuciFontFamilyConfig from "./LuciFontFamilyConfig";
import { StyleSheet } from 'react-native';
import { LuciFontWeight } from "./LuciFontWeight";

class LuciTypographyConfig {

    public size: number;
    public fontFamily: LuciFontFamily;
    // An undefined color allows the component handle the color
    public leafColor: LuciColor | undefined;
    public weight: LuciFontWeight;
    public italic: boolean;
    public underlined: boolean;
    public linedOut: boolean;
    public kerning: number;
    get font(): string {
        let config: LuciFontFamilyConfig = LuciFontFamily.getConfig(this.fontFamily);
        return config.getFont(this.weight, this.italic);
    }
    get color(): string | undefined {
        return this.leafColor?.getColor();
    }
    get lineStyle(): "none" | "underline" | "line-through" | "underline line-through" {
        let result = "";
        if (!this.underlined && !this.linedOut) {
            result = "none";
        } else {
            if (this.underlined) {
                result = "underline";
            }
            if (this.linedOut) {
                result = (result + " line-through").trimStart();
            }
        }
        return (result as "none" | "underline" | "line-through" | "underline line-through");
    }

    constructor(
        size: number, 
        fontFamily: LuciFontFamily, 
        color: LuciColor | undefined,
        weight: LuciFontWeight = LuciFontWeight.regular, 
        italic: boolean = false, 
        underlined: boolean = false,
        linedOut: boolean = false,
        kerning: number = 0,
    ) {
        this.size = size;
        this.fontFamily = fontFamily;
        this.leafColor = color;
        this.weight = weight;
        this.italic = italic;
        this.underlined = underlined;
        this.linedOut = linedOut;
        this.kerning = kerning;
    }

    public getStylesheet(): {} {
        return StyleSheet.create({
            typography: {
                fontFamily: this.font,
                color: this.color,
                fontSize: this.size,
                textDecorationLine: this.lineStyle,
                letterSpacing: this.kerning,
            }
        }).typography;
    }

}

export default LuciTypographyConfig;