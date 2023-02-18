import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatScreen = ({ route }) => {
    const { name } = route.params;

    // Here, you can use the user's name to display the full conversation between yourself and the user

    return (
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ChatScreen;
