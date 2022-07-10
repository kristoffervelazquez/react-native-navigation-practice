import { Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { Persona } from '../interfaces/Personas';



interface Props {
    info: Persona,
    navigation: StackNavigationProp<any, any, undefined>
}

const BotonPersona = ({ navigation, info }: Props) => {

    const { first_name, id, last_name, email, avatar } = info

    return (
        <TouchableOpacity style={{ ...styles.botonGrande, backgroundColor: (id % 2 === 0 ? '#5856D6' : '#ff681f') }} onPress={() => { navigation.navigate('PersonaScreen', { id, first_name, last_name, email }) }}>
            <Text style={styles.botonGrandeTexto}>{first_name}</Text>
        </TouchableOpacity>

    )
}

export default BotonPersona

