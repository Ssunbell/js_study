import React from 'react';
import { Text, StyleSheet, View, Image  } from 'react-native';
import LoginForm from '../components/loginscreen/LoginForm'

const INSTAGRAM_LOGO = 'https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-1024.png'

const LoginSreen = () => {
  return ( 
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{uri:INSTAGRAM_LOGO, height:100, width:100}} />
        </View>
        <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop:50,
        paddingHorizontal:12,
    },
    logoContainer:{
        alignItems: 'center',
        marginTop: 60
    }
})

export default LoginSreen;