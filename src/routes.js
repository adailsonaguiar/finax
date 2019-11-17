import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from 'react-navigation';

import Home from './pages/Home';
import Despesas from './pages/Despesas';
import Carteiras from './pages/Carteiras';
import Header from './components/Header';

import Icon from 'react-native-vector-icons/FontAwesome5';
import NovaDespesa from './pages/NovaDespesa/NovaDespesa';

const BottomTab = createBottomTabNavigator(
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
      screen: Despesas,
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
);

export default createAppContainer(
  createDrawerNavigator({
    //  bottomTabNav
    BottomTab: {
      screen: BottomTab
    },
    NovaDespesa: {
      screen: NovaDespesa
    },
    Header: {
      screen: Header
    }
  })
);
