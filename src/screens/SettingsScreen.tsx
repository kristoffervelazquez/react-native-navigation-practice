import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles, colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {

    const { authState } = useContext(AuthContext)

    const { favoriteIcon } = authState

    const inserts = useSafeAreaInsets();

    return (
        <View style={{ marginTop: inserts.top, ...styles.globalMargin, alignItems: 'center' }}>
            <Text style={styles.title}>SettingsScreen</Text>
            <View>
                <Text>Pantalla de ajustes de usuario</Text>
                <Text>{JSON.stringify(authState, null, 3)}</Text>

                {
                    favoriteIcon !== null &&

                    <Icon name={favoriteIcon} size={90} color={colores.primary} />
                }


            </View>
        </View>
    )
}

export default SettingsScreen
