import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Text, Platform } from 'react-native'
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TopTabNavigator from './TopTabNavigator';
import Icon from 'react-native-vector-icons/dist/Ionicons';


const Tabs = () => {
    return Platform.OS === 'ios'
        ?
        <TabsIOS />
        :
        <TabsAndroid />
}



const BottomTabIos = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIos.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break;

                        case 'Tab2Screen':
                            iconName = 'T2'
                            break;
                        case 'StackNavigator':
                            iconName = 'ST'
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>
                }
            })}

        >
            {/* <Tab.Screen name='Tab1Screaen' options={{ title: 'Tab 1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={Tab1Screen} /> */}
            <BottomTabIos.Screen name='Tab1Screen' options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <BottomTabIos.Screen name='Tab2Screen' options={{ title: 'Tab 2 Screen' }} component={TopTabNavigator} />
            <BottomTabIos.Screen name='StackNavigator' options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabIos.Navigator>
    )
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colores.primary
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarIcon: ({ focused }) => {
                    let iconName: string = '';
                    let foucusedIconName: string = ''
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'airplane-outline'
                            foucusedIconName = 'airplane'
                            break;

                        case 'Tab2Screen':
                            iconName = 'apps-outline'
                            foucusedIconName = 'apps'
                            break;

                        case 'StackNavigator':
                            iconName = 'file-tray-stacked-outline'
                            foucusedIconName = 'file-tray-stacked'
                            break;
                    }
                    return <Icon name={(focused ? foucusedIconName : iconName)} size={20} color='white' />
                }
            })}
        >
            <BottomTabAndroid.Screen name='Tab1Screen' options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name='Tab2Screen' options={{ title: 'Tab 2 Screen' }} component={TopTabNavigator} />
            <BottomTabAndroid.Screen name='StackNavigator' options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
}


export default Tabs