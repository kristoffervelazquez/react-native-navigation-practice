import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/dist/Ionicons';


const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab 1 screen');

    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <Icon name='airplane-outline' size={80} color={colores.primary} />
                <Icon name='american-football-outline' size={80} color={colores.primary} />
                <Icon name='bicycle-outline' size={80} color={colores.primary} />
                <Icon name='car-sport-outline' size={80} color={colores.primary} />
                <Icon name='cash-outline' size={80} color={colores.primary} />
                <Icon name='rocket-outline' size={80} color={colores.primary} />

            </Text>
        </View>
    )
}

export default Tab1Screen