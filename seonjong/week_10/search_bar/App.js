import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

export default function App() {
  const [filterdData, setfilterdData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    fetchPost();
    return () => {};
  }, []);
  const fetchPost = () => {
    const apiURL = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setfilterdData(responseJson);
        setmasterData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle}>
        {item.id}
        {". "}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8" }}
      />
    );
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase;
        const textData = text.toUpperCase()
        console.log(itemData.indexOf(textData) > -1)
        return itemData.indexOf(textData) > -1
      });
      setfilterdData(newData)
      setsearch(text)
    } else{
      setfilterdData(masterData)
      setsearch(text)
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          value={search}
          placeholder="search Here"
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}
        />
        <FlatList
          data={filterdData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  itemStyle: {
    padding: 15,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "white",
  },
});
