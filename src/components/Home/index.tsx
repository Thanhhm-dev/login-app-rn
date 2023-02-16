import { Text, View, Image, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import Style from './style'
import CustomConstant from '../../contants/key'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // <-- new code


const Tab = createBottomTabNavigator();

const logout = (navigation: any) => {
    AsyncStorage.removeItem(CustomConstant.IMG_KEY).then(() => {
        navigation.navigate('Login')
    })
}
console.log('reload')
const IndexScreen = () => {
    const [img, setImg] = useState<{ uri: string }>({uri: 'https://reactjs.org/logo-og.png'})

    useEffect(() => {
        console.log('innnnnn', img)
        AsyncStorage.getItem(CustomConstant.IMG_KEY).then(value => {
            console.log('key ', value)
            if (value) {
                let tmp = {uri: value}
                console.log('phai update: ', tmp)
                setImg(tmp)
            }
        })
    }, []);

    useEffect(() => {
        console.log('updated ', img)
    }, [img]);

    return (
        <View style={Style.container}>
            <Image source={img} style={Style.img} />
        </View>
    );
}

const AnotherScreen = ({navigation}: any) => {
    return (
        <View style={Style.container}>
            <Text>This screen is not open yet!</Text>
            <TouchableOpacity style={Style.button} onPress={() => logout(navigation)}>
                <Text style={Style.buttonText} >Logut</Text>
            </TouchableOpacity>
        </View>
    );
}

const Tabs = ({navigation}: any) => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Index"
                component={IndexScreen}
                options={{
                    tabBarLabel: 'Index',
                }}
            />
            <Tab.Screen
                name="Another"
                component={AnotherScreen}
                options={{
                    tabBarLabel: 'Another',
                }}
            />
        </Tab.Navigator>
    );
}

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <Tabs navigation={navigation} />
    );
}

export default HomeScreen