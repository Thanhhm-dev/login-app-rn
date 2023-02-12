import { StyleSheet, Dimensions } from 'react-native'
import Color from '../../contants/color'

const withScreen = Dimensions.get('window').width

const AppStyles = StyleSheet.create({
    listImages: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }, 
    box: {
        position: 'relative'
    },
    image: {
        width: withScreen / 3 - 10,
        height: withScreen / 3 - 10,
        flexDirection: 'row',
        backgroundColor: '#f0eeed'
    },
    text: {
        color: Color.black,
        fontSize: 36,
        position: 'absolute',
        bottom: '30%',
        left: '40%'
    }
});

export default AppStyles