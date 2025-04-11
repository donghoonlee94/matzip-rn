import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';
import AuthStackNavigator from '../stack/AuthStackNavigator';

function RootNavigator() {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
