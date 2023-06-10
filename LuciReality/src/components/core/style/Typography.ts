import { ColourProvider } from "./ColourProvider";
import { Font } from "./typography/Font";
import { FontFamily } from "./typography/FontFamily";
import { FontFormatting } from "./typography/FontFormatting";

export class Typography {
    
    public static readonly instance: Typography = new Typography();

    public get title(){
        return new Font(
            new FontFormatting(
                "bold"
            ),
            50,
            new FontFamily(),
            ColourProvider.instance.text
        );
    }

    public get subTitle(){
        return new Font(
            new FontFormatting(
                "bold"
            ),
            40,
            new FontFamily(),
            ColourProvider.instance.text
        );
    }

    public get body(){
        return new Font(
            new FontFormatting(
                "200"
            ),
            15,
            new FontFamily(),
            ColourProvider.instance.text
        )
    }

    public get centeredBody(){
        return new Font(
            new FontFormatting(
                "200"
            ),
            15,
            new FontFamily(),
            ColourProvider.instance.text
        );
    }

    public get button(){
        return new Font(
            new FontFormatting(
                "bold",
                "center",
                "center"
            ),
            30,
            new FontFamily(),
            ColourProvider.instance.buttonText
        )
    }

    public get pressable(){
        return new Font(
            new FontFormatting(
                "bold",
                "center",
                "center"
            ),
            30,
            new FontFamily(),
            ColourProvider.instance.primaryButton
        )
    }

    public get pomodoroTimer(){
        return new Font(
            new FontFormatting(
                "bold"
            ),
            100,
            new FontFamily(),
            ColourProvider.instance.secondaryButton
        )
    }

    public get selectableView(){
        return new Font(
            new FontFormatting(
                "bold"
            ),
            15,
            new FontFamily(),
            ColourProvider.instance.text
        )
    }
}