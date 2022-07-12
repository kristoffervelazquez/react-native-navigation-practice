import { View, Text, Button } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'



interface Props extends StackScreenProps<any, any> { };



const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            <Text style={styles.title}>Pagina 1 Screen</Text>

            <Button
                title='Ir a pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
            <Button
                title='Ir a pagina Amigos'
                onPress={() => navigation.navigate('AmigosScreen')} />

        </View>
    )
}

export default Pagina1Screen