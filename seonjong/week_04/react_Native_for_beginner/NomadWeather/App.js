import * as Location from 'expo-location'
import React, {useEffect, useState} from "react";
import reactDom from "react-dom";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

const API_key = 'e5576b232d9e55067c99bc21e75f387d' // 어플에 두면 보안에 취약함

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
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.decription}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.decription}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.decription}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.decription}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.decription}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const { width: ScreenWidth } = Dimensions.get("window");


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: ScreenWidth,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  decription: {
    marginTop: -30,
    fontSize: 60,
  },
});

// 1. View는 container이다. div 대신에 View를 사용한다.
// 2. 모든 텍스트는 Text 컴포넌트 안에 들어가야 한다.
// 3. style은 웹과 비슷하지만 쓸 수 없는 것들이 몇몇 있음(css도 98퍼 사용 가능)
// 4. styleSheet는 object를 만드는데 사용함
// 5. styleSheet.create는 자동완성을 지원하기 때문에 사용
