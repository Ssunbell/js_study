import * as Location from 'expo-location'
import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

const API_key = '' // 어플에 두면 보안에 취약함

export default function App() {
  const [city, setCity] = useState('Loading...')
  const [days, setDays] = useState([])
  const [ok, setOk] = useState(true)
  const getWeather = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync()
    if (!granted){
      setOk(false)
    }
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy: 5})
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps:false})
    setCity(location[0].city)
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_key}`)
    const json = await response.json()
    console.log(json)
  }
  useEffect(() => {
    getWeather()
  },[])
  return (
    <View>
      <View>
        <Text style={{flex:1.2, justifyContent:'center', alignItems:'center'}}>{city}</Text>
      </View>
      <Text style={styles.temp}>27</Text>
      <Text style={styles.description}>Sunny</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  temp: {
    marginTop:100,
    fontsize:178,
  },
  description: {
    marginTop:50,
    fontsize:60,
  }
})
