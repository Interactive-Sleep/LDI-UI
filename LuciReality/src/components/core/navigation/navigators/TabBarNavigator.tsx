import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackWrapper } from "../impl/RenderStack";
import { createMaterialBottomTabNavigator, MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs';
import LuciStack from "../LuciStack";
import { ColourProvider } from "../../style/ColourProvider";
import { PaperProvider } from "react-native-paper";
import { DefaultTheme } from "@react-navigation/native";

interface Props {
    stacks: LuciStack[]
}

const Tab = createMaterialBottomTabNavigator();
const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: ColourProvider.instance.navigationSelectedBackground.getColour(),
    },
};

/**
 * Our custom tab bar
 * @param param0 {@link Props}
 * @returns a JSX tab bar
 */
export const TabBarNavigator: React.FC<Props> = ({ stacks }) => {
    return (
        <PaperProvider theme={theme}>
            <Tab.Navigator
                barStyle={{ 
                    backgroundColor: ColourProvider.instance.lightAccent.getColour(),
                    height: 100
                }}
                screenOptions={({ route }): MaterialBottomTabNavigationOptions => ({
                    tabBarIcon: ({ focused, color }: {
                        focused: boolean,
                        color: string
                    }) => {
                        const stack = stacks.find((s) => s.stackName === route.name);
                        if (!stack) return null;
                        
                        const iconName = focused ? stack.focusedIcon : stack.icon;
                        return <Icon name={iconName} size={26} color={color} />;
                    },
                })}
                >
                {
                    stacks.map((stack) => {
                        const StackComponent = StackWrapper(stack);
                        return <Tab.Screen key={stack.stackName} name={stack.stackName} component={StackComponent} />;
                    })
                }
            </Tab.Navigator>
        </PaperProvider>
    );
};


