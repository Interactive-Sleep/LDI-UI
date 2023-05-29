import { assert } from "../../../language/assertions/Assert";
import { UnreachableCaseError } from "../../../language/errors/UnreachableCaseError";
import { LuciFont } from "./LuciFont";
import { LuciFontWeight } from "./LuciFontWeight";

class LuciFontFamilyConfig {

    private readonly regular: LuciFont | null;
    private readonly semiBold: LuciFont | null;
    private readonly bold: LuciFont | null;
    private readonly black: LuciFont | null;
    private readonly italic: LuciFont | null;
    private readonly semiBoldItalic: LuciFont | null;
    private readonly boldItalic: LuciFont | null;
    private readonly blackItalic: LuciFont | null;

    constructor(
        regular: LuciFont | null, 
        semiBold: LuciFont | null,
        bold: LuciFont | null,
        black: LuciFont | null,
        italic: LuciFont | null,
        semiBoldItalic: LuciFont | null,
        boldItalic: LuciFont | null,
        blackItalic: LuciFont | null,
    ) {
        this.regular = regular;
        this.semiBold = semiBold;
        this.bold = bold;
        this.black = black;
        this.italic = italic;
        this.semiBoldItalic = semiBoldItalic;
        this.boldItalic = boldItalic;
        this.blackItalic = blackItalic;
    }

    public getFont(weight: LuciFontWeight, isItalic: boolean): LuciFont {
        switch (weight) {
            case LuciFontWeight.regular:
                let regular = isItalic ? this.italic : this.regular;
                assert(regular != null, "Font requested not provided/available");
                return regular;
            case LuciFontWeight.semiBold:
                let semiBold = isItalic ? this.semiBoldItalic : this.semiBold;
                assert(semiBold != null, "Font requested not provided/available");
                return semiBold;
            case LuciFontWeight.bold:
                let bold = isItalic ? this.boldItalic : this.bold;
                assert(bold != null, "Font requested not provided/available");
                return bold;
            case LuciFontWeight.black:
                let black = isItalic ? this.blackItalic : this.black;
                assert(black != null, "Font requested not provided/available");
                return black;
            default:
                throw new UnreachableCaseError(weight);
        }
    }

}

export default LuciFontFamilyConfig;