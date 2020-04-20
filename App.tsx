import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from './src/constants/styles';
import HomeStackNavigator from './src/components/navigation/home-stack-navigator';

const AppContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.BLACK_RUSSIAN};
`;

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <AppContainer>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
