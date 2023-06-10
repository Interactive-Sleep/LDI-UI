import React, { useEffect, useState } from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { StackWrapper } from "../impl/RenderStack"
import { Colour } from "../../style/colour/Colour"
import { Environment } from "../../../../state/environment/Environment"
import { LuciScreenOrientation } from "../../../../state/environment/types/LuciScreenOrientation"
import { Dimensions } from "react-native"
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import LuciStack from "../LuciStack";
import StateManager from "../../../../state/publishers/StateManager";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LuciText } from "../../custom/views/lucitext/LuciText"
import { Typography } from "../../style/Typography"
import { ColourProvider } from "../../style/ColourProvider"

interface Props {
    stacks: LuciStack[]
}


const CustomDrawerContent = (props: any) => {
    return (
        <DrawerContentScrollView {...props}>
            <LuciText text={"Luci"} style={{ paddingLeft: 5 }} font={Typography.instance.subTitle}/>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator()
  
export const DrawerNavigator: React.FC<Props> = ({ stacks }) => {

    const getDrawerType = (): 'front' | 'slide' | 'back' | 'permanent' => {
        return Environment.instance.getScreenOrientation() == LuciScreenOrientation.Landscape ? 'permanent' : 'front';
    }
    const [ drawerType, setDrawerType ] = useState(getDrawerType());
    const navigation = useNavigation();

    // We only want to add the listener once, when the drawer is mounted
    useEffect(() => {
        const handleDimensionChange = () => {
            const newDrawerType = getDrawerType();
            setDrawerType(newDrawerType);

            if (newDrawerType !== 'permanent') {
                navigation.dispatch(DrawerActions.openDrawer());
            }
        };

        Dimensions.addEventListener('change', handleDimensionChange)
    }, []);

    // Update StateManager.drawerItemChanged
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('state', () => {
            let state = navigation.getState();
            if (state != undefined && state.index != StateManager.drawerItemChanged.read()) {
                StateManager.drawerItemChanged.publish(state.index);
            }
        });
        return unsubscribe;
    }, []);

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: drawerType,
                drawerStyle: {
                    backgroundColor: ColourProvider.instance.background.getColour(),
                    width: Environment.instance.getScreenOrientation() == LuciScreenOrientation.Landscape ? Environment.instance.getScreenWidth() * 0.2 : Environment.instance.getScreenWidth() * 0.3
                },
                // TODO: Extract into accentBackgroundColor
                drawerActiveBackgroundColor:  ColourProvider.instance.navigationSelectedBackground.getColour(),
                drawerActiveTintColor: ColourProvider.instance.accent.getColour(),
                drawerItemStyle: {
                    borderRadius: 16,
                },
                drawerLabelStyle: {
                    ...Typography.instance.body.getFontStyleProps,
                }
            }}
            drawerContent={(props: any) => <CustomDrawerContent {...props} />}
        >
            {
                stacks.map(stack => 
                    <Drawer.Screen 
                        name={stack.stackName} 
                        key={stack.stackName} 
                        component={StackWrapper(stack)}
                        options={{
                            drawerIcon: ({ color, size, focused }: {
                                color: string,
                                size: number,
                                focused: string
                            }) => (
                                <Icon 
                                    name={focused ? stack.focusedIcon : stack.icon} 
                                    color={focused ? ColourProvider.instance.accent.getColour() : color} 
                                    size={size}
                                    style={{
                                        // TODO: Not sure how this is supposed to be accomplished
                                        // (A bit hacky)
                                        paddingLeft: 8,
                                        marginRight: -16,
                                    }} 
                                />
                            )
                        }}
                    />
                )
            }
        </Drawer.Navigator>
    )
}