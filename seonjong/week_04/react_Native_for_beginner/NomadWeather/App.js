import React from "react";
import reactDom from "react-dom";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView pagingEnabled horizontal contentContainerStyle={styles.weather}>
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

const {width: ScreenWidth} = Dimensions.get("window")

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
  weather: {
  },
  day: {
    width:ScreenWidth,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  decription: {
    marginTop:-30,
    fontSize: 60,
  },
});

// 1. View는 container이다. div 대신에 View를 사용한다.
// 2. 모든 텍스트는 Text 컴포넌트 안에 들어가야 한다.
// 3. style은 웹과 비슷하지만 쓸 수 없는 것들이 몇몇 있음(css도 98퍼 사용 가능)
// 4. styleSheet는 object를 만드는데 사용함
// 5. styleSheet.create는 자동완성을 지원하기 때문에 사용
