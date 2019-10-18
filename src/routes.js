import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from './pages/Home';
import Despesas from './pages/Despesas';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" color={tintColor} size={18} />
          )
        })
      },
      Despesas: {
        screen: Despesas,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="money-bill-alt" color={tintColor} size={18} />
          )
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#000',
        headerTitle: 'Agosto',
        tabBarOptions: {
          activeTintColor: '#f39c12ff',
          showLabel: true
        }
      },
      mode: 'modal'
    }
  )
);
