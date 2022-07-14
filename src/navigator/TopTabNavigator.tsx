import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/dist/Ionicons';


const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets()

    return (
        <Tab.Navigator style={{
            paddingTop: top
        }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary,
                },
                tabBarStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                tabBarIcon: ({ focused }) => {
                    let iconName: string = '';
                    let foucusedIconName: string = ''
                    switch (route.name) {
                        case 'ChatScreen':
                            iconName = 'chatbox-outline'
                            foucusedIconName = 'chatbox'
                            break;

                        case 'ContactsScreen':
                            iconName = 'people-outline'
                            foucusedIconName = 'people'
                            break;

                        case 'AlbumsScreen':
                            iconName = 'albums-outline'
                            foucusedIconName = 'albums'

                            break;
                    }
                    return <Icon name={focused ? foucusedIconName : iconName} size={20} color={colores.primary} />
                }

            })}
        >
            <Tab.Screen name="ChatScreen" options={{ title: 'Chats' }} component={ChatScreen} />
            <Tab.Screen name="ContactsScreen" options={{ title: 'Contacts' }} component={ContactScreen} />
            <Tab.Screen name="AlbumsScreen" options={{ title: 'Albums' }} component={AlbumsScreen} />
        </Tab.Navigator>
    );
}

export default TopTabNavigator