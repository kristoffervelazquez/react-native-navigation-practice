import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { };


const PersonaScreen = ({ route, navigation }: Props) => {

    const params = route.params

    useEffect(() => {
        navigation.setOptions({
            title: params.last_name
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={{fontSize: 30, fontWeight: '500'}}>{JSON.stringify(params, null, 2)}</Text>
        </View>
    )
}

export default PersonaScreen