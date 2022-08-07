import { StyleSheet, SafeAreaView, Button,
  Text, View, StatusBar, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";
import alcholData from './alchol.json'

console.log(alcholData.도수[100])

AsyncStorage.clear()
AsyncStorage.setItem('User1',JSON.stringify({'name':'bdc','Age':'15'}))
AsyncStorage.setItem('User2',JSON.stringify({'name':'abc','Age':'5'}))


export default function App() {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const onSubmit = () => {
    AsyncStorage.setItem(text,JSON.stringify({'name':text,'Age':number}))
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          let key = store[i][0];
          let value = store[i][1];
          console.log(key,value)
        });
      });
    });
    console.log('insert')
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button
        onPress={onSubmit}
        title="Confirm"
        color="#841584"
      />
      <Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
