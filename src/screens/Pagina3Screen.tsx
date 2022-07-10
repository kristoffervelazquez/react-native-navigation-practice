import { View, Text, Button } from 'react-native';
import React from 'react'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };

const Pagina3Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 3 Screen</Text>
            <Button
                title='Regresar'
                onPress={() => { navigation.pop() }}
            />

            <Button
                title='Ir a la pagina 1'
                onPress={() => { navigation.popToTop() }}
            />

        </View>
    )
}

export default Pagina3Screen