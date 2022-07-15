import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme';
import TouchableIcon from '../components/TouchableIcon';


const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab 1 screen');

    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <TouchableIcon iconName='airplane-outline' />
                <TouchableIcon iconName='american-football-outline' />
                <TouchableIcon iconName='bicycle-outline' />
                <TouchableIcon iconName='car-sport-outline' />
                <TouchableIcon iconName='cash-outline' />
                <TouchableIcon iconName='rocket-outline' />

            </Text>
        </View>
    )
}

export default Tab1Screen