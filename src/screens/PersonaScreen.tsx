import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { };


const PersonaScreen = ({ route, navigation }: Props) => {

    const { changeUsername, authState: { isLoggedIn } } = useContext(AuthContext)

    const params = route.params


    useEffect(() => {
        navigation.setOptions({
            title: params.last_name
        })
    }, [])


    useEffect(() => {
        if (isLoggedIn) {
            changeUsername(`${params.first_name} ${params.last_name}`)
        }
    }, [params.first_name])

    return (
        <View style={styles.globalMargin}>
            <Text style={{ fontSize: 30, fontWeight: '500' }}>{JSON.stringify(params, null, 2)}</Text>
        </View>
    )
}

export default PersonaScreen