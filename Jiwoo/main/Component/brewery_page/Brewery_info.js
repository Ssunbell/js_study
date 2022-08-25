import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");


const Brewery_info = () => {
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <Image
                    style={styles.brewery_photo}
                    source={{ uri: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fthumb2.gettyimageskorea.com%2Fimage_preview%2F700%2F202003%2FEYM%2F1211292280.jpg&type=a340' }} />
            </View>
            <View style={{ justifyContent: 'center', marginLeft: 20, margin: 20 }}>
                {/* DB에서 정보 받을 것 */}
                <Text style={{ fontSize: 27, fontWeight: '600', marginBottom: 20 }}>금품양조장</Text>
                <Text style={{ fontSize: 15, marginBottom: 10 }}>주종 : 막걸리</Text>
                <Text style={{ fontSize: 15, marginBottom: 10 }}>평일 : 오전 10시 ~ 오후 6시</Text>
                <Text style={{ fontSize: 15, marginBottom: 10 }}>주말 : 오전 10시 ~ 오후 6시</Text>
                <Text style={{ fontSize: 15, marginBottom: 20 }}>위치</Text>
            </View>
            <Text style={{ fontSize: 25,fontWeight: '600', marginLeft: 20}}>소개</Text>
            <Text style={{ fontSize: 15, margin: 20, }}>
                강화도 온수리에 위치한 100년 양조장
                1931년 이전부터 지금까지 한자리에서 막걸리를 만들고 있습니다.
                3대째 가업을 잇고 있는 금풍양조장은 강화도 최초의 지역특산주 면허 획득하고 2021년 새롭게 리브랜딩중입니다.

                -*-*-*-*-*-*-*-*-*-*-*-*-*-
                2021년 신제품 금풍양조 6.9
                1969년부터 3대째 양조장을 운영 - 알콜도수 6.9%
                강화도 무농약쌀과 온수리 지하수로 만든 classic한 100년 양조장의 classy한 막걸리
                100년 양조장의 술맛을 한번 느껴보세요~D

                제품정보
                * 알콜 : 6.9%
                * 용량 : 750ml
                * 원료 : 강화도 무농약쌀 / 온수리 지하수 / 국 / 효모(밀함유)
                * 맛 : 입안가득 진한 과일향이 묻어나고 탄산감없는 부드럽고 깔끔한 막걸리

                - 금풍양조 三無 원칙
                一無 : 무농약쌀 (강화도 친환경 쌀)
                二無 : 무감미료 (클래식한 100년 양조장의 클래시한 막걸리)
                三無 : 제로웨이스트 (쌀포대를 패키지로 재탄생, 업사이클을 파우치)내용 더보기
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    brewery_photo: {
        height: SCREEN_HEIGHT / 3,
        width: SCREEN_WIDTH,
    },
})

export default Brewery_info