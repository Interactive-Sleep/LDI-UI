import { assert } from "../../../../language/assertions/Assert";
import { Environment } from "../../../../state/environment/Environment";

/**
 * This class holds the light and dark colour strings for a colour in PomoDoran. It also validates the colour 
 * to prevent errors.
 */
export class Colour {

    private lightColour: string;
    private darkColour: string;

    constructor(lightColour: string, darkColour: string){
        this.lightColour = lightColour;
        this.darkColour = darkColour;
        this.validateColour(lightColour);
        this.validateColour(darkColour);
    }

    /**
     * Gets the colour based on the devices theme
     * @returns the colour
     */
    public getColour(): string {
        const tmpColour = Environment.instance.getColorScheme() == "light" ? this.lightColour : this.darkColour; 
        return tmpColour;
    }

    /**
     * Validates a colour, if the colour provided is not a valid hex code an error will be thrown
     * @param colour the colour to validate
     * @returns true if valid
     */
    private validateColour(colour: string): boolean {
        const cssColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^rgba?\([^\)]+\)$|^hsla?\([^\)]+\)$|^[\w]+$/;
        assert(cssColorRegex.test(colour), `Invalid lightMode color string provided: '${colour}'`);
        return cssColorRegex.test(colour);
    }
}