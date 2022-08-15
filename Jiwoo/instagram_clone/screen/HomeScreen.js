import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post'
import { POSTS } from '../data/post';
import { useEffect, useState } from 'react';
import firebase from '../firebase'

const db = firebase.firestore()

const HomeScreen = ({navigation}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collectionGroup('posts')
    .onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(post => (
        {id: post.id, ...post.data()})))
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex: 1,
  }
})

export default HomeScreen
