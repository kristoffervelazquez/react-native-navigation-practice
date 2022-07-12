import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../theme/appTheme';
import { Persona } from '../interfaces/Personas';
import BotonPersona from '../components/BotonPersona';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };

const AmigosScreen = ({ navigation }: Props) => {

    const [personas, setPersonas] = useState<Persona[]>([]);


    const url = 'https://reqres.in/api/users'

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPersonas(data.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (

        <View style={{ flex: 1, justifyContent: 'flex-start', ...styles.globalMargin }}>
            <Text style={styles.title}>Navegar con argumentos</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {personas.map((persona: Persona) => (
                    <BotonPersona info={persona} navigation={navigation} key={persona.id} />
                ))}
            </View>
        </View>

    )
}

export default AmigosScreen

