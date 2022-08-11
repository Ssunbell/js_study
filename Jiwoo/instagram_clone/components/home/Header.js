import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5, Feather, Octicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* 인스타 로고 */}
      <Text
        style={{
          fontSize: 25,
          fontWeight: '800',
          marginBottom: 15,
          marginTop: 15
        }}>
        커뮤니티
      </Text>

      {/* 게시물 추가, 좋아요, 메시지 아이콘 */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <View style={{ marginRight: 10 }}>
          <Feather name="plus-circle" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Octicons name="bell-fill" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain'
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: 'absolute',
    left: 10,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  unreadBadgeText: {
    color: 'white',
    fontWeight: '600',
  }

})

export default Header
