import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet,ScrollView  } from 'react-native';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { POSTS } from '../data/posts';
import firebase from '../firebase'

const db = firebase.firestore()

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    db.collectionGroup('posts').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()))
    })
  }, [])
  
  return ( 
    <SafeAreaView style={styles.container } >  
        <Header navigation={navigation}/>
        <Stories />
        <ScrollView>
           {POSTS.map((post, index) => (
             <Post post={post} key={index}/>
           ))}
        </ScrollView>
    </SafeAreaView> // SafeAreaView는 휴대폰의 상태바랑 겹치지 않게 영역을 지정해서 넣어줌
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    }
})

export default HomeScreen;