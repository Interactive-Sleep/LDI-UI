import LuciTypographyConfig from "./typography/LuciTypographyConfig";
import LuciColors from "./LuciColors";
import { LuciFontWeight } from "./typography/LuciFontWeight";
import { LuciFontFamily } from "./typography/LuciFontFamily";

class LuciTypography {

    static get display(): LuciTypographyConfig {
        return new LuciTypographyConfig(
            70,
            LuciFontFamily.gilroy,
            LuciColors.textBlack,
            LuciFontWeight.black,
        );
    }

    static get header(): LuciTypographyConfig {
        return new LuciTypographyConfig(
            40,
            LuciFontFamily.circular,
            LuciColors.textDark,
            LuciFontWeight.black,
            false,
            false,
            false,
            -0.5
        );
    }

    static get cardTitle(): LuciTypographyConfig {
        return new LuciTypographyConfig(
            20,
            LuciFontFamily.poppins,
            LuciColors.textDark,
            LuciFontWeight.semiBold,
        );
    }

    static get formCardTitle(): LuciTypographyConfig {
        return new LuciTypographyConfig(
            16,
            LuciFontFamily.poppins,
            LuciColors.textDark,
            LuciFontWeight.bold,
        );
    }

    static get body(): LuciTypographyConfig {
        return new LuciTypographyConfig(
            15,
            LuciFontFamily.poppins,
            LuciColors.textDark,
        );
    }

    static get subscript(): LuciTypographyConfig {
        return new LuciTypographyConfig(
            13,
            LuciFontFamily.poppins,
            LuciColors.textSemiDark,
        );
    }

    static get badge(): LuciTypographyConfig {
        return new LuciTypographyConfig(
            18,
            LuciFontFamily.poppins,
            undefined,
            LuciFontWeight.bold,
        );
    }

    static get primaryButton(): LuciTypographyConfig {
        return new LuciTypographyConfig(
            18,
            LuciFontFamily.poppins,
            LuciColors.textLight,
            LuciFontWeight.bold,
        );
    }

}

export default LuciTypography;