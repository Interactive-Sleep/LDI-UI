import { ColourProvider } from "../../components/core/style/ColourProvider";
import { Device } from "../../model/core/Arudino";
import { Command } from "../../model/core/Command";
import LuciPublisher from "./impl/LeafPublisher";
import LuciValuePublisher from "./impl/LeafValuePublisher"

/**
 * Stores application-level state to avoid having to pass state to different components, and reduces component coupling. Uses the publisher-subscriber pattern.
 * 
 * To define value-less state, statically instantiate a LeafPublisher.
 * ``` public static readonly myState = new LeafPublisher(); ```
 * To publish to that state, call the publish method. This would be done in a component.
 * ``` StateManager.myState.publish(); ```
 * Any component can subscribe. Every time the state is published, a callback is called.
 * ```
 * StateManager.myState.subscribe(() => {
 *     // React to the state change, e.g. update hooks or call forceUpdate()
 * });
 * ```
 * 
 * To define a state with value, statically instantiate a LeafValuePublisher.
 * ``` public static readonly loginStatus = new LeafValuePublisher(LoginStatus.loggedOut); ```
 * To publish to that state, a value must be passed to the publish method. This would be done in a component.
 * ``` StateManager.loginStatus.publish(LoginStatus.worker); ```
 * Any component can subscribe. Every time the state is published, a callback is called.
 * ```
 * StateManager.loginStatus.subscribe(() => {
 *     // We can read the state value
 *     let stateValue: LoginStatus = StateManager.loginStatus.read();
 * 
 *     // React to the state change, e.g. update hooks or call forceUpdate()
 * });
 * ```
 */
class StateManager {

    public static readonly selectedViewIsSelected = new LuciPublisher();

    public static readonly drawerShowStack = new LuciValuePublisher(false);

    public static readonly headerColor = new LuciValuePublisher(ColourProvider.instance.background.getColour());

    public static readonly headerTitleOverride = new LuciValuePublisher<string | null>(null);

    public static readonly arduinos = new LuciValuePublisher<Device[]>([]);

    public static readonly commands = new LuciValuePublisher<Command[]>([]);

    public static readonly drawerItemChanged = new LuciValuePublisher(0);

    public static readonly sideBarItemPressed = new LuciPublisher();

}

export default StateManager;