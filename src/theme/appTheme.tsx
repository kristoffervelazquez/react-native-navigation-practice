import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 30,
        color: 'black',
        marginBottom: 10
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',

    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
        alignItems: 'center'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    menuItem: {
        marginVertical: 10
    },
    menuItemText: {
        fontSize: 20,
        color: 'black'
    }
})