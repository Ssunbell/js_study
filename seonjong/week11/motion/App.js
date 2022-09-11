import * as React from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("screen");

const data = [
  "https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200",
];

const App = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current; // 현재 내 X축 값을 저장해놓음
  const renderItem = ({ item }) => {
    return (
      <View style={styles.imagewrapper}>
        <Image source={{ uri: item }} style={styles.renderstyle} />
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar hidden />
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((image, index) => {
          const inputRange = [
            (index - 1) * width, // previous Image range
            index * width, // current Image range
            (index + 1) * width, // next Image range
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0], // 0, 1, 0을 해줌으로서 current 이미지만 나오게 해줌
          });
          return (
            <Animated.Image
              key={`image-${index}`}
              source={{ uri: image }}
              style={[StyleSheet.absoluteFillObject , {opacity}]}
              blurRadius={20}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal={true}
        pagingEnabled={true}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagewrapper: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.3,
    shadowOffset:{
      width:0,
      height:0
    } 
  },
  renderstyle: {
    width: width * 0.7,
    height: height * 0.7,
    resizeMode: "cover",
    borderRadius: 16,
  },
  backgroundimage: {},
});

export default App;
