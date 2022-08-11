import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const AddNewPost = () => {
  return (
    <View>
      <TouchableOpacity><AntDesign name="left" size={24} color="black" /></TouchableOpacity>
      <Text style={{ color: 'black' }}>ADD NEW POST</Text>
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

  }

})

export default AddNewPost