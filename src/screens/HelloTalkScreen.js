import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
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


    const renderItem = ({ item }) => (
        <ChatItem avatar={item.avatar} name={item.name} message={item.message} />
    );

    return (
        <FlatList
            style={styles.container}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default HelloTalkScreen;
