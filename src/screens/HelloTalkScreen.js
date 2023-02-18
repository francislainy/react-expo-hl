import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import ChatScreen from '../screens/ChatScreen';

import ChatItem from '../components/ChatItem';

const DATA = [
    {
        id: '1',
        avatar: 'https://picsum.photos/id/237/200/300',
        name: 'John Doe',
        message: 'Hey there, how are you?',
    },
    {
        id: '2',
        avatar: 'https://picsum.photos/id/238/200/300',
        name: 'Jane Smith',
        message: 'What are you up to?',
    },
    {
        id: '3',
        avatar: 'https://picsum.photos/id/239/200/300',
        name: 'Bob Johnson',
        message: 'Did you watch the game last night?',
    },
];

const HelloTalkScreen = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(DATA);

    const searchFilterFunction = (text) => {
        const newData = DATA.filter((item) => {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.includes(textData);
        });
        setSearch(text);
        setFilteredData(newData);
    };

    const renderItem = ({ item }) => {
        const navigation = useNavigation();
        const onPress = () => {
            navigation.navigate('ChatScreen', { name: item.name });
        };
        return (
            <ChatItem
                avatar={item.avatar}
                name={item.name}
                message={item.message}
                onPress={onPress}
                navigation={navigation} // pass navigation as a prop
            />
        );
    };

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Search for users..."
                value={search}
                onChangeText={searchFilterFunction}
                containerStyle={{ backgroundColor: '#fff' }}
                inputContainerStyle={{ backgroundColor: '#f2f2f2' }}
                platform="android"
            />
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

HelloTalkScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default HelloTalkScreen;
