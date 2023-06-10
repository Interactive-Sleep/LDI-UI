import { createStackNavigator } from "@react-navigation/stack";
import LuciStack from "../LuciStack";
import { useSafeAreaFrame, useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
    stack: LuciStack
}

export const LinearNavigator: React.FC<Props> = ({ stack }) => {
    const Stack = createStackNavigator();

    const { height, width } = useSafeAreaFrame();
    const { top, bottom } = useSafeAreaInsets();
    const styles = {
        top: {
            paddingTop: top,
        },
        bottom: {
            marginBottom: bottom,
        },
    };

    return (
        <Stack.Navigator>
            {
                stack.screens.map((screen, index) => {
                    return (
                        <Stack.Screen 
                            key={screen.id}
                            name={screen.title}
                            component={screen.component}
                            options={({ navigation }) => ({
                                ...screen.options,
                                header: () => (
                                    <></>
                            )})}
                        />
                    );
                })
            }
        </Stack.Navigator>
    );
}