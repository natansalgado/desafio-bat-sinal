import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        width: '100%',
        height: 200,
        objectFit: 'contain'
    },
    button: {
        textTransform: 'uppercase',
        marginTop: 20,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#333',
        padding: 10,
        width: '100%'
    }
});