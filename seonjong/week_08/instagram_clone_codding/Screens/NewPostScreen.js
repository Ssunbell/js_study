import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import AddNewPost from '../components/NewPost/AddNewPost'

const NewPostScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor: 'black', flex:1}}>
            <AddNewPost navigation={navigation}/>
        </SafeAreaView>
    )
}

export default NewPostScreen