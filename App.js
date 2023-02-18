import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyHeader from './src/MyHeader';
import BottomTabNavigator from "./src/BottomTabNavigator";

export default function App() {
  return (
      <NavigationContainer>
        <View style={styles.container}>
          <MyHeader title="My App" />
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
