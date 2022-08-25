import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { AntDesign, Octicons } from '@expo/vector-icons';

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{
                    fontSize: 25,
                    fontWeight: '800',

                    marginBottom: 15,
                    marginTop: 15
                }}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>

            {/* 게시물 추가, 좋아요, 메시지 아이콘 */}
            <View style={styles.iconsContainer}>
                {/* 임시로 누르면 signup으로 넘어가보는거 해보기 */}
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
        marginHorizontal: 20,
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
    },

})

export default Header