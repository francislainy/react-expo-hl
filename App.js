import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyHeader from './src/MyHeader';
import HelloTalkScreen from './src/screens/HelloTalk';
import MomentsScreen from './src/screens/Moments';
import ConnectScreen from './src/screens/Connect';
import LiveScreen from './src/screens/Live';
import MeScreen from './src/screens/Me';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <View style={styles.container}>
          <MyHeader title="My App" />
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
