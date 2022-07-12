import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();




const MenuLateral = () => {

    return (
        <Drawer.Navigator
            screenOptions={{ drawerPosition: 'left', headerShown: false }}
            initialRouteName='StackNavigator'
            //El drawerContent muestra un contenido personalizado que en este caso es el componente MenuInterno
            drawerContent={(props) => <MenuInterno {...props} />}
        >

            {/* Estas son las rutas que se pueden llamar en el menu interno */}
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno = (props: DrawerContentComponentProps) => {
    const { navigation } = props;

    return (
        <DrawerContentScrollView>

            {/* Parte del menu del avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones del menu */}
            <View style={styles.menuContainer}>

                <TouchableOpacity style={styles.menuItem}
                    onPress={() => { navigation.navigate('StackNavigator') }}
                >
                    <Text style={styles.menuItemText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}
                    onPress={() => { navigation.navigate('AmigosScreen') }}
                >
                    <Text style={styles.menuItemText}>Friends</Text>
                </TouchableOpacity>
 
                <TouchableOpacity style={styles.menuItem}
                    onPress={() => { navigation.navigate('SettingsScreen') }}
                >
                    <Text style={styles.menuItemText}>Settings</Text>
                </TouchableOpacity>


            </View>
        </DrawerContentScrollView>
    )
}

export default MenuLateral



