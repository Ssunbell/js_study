import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const API_KEY = "1ec81afba111500bb04ef771ceb34db7";

const icons = {
  Clear: "day-sunny",
  Clouds: "cloudy",
  Rain: "rain",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Drizzle: "day-rain",
  Thunderstorm: "lightning",
};

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const respons = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await respons.json();
    setDays(json.daily);
  };

  useEffect(() => {
    ask();
  });
  const today = new Date();
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerstyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={{ ...styles.day, alignItems: "center" }}>
            <ActivityIndicator
              color="black"
              style={{ marginTop: 10 }}
              size="large"
            />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <View style={styles.horizontalLineTop}></View>
              <View>
                <Text style={styles.date}>{day.date}</Text>
                <Text style={styles.temp}>
                  {parseFloat(day.temp.day).toFixed(1)}°
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  width: "100%",
                }}
              >
                <Text style={styles.description}>{day.weather[0].main}</Text>
                <Fontisto
                  name={icons[day.weather[0].main]}
                  size={50}
                  color="black"
                  style={{ marginBottom: 20 }}
                />
              </View>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>

              <View style={styles.horizontalLineBottom}></View>
              <Text>{day.humidity}% Humidity</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afeeee",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  temp: {
    marginTop: 50,
    fontSize: 120,
    fontWeight: "bold",
  },
  description: {
    marginTop: -20,
    fontSize: 55,
    fontWeight: "bold",
  },
  tinyText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontalLineTop: {
    width: "100%",
    height: 4,
    backgroundColor: "black",
    marginBottom: -20,
  },
  horizontalLineBottom: {
    width: "100%",
    height: 4,
    backgroundColor: "black",
    marginTop: 100,
  },
});
