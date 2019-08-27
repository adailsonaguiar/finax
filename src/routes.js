import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import React from 'react';

import Home from './home';
import Despesas from './despesas';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home,
      Despesas,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#000',
        headerTitle: 'Agosto',
        headerBackTitle: null,
      },
      mode: 'modal',
    },
  ),
);
