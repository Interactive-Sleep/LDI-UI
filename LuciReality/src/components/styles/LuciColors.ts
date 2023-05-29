import { UnreachableCaseError } from "../../language/errors/UnreachableCaseError";
import LuciColor from "./color/LuciColor";

/**
 * Predefined colors to be used application-wide.
 * Colors are defined with a light-mode and an optional dark-mode variant.
 * Colors should be named using light-mode convention, that is, colors should be named according to how they should be read in light mode. "Dark text" is text that is dark in light mode, and light in dark mode.
 * To select colors, I recommend the resource: https://yeun.github.io/open-color/
 */
class LuciColors {

    // Palette

    static get accent(): LuciColor {
        return new LuciColor("#4f37cc");
    }

    static get mediumAccent(): LuciColor {
        return new LuciColor("#7e61ed");
    }

    static get lightAccent(): LuciColor {
        return new LuciColor("#ded6ff");
    }

    // Text

    static get textBlack(): LuciColor {
        // Note: not literally black
        return new LuciColor("#212529");
    }

    static get textDark(): LuciColor {
        return new LuciColor("#3f4169");
    }

    static get textSemiDark(): LuciColor {
        return new LuciColor("#a6a8c5");
    }

    static get textLight(): LuciColor {
        return new LuciColor("#f8f9fa");
    }

    static get textSemiLight(): LuciColor {
        return new LuciColor("#b6b8bb");
    }

    static get textError(): LuciColor {
        return new LuciColor("#e03131");
    }

    // Backgrounds

    static get textBackgroundDark(): LuciColor {
        return new LuciColor("#f4f5f7");
    }

    static get textBackgroundLight(): LuciColor {
        return new LuciColor("#ffffff");
    }

    static get screenBackgroundLight(): LuciColor {
        return new LuciColor("#ffffff")
    }

    static get screenBackgroundSemiLight(): LuciColor {
        return new LuciColor("#fafafa")
    }

    static get cardBackgroundLight(): LuciColor {
        return new LuciColor("#f2f3f9");
    }
    
    // Outlines

    static get outlineTextBackgroundDark(): LuciColor {
        return new LuciColor("#e9e3e5"); 
    }

    // Borders

    static get sideBarBorderLight(): LuciColor {
        return new LuciColor("#cccccc");
    }


}

export default LuciColors;