import React from 'react';
import {View, StyleSheet} from 'react-native';
import Screen1 from './components/Screen1';

import GlobalState from './components/GlobalState';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen2 from './components/Screen2';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <GlobalState>
        <NavigationContainer >
       
            <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen  name="Screen1" component={Screen1} />
              <Stack.Screen name="Screen2" component={Screen2} />
            </Stack.Navigator>
       
        </NavigationContainer>
      </GlobalState>
    );
  }
}

