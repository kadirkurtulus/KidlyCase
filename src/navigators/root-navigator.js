import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './main-navigator';
import { navigationRef } from '../utils';


export const RootNavigator = () => {

  return (
    <NavigationContainer
      ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  )
}