import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Environment } from "../../../../state/environment/Environment";
import { ScreenType } from "../../../../state/environment/types/ScreenType";
import { DrawerNavigator } from "./DrawerNavigator";
import { TabBarNavigator } from "./TabBarNavigator";
import LuciInterface from "../LuciAccountUI";

interface Props {
    luciInterface: LuciInterface
}

export const InterfaceNavigator: React.FC<Props> = ({ luciInterface }) => {
    const deviceIsTablet = Environment.instance.getScreenType() == ScreenType.large;

    return (
        <NavigationContainer>
            {
                deviceIsTablet 
                    ? 
                <DrawerNavigator stacks={luciInterface.stacks}/> 
                    :
                <TabBarNavigator stacks={luciInterface.stacks}/>
            }
        </NavigationContainer>
    ) 
}