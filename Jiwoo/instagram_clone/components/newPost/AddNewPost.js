import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import FormikPostUploader from './FormiKPostUploader';

const AddNewPost = ({navigation}) => (
  <View style={styles.container}>
    <Header navigation={navigation}/>
    <FormikPostUploader navigation={navigation}/>
  </View>
)

const Header = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
      <Text style={styles.headerText}>NEW POST</Text>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 18,
    marginRight: 25,
  }
})

export default AddNewPost
