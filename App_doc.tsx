import { useRef, useState, useEffect } from 'react'
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';

const STORAGE_KEY = 'key'

const HomeScreen = ({ navigation }: any) => {
  const [inputValue, setInputValue] = useState<any>()

  const onChangeText = (text: string) => {
    setInputValue(text)
  }

  let goToDetails = async (navigation: any) => {
    if (inputValue) {
      AsyncStorage.setItem(STORAGE_KEY, inputValue)
    }
    navigation.navigate('Details')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TextInput value={inputValue} onChangeText={onChangeText}></TextInput>
      <Button
        title="Go to Details"
        onPress={() => goToDetails(navigation)}
      />
    </View>
  );
}

const DetailsScreen = ({ navigation }: any) => {
  const [text, setText] = useState<string | null>()

  let getTitleFromAsyncStore = async () => {
    setText(await AsyncStorage.getItem(STORAGE_KEY))
  }
  getTitleFromAsyncStore()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{text}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const WebVScreen = () => {
  return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
}

const WebNavigater = () => {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
}

const Stack = createNativeStackNavigator();

function App() {
  return ((1) ? WebNavigater() : WebVScreen());
}

export default App;