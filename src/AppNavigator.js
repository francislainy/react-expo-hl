import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={({ route }) => ({ title: route.params.name })}
            />
        </Stack.Navigator>
    );
}
