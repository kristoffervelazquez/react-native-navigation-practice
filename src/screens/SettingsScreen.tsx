import { Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'

const SettingsScreen = () => {

    const inserts = useSafeAreaInsets()

    return (
        <View style={{ marginTop: inserts.top, ...styles.globalMargin, alignItems: 'center' }}>
            <Text style={styles.title}>SettingsScreen</Text>
            <View>
                <Text>Pantalla de ajustes de usuario</Text>
            </View>
        </View>
    )
}

export default SettingsScreen
