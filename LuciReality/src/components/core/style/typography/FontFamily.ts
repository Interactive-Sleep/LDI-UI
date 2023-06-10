import { UnreachableCaseError } from "../../../../language/errors/UnreachableCaseError";
import { Environment } from "../../../../state/environment/Environment";
import { androidFonts, iosFonts, webFonts } from "./ReactNativeFonts";

/**
 * Contains a font family for pomodoran, this family includes the ios and android font versions. This class also validates the font to ensure
 * that it will not throw an error during runtime.
 */
export class FontFamily {
    
    private iosFontFamily: iosFonts;
    private androidFontFamily: androidFonts;
    private webFontFamily: webFonts;

    constructor(iosFontFamily: iosFonts = "System", androidFontFamily: androidFonts = "System", webFontFamily: webFonts = "System"){
        this.iosFontFamily = iosFontFamily;
        this.androidFontFamily = androidFontFamily;
        this.webFontFamily = webFontFamily;
    }

    /**
     * Gets the correct font based on the OS
     */
    public get getFont(): string {
        let tmpFontFamily;

        switch (Environment.instance.getOS()){
            case "ios":
                tmpFontFamily = this.iosFontFamily;
                break;
            case "android":
                tmpFontFamily = this.androidFontFamily;
                break;
            case "web":
                tmpFontFamily = this.webFontFamily;
                break;
            default:
                throw new UnreachableCaseError(Environment.instance.getOS());
        }

        return tmpFontFamily;
    }

}