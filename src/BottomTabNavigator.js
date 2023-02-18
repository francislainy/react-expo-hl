import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HelloTalkScreen from './screens/HelloTalkScreen';
import MomentsScreen from './screens/MomentsScreen';
import ConnectScreen from './screens/ConnectScreen';
import LiveScreen from './screens/LiveScreen';
import MeScreen from './screens/MeScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HelloTalk') {
                        iconName = focused
                            ? 'ios-chatbubbles'
                            : 'ios-chatbubbles-outline';
                    } else if (route.name === 'Moments') {
                        iconName = focused ? 'ios-heart' : 'ios-heart-outline';
                    } else if (route.name === 'Connect') {
                        iconName = focused ? 'ios-people' : 'ios-people-outline';
                    } else if (route.name === 'Live') {
                        iconName = focused ? 'ios-videocam' : 'ios-videocam-outline';
                    } else if (route.name === 'Me') {
                        iconName = focused ? 'ios-person' : 'ios-person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="HelloTalk" component={HelloTalkScreen} />
            <Tab.Screen name="Moments" component={MomentsScreen} />
            <Tab.Screen name="Connect" component={ConnectScreen} />
            <Tab.Screen name="Live" component={LiveScreen} />
            <Tab.Screen name="Me" component={MeScreen} />
        </Tab.Navigator>
    );
}
