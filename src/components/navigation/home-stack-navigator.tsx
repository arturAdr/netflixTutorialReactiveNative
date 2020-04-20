import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import ShowDetailsScreen from '../screens/show-details-screen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Main" headerMode='none'>
        <Stack.Screen name="Main" component={HomeScreen} />
        <Stack.Screen name="ShowDetails" component={ShowDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStackNavigator;
