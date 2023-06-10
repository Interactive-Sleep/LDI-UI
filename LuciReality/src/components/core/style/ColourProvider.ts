import { Colour } from "./colour/Colour";

export class ColourProvider {

    public static readonly instance: ColourProvider = new ColourProvider();

    public get text(){
        return new Colour(
            "#001433",
            "#A2AAAD"
        );
    }

    public get background(){
        return new Colour(
            "#FFFFFF",
            "#0D2137"
        );
    }

    public get primaryButton(){
        return new Colour(
            "#C8102E",
            "#C8102E"
        );
    }

    public get secondaryButton(){
        return new Colour(
            "#002244",
            "#B3B7BA"
        );
    }

    public get accent(){
        return new Colour(
            "#878C8E",
            "#C0C0C0"
        );
    }

    public get lightAccent(){
        return new Colour(
            "#F0FBFF",
            "#D6D6D6"
        )
    }

    public get cardBackground(){
        return new Colour(
            "#E8E8E8",
            "#1A2C48"
        );
    }

    public get shadowColour(){
        return new Colour(
            "#000000",
            "#000000"
        );
    }

    public get buttonText(){
        return new Colour(
            "#FFFFFF",
            "#FFFFFF"
        );
    }

    public get selectableView(){
        return new Colour(
            "#B0B0B0",
            "#B0B0B0"
        );
    }

    public get navigationSelectedBackground(){
        return new Colour(
            "#FFE0E6",
            "#FFE0E6"
        );
    }
}