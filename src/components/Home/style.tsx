import { StyleSheet } from 'react-native'
import Color from '../../contants/color'

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    button: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 50,
        padding: 12,
        marginTop: 9,
        backgroundColor: Color.orange,
        borderColor: Color.gray
    },
    buttonText: {
        color: Color.white,
        textAlign: 'center'
    },
    img: {
        width: 400, 
        height: 400
    }
});

export default Styles