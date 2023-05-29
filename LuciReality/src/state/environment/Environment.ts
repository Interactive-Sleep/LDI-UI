import { ColorScheme } from "./types/ColorScheme";

export class Environment {

    public static readonly instance = new Environment();

    private constructor () { }

    public getColorScheme(): ColorScheme {
        // TODO: I can't get this to change correctly
        const colorScheme = 'dark';
        switch (colorScheme) {
            case 'dark':
                return ColorScheme.dark;
            case 'light':
                return ColorScheme.light;
            default:
                return ColorScheme.light;
        }
    }
}