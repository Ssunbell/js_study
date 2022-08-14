import React from 'react';
import { SafeAreaView, Text, StyleSheet,ScrollView  } from 'react-native';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { POSTS } from '../data/posts';


const HomeScreen = () => {
  return ( 
    <SafeAreaView style={styles.container } >  
        <Header />
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