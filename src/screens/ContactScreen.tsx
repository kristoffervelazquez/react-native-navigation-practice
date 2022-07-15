import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';

const ContactScreen = () => {

    const { authState, signIn, logout } = useContext(AuthContext)

    const { isLoggedIn } = authState


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Contact Screen</Text>


            {
                !isLoggedIn &&
                <Button title='Login' onPress={signIn} />

            }


        </View>
    )
}

export default ContactScreen