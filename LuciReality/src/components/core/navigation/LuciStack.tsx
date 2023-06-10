import LuciScreen from "./LuciScreen";
import LuciSidebarItem from "./LuciSidebarItem";

/**
 * Our stack object
 */
class LuciStack {

    /**
     * @param stackName the name of the stack, this will be the name seen on the tab bar
     * @param initialRouteName the initial screen
     * @param screens the screens in the stack, the first element in the array will be taken as the first screen
     * @param icon the icon for the tab bar to show
     * @param focusedIcon the icon for the tab bar to show when the stack is selected
     * @param options the stack options, provided to the stack (https://reactnavigation.org/docs/stack-navigator)
     * @param sideBarItemList the side bar items, if your first screen is a list of items that should be rendered as a sidebar on tablet (see navigation on github) then you will need to provide this param
     * @param sideBarSearchable are the items in the sidebar searchable? false by default
     */
    constructor(
        public readonly stackName: string,
        public readonly icon: string,
        public readonly focusedIcon: string,
        public readonly sideBarItemList: LuciSidebarItem[] = [],
        public readonly sideBarSearchable: boolean = false,
        public readonly screens: LuciScreen[] = [],
        public readonly options?: object,
    ) {}

    /**
     * Adds a screen to the stack
     * @param screen the screen you want to add
     * @returns a {@link LuciStack} with the added screen
     */
    public addScreen(screen: LuciScreen): LuciStack {
        this.screens.push(screen);
        return this;
    }

    public addNewScreen(name: string, id: string, component: React.FC, options?: object): LuciStack {
        let screen = new LuciScreen(name, id, component, options);
        this.addScreen(screen);
        return this;
    }

}

export default LuciStack;