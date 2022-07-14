import SearchBar from 'react-native-platform-searchbar';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ActivityIndicator } from 'react-native';
import {Colors} from '../constants/Colors'
import { Icon } from 'react-native-elements';
import style from '../styles/style';


const SearchBarComponent = ({navigation}) => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);

    function handleSearch(){
       // setLoading(true);
        navigation.navigate('HomeSearch', {searchkey: value});
    }
    return(
        <View style={style.header_wrapper}>
            <SearchBar
                value={value}
                onChangeText={setValue}
                placeholder="Search Transaction, etc..."
                theme="light"
                // platform="ios"
                style={style.searchbar}
                inputStyle={style.searchbar_input}
                leftIcon={
                    <Icon
                        name='search'
                        type='feather'
                        color='#6F7378'
                        onPress={() => handleSearch()}
                        style={style.inputIcon}
                    />
                }
            >
                {loading ? (
                    <ActivityIndicator style={{ marginRight: 10 }} />
                ) : undefined}
            </SearchBar>
        </View>
    )
};


export default SearchBarComponent