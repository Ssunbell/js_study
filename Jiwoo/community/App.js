import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// FlatList -> ScrollViwe
const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View><TextInput style={styles.textinput} /></View>
      <ScrollView>
        {/* 유저정보, 유저 업적 보상 */}
        <TouchableOpacity style={styles.user_info}>
          <Image style={styles.user_profile_photo} source={require('/Users/shinjiwoo/js_study/Jiwoo/community/image/유저사진_1.jpg')} />
          <Text style={styles.user_profile_name}>user name</Text>
        </TouchableOpacity>
        {/* 게시물 사진 */}
        {/* 이미지 옆으로 넘기는거 코드 작성 생각해보기 */}
        <ScrollView
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          <Image
            style={styles.post_photo}
            source={require('/Users/shinjiwoo/js_study/Jiwoo/community/image/travel.jpeg')}
          />
          <Image
            style={styles.post_photo}
            source={require('/Users/shinjiwoo/js_study/Jiwoo/community/image/travel.jpeg')}
          />
        </ScrollView>
        {/* 좋아요, 댓글, 북마크, 공유 */}
        <View style={styles.mark}>
          <View style={styles.mark}>
            {/* 하트버튼을 누르면 색깔 변하는거 구현필요 */}
            <TouchableOpacity>
              <MaterialCommunityIcons name="cards-heart-outline" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="comment" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="bookmark" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="share-social-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
          {/* 위치 및 날짜 */}
          <View style={{ justifyContent: "space-evenly" }}><Text>경상북도 영덕군 22.08.02</Text></View>
        </View>
        {/* 태그 */}
        {/* 태그도 입력받아야함 */}
        <View style={styles.mark}>
          <TouchableOpacity style={styles.tag}><Text>#영덕양조장</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tag}><Text>#도원결의</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tag}><Text>#증류주</Text></TouchableOpacity>
        </View>
        {/* 본문, 펼치기 */}
        <View style={styles.main_text}>
          {/* 사용자가 글쓰기 + 펼치기 누르면 전체화면 */}
          <Text>경북 영덕 양조장에서 양조장 체험하고 나서 마시는 도원결의!! 집접 담궈서 먹으니까 더 맛있는듯! 케케</Text>
          <TouchableOpacity style={{ marginTop: 5 }}>
            <Text >펼치기...</Text>
          </TouchableOpacity>
        </View>


        {/* 두번째 게시물 */}
        {/* 유저정보, 유저 업적 보상 */}
        <TouchableOpacity style={styles.user_info}>
          <Image style={styles.user_profile_photo} source={require('/Users/shinjiwoo/js_study/Jiwoo/community/image/유저사진_1.jpg')} />
          <Text style={styles.user_profile_name}>user name</Text>
        </TouchableOpacity>
        {/* 게시물 사진 */}
        {/* 이미지 옆으로 넘기는거 코드 작성 생각해보기 */}
        <ScrollView
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          <Image
            style={styles.post_photo}
            source={require('/Users/shinjiwoo/js_study/Jiwoo/community/image/travel.jpeg')}
          />
          <Image
            style={styles.post_photo}
            source={require('/Users/shinjiwoo/js_study/Jiwoo/community/image/travel.jpeg')}
          />
        </ScrollView>
        {/* 좋아요, 댓글, 북마크, 공유 */}
        <View style={styles.mark}>
          <View style={styles.mark}>
            {/* 하트버튼을 누르면 색깔 변하는거 구현필요 */}
            <TouchableOpacity>
              <MaterialCommunityIcons name="cards-heart-outline" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="comment" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="bookmark" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="share-social-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "space-evenly" }}><Text>경상북도 영덕군 22.8.02</Text></View>
        </View>
        {/* 태그 */}
        <View style={styles.mark}>
          <TouchableOpacity style={styles.tag}><Text>#영덕양조장</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tag}><Text>#도원결의</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tag}><Text>#증류주</Text></TouchableOpacity>
        </View>
        {/* 본문, 펼치기 */}
        <View style={styles.main_text}>
          <Text>경북 영덕 양조장에서 양조장 체험하고 나서 마시는 도원결의!! 집접 담궈서 먹으니까 더 맛있는듯! 케케</Text>
          <TouchableOpacity style={{ marginTop: 5 }}>
            <Text >펼치기...</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      <View style={styles.underbar}><Text>하단바</Text></View>
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
  // 유저정보, 유저 업정 정보
  user_info: {
    margin: 10,
    flexDirection: 'row',
    alignItems: "center"
  },
  user_profile_photo: {
    height: 30,
    width: 30,
    borderRadius: 50
  },
  user_profile_name: {
    paddingLeft: 10
  },
  // 게시물 사진
  post_photo: {
    width: SCREEN_WIDTH,
  },
  // 좋아요, 댓글, 북마크, 공유, 일자
  mark: {
    margin: 10,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start"
  },
  // 태그 모양 -> 둥글게 만들기!
  tag: {
    backgroundColor: "#c0e8e0",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    shadowColor: "#000000", //그림자색
    shadowOpacity: 0.3,//그림자 투명도
    shadowOffset: { width: 2, height: 2 }, //그림자 위치
  },
  // 본문
  main_text: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  underbar: {
    marginTop: 35,
    marginBottom: 35,
    alignItems: "center",
    justifyContent: "center",
  }
});
