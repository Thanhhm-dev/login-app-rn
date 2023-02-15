import { View, Image, Text } from 'react-native'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import Style from './style'

const ListImage = () => {
  const [imgList, setImgList] = useState<{ uri: string }[]>([])
  const [count, setCount] = useState(10)
  const maxItem = 12;
  let myInterval = useRef<any>(null)
  let myInterval1 = useRef<any>(null)
  const imgUrl = 'https://dog.ceo/api/breeds/image/random'

  const getImage = async () => {
    let response = await axios.get(imgUrl)
    let tmpImg: { uri: string } = {
      uri: response.data.message
    }
    return tmpImg
  }
  
  useEffect(() => {
    myInterval.current = setInterval(async () => {
      Promise.all([getImage(), getImage(), getImage()]).then((tmpImg) => {
        setImgList(imgList => [...imgList, ...tmpImg]);
      });
    }, 10000);

    myInterval1.current = setInterval(() => {
      setCount(count => (count > 0) ? count - 1 : 0)
    }, 1000);
  }, []);

  useEffect(() => {
    setCount(10)
    if (imgList.length >= maxItem) {
      clearInterval(myInterval.current);
      clearInterval(myInterval1.current);
      myInterval.current = null
    }
  }, [imgList]);

  let aliasImage = [];
  for (let i = 0; i < maxItem; i++) {
    aliasImage.push(
      <View style={ Style.box } key={i} >
        <Image style={Style.image} source={imgList[i]} />
        <Text style={Style.text}>{ ((typeof imgList[0] == 'undefined' && i == 0) || (typeof imgList[i] == 'undefined' && imgList[i - 1])) ? count : '' }</Text>
      </View>)
  }

  return (
    <View>
      <View style={Style.listImages}>{aliasImage.slice(0, 3)}</View>
      <View style={Style.listImages}>{aliasImage.slice(3, 6)}</View>
      <View style={Style.listImages}>{aliasImage.slice(6, 9)}</View>
      <View style={Style.listImages}>{aliasImage.slice(9)}</View>
    </View>
  )
}

export default ListImage