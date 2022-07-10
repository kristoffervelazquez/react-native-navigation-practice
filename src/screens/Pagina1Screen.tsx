import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'
import BotonPersona from '../components/BotonPersona';
import { Persona } from '../interfaces/Personas';


interface Props extends StackScreenProps<any, any> { };



const Pagina1Screen = ({ navigation }: Props) => {

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
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            <Text style={styles.title}>Pagina 1 Screen</Text>

            <Button
                title='Ir a pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen')}
            />


            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.title}>Navegar con argumentos</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {personas.map((persona) => (
                        <BotonPersona info={persona} navigation={navigation} key={persona.id} />
                    ))}
                </View>
            </View>
        </View>
    )
}

export default Pagina1Screen