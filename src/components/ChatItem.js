import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ChatItem = ({ avatar, name, message }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.message}>{message}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    message: {
        color: '#888',
    },
});

export default ChatItem;
