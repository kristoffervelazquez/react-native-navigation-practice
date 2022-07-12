import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native'
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const MenuLateralBasico = () => {

    const { width } = useWindowDimensions()


    return (
        <Drawer.Navigator
            screenOptions={{ drawerPosition: 'left', headerShown: false, drawerType: width >= 768 ? 'permanent' : 'front' }}
            initialRouteName='StackNavigator'
        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

export default MenuLateralBasico




