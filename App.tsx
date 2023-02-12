import { ScrollView } from 'react-native'
import AppStyles from './App.components.style'
import ListImage from './src/components/ListImage'

export default function App() {
  return (
    <ScrollView style={AppStyles.container}><ListImage /></ScrollView>
  )
}
