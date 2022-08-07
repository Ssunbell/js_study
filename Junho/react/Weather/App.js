 
import { Location, StatusBar  } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, AsyncStorageStatic } from 'react-native';

const {heigt,width:Screen_Width} = Dimensions.get('window')
const Screen_Height = Dimensions.get('window').height
console.log({Screen_Height})

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView 
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>sunny</Text>
        </View>
      </ScrollView>
      {/* <Text style={styles.text}>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  text:{
    fontSize:20,
    color:'red',
  },
  city:{
    flex:1,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center',
  },
  cityName:{
    fontSize:50,
    fontWeight:'200',
  },
  weather:{
    backgroundColor:'orange',
  },
  day:{
    width:Screen_Width,
    alignItems:'center',
  },
  temp:{
    fontSize:150,
    marginTop:30,
  },
  desc:{
    fontSize:50,
    marginTop:30
  },

});
