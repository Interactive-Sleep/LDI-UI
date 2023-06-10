import { Appearance, Dimensions, PlatformIOSStatic } from "react-native";
import { ScreenType } from "./types/ScreenType";
import { LuciScreenOrientation } from "./types/LuciScreenOrientation";
import { Platform } from 'react-native';
import { ColourScheme } from "./types/ColourScheme";
import { OS } from "./types/OS";
import { UnreachableCaseError } from "../../language/errors/UnreachableCaseError";

/**
 * Holds details about the current running environment
 */
export class Environment {

    public static readonly instance = new Environment()

    private constructor() { }

    /**
     * Get the current colour scheme of the device, light or dark
     * @returns the colour scheme
     */
    public getColorScheme(): ColourScheme {
        // TODO: I can't get this to change correctly
        const colourScheme = Appearance.getColorScheme();
        // const colourScheme = "dark"
        switch (colourScheme) {
            case 'dark':
                return "dark";
            case 'light':
                return "light";
            default:
                return "light";
        }
    }

    /**
     * Get the current OS running the application
     * @returns the current {@link OS}
     */
    public getOS(): OS {
        switch (Platform.OS) {
            case "android":
                return "android";
            case "ios":
                return "ios";
            case "windows":
                return "windows";
            case "macos":
                return "macos";
            case "web":
                return "web";
            default:
                return "unknown";
        }
    }

    public getScreenType(): ScreenType {
        const os = this.getOS();
        switch (os) {
            case "ios":
                return (Platform as PlatformIOSStatic).isPad ? ScreenType.large : ScreenType.mobile;
            case "android":
                // TODO: Figure out how to detect Android tablets
                return ScreenType.mobile;
            case "windows":
            case "macos":
                return ScreenType.large;
            case "web":
            case "unknown":
                const dimensions = this.getScreenDimensions();
                if (dimensions[1] > dimensions[0]) {
                    // Height > width, assume mobile
                    return ScreenType.mobile;
                }
                // Any landscape screen on a web client can be assumed to be on a large screen
                return ScreenType.large;
            default:
                throw new UnreachableCaseError(os);
        }
    }

    public getScreenOrientation(): LuciScreenOrientation {
        const dimensions = this.getScreenDimensions();
        if (dimensions[0] > dimensions[1]){
            return LuciScreenOrientation.Landscape;
        }
        
        return LuciScreenOrientation.Potrait;
    }

    public getScreenWidth(): number {
        return Dimensions.get('window').width;
    }

    public getScreenHeight(): number {
        return Dimensions.get('window').height;
    }

    private getScreenDimensions(): [number, number] {
        return [
            Dimensions.get("window").width,
            Dimensions.get("window").height
        ]
    }

}