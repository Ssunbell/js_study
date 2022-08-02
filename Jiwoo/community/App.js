import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <TextInput style={styles.textinput} />
      </View>
      <View>
        <Text>user name</Text>
        {/* <Image style={styles.community_photo}
          source={require('/Users/shinjiwoo/js_study/Jiwoo/community/image/커뮤니티사진_1.jpg')} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput: {
    marginLeft: 15,
    marginRight: 80,
    marginTop: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  community_photo: {
    
  }
});
