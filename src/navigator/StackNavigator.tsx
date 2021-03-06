import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import PersonaScreen from '../screens/PersonaScreen';
import { Persona } from '../interfaces/Personas';
import AmigosScreen from '../screens/AmigosScreen';

export type RootStackParams = {
    Pagina1Screen: undefined
    Pagina2Screen: undefined
    Pagina3Screen: undefined
    AmigosScreen: undefined
    PersonaScreen: Persona
}



const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            // headerShown: false, 
            headerStyle: {
                elevation: 0
                // shadowColor: 'transparent'
            },
            cardStyle: {
                backgroundColor: 'white'

            }
        }}>
            <Stack.Screen name="Pagina1Screen" options={{ title: 'Página 1' }} component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" options={{ title: 'Página 2' }} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" options={{ title: 'Página 3' }} component={Pagina3Screen} />
            <Stack.Screen name="AmigosScreen" options={{ title: 'Friends' }} component={AmigosScreen} />
            <Stack.Screen name='PersonaScreen' options={{ title: 'Página Persona' }} component={PersonaScreen} />
        </Stack.Navigator>
    );
}