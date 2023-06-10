import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StateManager from "../../../../state/publishers/StateManager";
import { ColourProvider } from "../../style/ColourProvider";
import { Typography } from "../../style/Typography";
import { LuciText } from "../../custom/views/lucitext/LuciText";
import { Searchbar } from 'react-native-paper';
import LuciSidebarItem from "../LuciSidebarItem";
import { BaseDimensions } from "../../style/BaseDimensions";
import { Spacer, VStack } from "native-base";
import { LuciIcon } from "../../custom/views/luciicon/LuciIcon";
import { Colour } from "../../style/colour/Colour";

interface Props {
    items: LuciSidebarItem[];
    title: string;
    searchable: boolean;
}

/**
 * Renders an item list, we wrap each item in a touchable opacity so that we can overwrite the onPress of the item component. 
 * The onPress calls the passProps function of the item then updates state telling our drawer to render the stack next to the sidebar
 * @param param0 {@link Props}
 * @returns our custom sidebar
 */
export const Sidebar: React.FC<Props> = ({ items, title, searchable }) => {

    useEffect(() => {
        StateManager.drawerShowStack.publish(false);
    }, [])

    // Searchbar
    const [ searchQuery, setSearchQuery ] = React.useState('');
    const [ filteredSidebarItems, setFilteredSidebarItems] = React.useState(items)

    // Filter items
    const onChangeSearch = (query: any) => {
        setFilteredSidebarItems(items.filter(item => item.searchableString != undefined ? item.searchableString.toLowerCase().includes(query.toLowerCase()) : false));
        setSearchQuery(query);
    }

    return (
        <SafeAreaView style={styles.container}>
            <VStack paddingX={BaseDimensions.instance.screenPadding/2} flex={1}>
                <LuciText font={Typography.instance.subTitle} text={title}/> 

                {
                    searchable
                        ? 
                    <View style={styles.searchBarWrapper}>
                        {/* TODO: Create LeafSearchbar */}
                        <Searchbar
                            placeholder="Search"
                            placeholderTextColor="#c6bcd6"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            theme={{ colors: { primary: ColourProvider.instance.text.getColour() } }}
                            icon={({ size, color }: {
                                size: number,
                                color: string
                            }) => (
                                <LuciIcon icon={"magnify"} colour={new Colour(color, color)} size={size} style={{paddingLeft: 8}} />
                            )}
                            iconColor={ColourProvider.instance.text.getColour()}
                            inputStyle={{
                                color: ColourProvider.instance.text.getColour(),
                                ...Typography.instance.body.getFontStyleProps,
                                marginVertical: -10,
                            }}
                            style={{
                                backgroundColor: "#f1edfc",
                                borderRadius: 30,
                                borderWidth: 1,
                                borderColor: "#ded8e8",
                                height: 55,
                            }}
                        />
                    </View>
                        :
                    null
                }

                <ScrollView>
                    <VStack space={BaseDimensions.instance.screenSpacing/2}>
                        {
                            filteredSidebarItems.map(item => {
                                return (
                                    <View style={styles.sidebarItemWrapper} key={item.id.toString()}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                item.passProps();
                                                StateManager.drawerShowStack.publish(true);
                                                StateManager.sideBarItemPressed.publish();
                                            }}
                                        >
                                            <item.component />
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </VStack>
                </ScrollView>
            </VStack>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRightWidth: 0.5,
        backgroundColor: ColourProvider.instance.background.getColour(),
        borderColor: ColourProvider.instance.accent.getColour(),
    },
    title: {
        textAlign: 'center', 
        paddingVertical: 16,
    },
    searchBarWrapper: {
        paddingBottom: 16
    },
    sidebarItemWrapper: { }
})