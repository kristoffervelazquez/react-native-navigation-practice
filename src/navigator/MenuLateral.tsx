import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { styles, colores } from '../theme/appTheme';
import TabsNavigator from './TabsNavigator';
import Icon from 'react-native-vector-icons/dist/Ionicons';



const Drawer = createDrawerNavigator();




const MenuLateral = () => {

    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                drawerPosition: 'left',
                headerShown: true,
                headerLeft: () => (
                    <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.toggleDrawer()}>
                        <Icon name='menu-outline' size={30} color={colores.primary} />
                    </TouchableOpacity>
                )
            })}

            initialRouteName='StackNavigator'
            //El drawerContent muestra un contenido personalizado que en este caso es el componente MenuInterno
            drawerContent={(props) => <MenuInterno {...props} />}
        >

            {/* Estas son las rutas que se pueden llamar en el menu interno */}
            <Drawer.Screen name="Tabs" options={{ title: 'Home' }} component={TabsNavigator} />
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
                    onPress={() => { navigation.navigate('Tabs') }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='home-outline' size={25} color={colores.primary} />
                        <Text style={{ ...styles.menuItemText, marginLeft: 5 }}>Home</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}
                    onPress={() => { navigation.navigate('SettingsScreen') }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='settings-outline' size={25} color={colores.primary} />
                        <Text style={{ ...styles.menuItemText, marginLeft: 5 }}>Settings</Text>
                    </View>
                </TouchableOpacity>


            </View>
        </DrawerContentScrollView>
    )
}

export default MenuLateral



