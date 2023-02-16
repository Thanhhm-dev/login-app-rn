import { StyleSheet } from 'react-native'
import Color from '../../contants/color'

const Styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white,
    },
    login: {
        flex: 4,
        alignItems: 'center'
    },
    header: {
        flex: 1
    },
    form: {
        width: '80%',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    textInput: {
        width: '100%',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#e0f4fd',
        padding: 12,
        margin: 9,
        backgroundColor: '#e0f4fd',
        paddingHorizontal: 20
    },
    button: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 50,
        padding: 12,
        marginTop: 9,
        backgroundColor: '#fc64a4',
        borderColor: Color.gray
    },
    buttonText: {
        color: Color.white,
        textAlign: 'center'
    },
    footer: {
        flex: 1
    },
    footerImg: {
        resizeMode: 'contain',
        height: 200
    }
});

export default Styles