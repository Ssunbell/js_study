import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Fontisto } from '@expo/vector-icons'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";

const API_key = '' // 어플에 두면 보안에 취약함

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Rain: "rains",
  Drizzle: "rain",
  Thunderstrom : "lightning",
}

export default function App() {
  const [city, setCity] = useState("loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getPermission = async () => {
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) setOk(false);
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const weatherAPI = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_key}`
    );
    const weatherJson = await weatherAPI.json();
    setDays(weatherJson.daily);
  };
  useEffect(() => {
    getPermission();
  }, []);
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
        {days.length === 0 ? (
          <View style={{...styles.day, alignItems:"center"}}>
            <ActivityIndicator
              color="white"
              style={{ marginTop: 10 }}
              size="large"
            />
          </View>
        ) : (
          days.map((day, index) =>
          <View key={index} style={styles.day}>
            <View style={{ flexDirection: "row", alignItems:"center", width:'100%', justifyContent:'space-between' }}>
              <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
              <Fontisto name={icons[day.weather[0].main]} size={68} color="white" />
            </View>
            <Text style={styles.decription}>{day.weather[0].main}</Text>
            <Text style={styles.tinyText}>{day.weather[0].description}</Text>
          </View>
            ) 
        )}
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
    fontSize: 100,
  },
  decription: {
    marginTop: -30,
    fontSize: 60,
  },
  tinyText: {
    fontSize:20
  }
});

// 1. View는 container이다. div 대신에 View를 사용한다.
// 2. 모든 텍스트는 Text 컴포넌트 안에 들어가야 한다.
// 3. style은 웹과 비슷하지만 쓸 수 없는 것들이 몇몇 있음(css도 98퍼 사용 가능)
// 4. styleSheet는 object를 만드는데 사용함
// 5. styleSheet.create는 자동완성을 지원하기 때문에 사용
