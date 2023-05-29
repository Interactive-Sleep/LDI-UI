import { UnreachableCaseError } from "../../../language/errors/UnreachableCaseError";
import { LuciFont } from "./LuciFont";
import LuciFontFamilyConfig from "./LuciFontFamilyConfig";

export enum LuciFontFamily {
    gilroy,
    poppins,
    circular,
}

export namespace LuciFontFamily {
    export function getConfig(family: LuciFontFamily): LuciFontFamilyConfig {
        switch (family) {
            case LuciFontFamily.gilroy: 
                return new LuciFontFamilyConfig(
                    null,
                    null,
                    null,
                    LuciFont.gilroyExtraBold,
                    null,
                    null,
                    null,
                    null,
                );
            case LuciFontFamily.poppins:
                return new LuciFontFamilyConfig(
                    LuciFont.poppinsMedium, 
                    LuciFont.poppinsSemiBold,
                    LuciFont.poppinsBold, 
                    null,
                    LuciFont.poppinsMediumItalic, 
                    LuciFont.poppinsSemiBoldItalic,
                    LuciFont.poppinsBoldItalic,
                    null,
                );
            case LuciFontFamily.circular:
                return new LuciFontFamilyConfig(
                    LuciFont.circularMedium,
                    null,
                    LuciFont.circularBold,
                    LuciFont.circularBlack,
                    LuciFont.circularMediumItalic,
                    null,
                    LuciFont.circularBoldItalic,
                    LuciFont.circularBlackItalic,
                );
            default: 
                throw new UnreachableCaseError(family);
        }
    }
}