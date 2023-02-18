import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyHeader from './src/MyHeader';
import BottomTabNavigator from "./src/BottomTabNavigator";
import {createStackNavigator} from "@react-navigation/stack";
import ChatScreen from './src/screens/ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <View style={styles.container}>
          <MyHeader title="My App" />
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={BottomTabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ChatScreen"
                    component={ChatScreen}
                    options={{ title: 'Chat Screen' }}
                />
            </Stack.Navigator>
          <BottomTabNavigator />
        </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
