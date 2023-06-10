import React from "react";
import { InterfaceNavigator } from "./core/navigation/navigators/AppNavigator";
import { UserInterface } from "./ui/navigation/UserInterface";

export const MainScreen: React.FC = () => {
    return (
        <InterfaceNavigator luciInterface={UserInterface}/>
    );
};