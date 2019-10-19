import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Home from './pages/Home';
import Despesas from './pages/Despesas';
import Receitas from './pages/Receitas';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" color={tintColor} size={22} />
          )
        })
      },
      Despesas: {
        screen: Despesas,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="money-bill" color={tintColor} size={22} />
          )
        }
      },
      Receitas: {
        screen: Receitas,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="wallet" color={tintColor} size={22} />
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
          showLabel: false
        }
      },
      mode: 'modal'
    }
  )
);
