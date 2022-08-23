import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Header from '../Component/brewery_page/Header';
import Brewery_info from '../Component/brewery_page/Brewery_info';

const BreweryScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <View style={styles.container}>
                <StatusBar style="auto" />
                <ScrollView><Brewery_info /></ScrollView>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default BreweryScreen;