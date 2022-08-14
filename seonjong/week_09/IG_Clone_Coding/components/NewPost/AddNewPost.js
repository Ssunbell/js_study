import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = () => (
    <View style={styles.container}>
        <Header />
        <FormikPostUploader />
    </View>
)

const Header = () => (
    <View style={styles.headerContainers}>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png",
          }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>New Post</Text>
      {/* 밑에 빈 텍스트만 넣어줘도 가운데 정렬 가능 */}
      <Text></Text>
    </View>
)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  headerContainers: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 25,
  },
});

export default AddNewPost;
