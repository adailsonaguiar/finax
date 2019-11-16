import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import Home from './pages/Home';
import Despesas from './pages/Despesas';
import Carteiras from './pages/Carteiras';

import Icon from 'react-native-vector-icons/FontAwesome5';
import NovaDespesa from './pages/NovaDespesa/NovaDespesa';

const DespesasTab = createSwitchNavigator({
  Despesas: {
    screen: Despesas
  },
  NovaDespesa: {
    screen: NovaDespesa
  }
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='home' color={tintColor} size={22} />
          )
        })
      },
      Despesas: {
        screen: DespesasTab,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name='money-bill' color={tintColor} size={22} />
          )
        }
      },
      Carteiras: {
        screen: Carteiras,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name='wallet' color={tintColor} size={22} />
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
  ),
  createStackNavigator({
    NovaDespesa: {
      screen: NovaDespesa
    }
  })
);
