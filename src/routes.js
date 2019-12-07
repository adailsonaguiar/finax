import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Dash from './pages/Dash/Dash';
import Despesas from './pages/Despesas';
import Contas from './pages/Contas/Contas';
import ContaForm from './pages/ContaForm/ContaForm';

import Icon from 'react-native-vector-icons/FontAwesome5';
import NovaDespesa from './pages/NovaDespesa/NovaDespesa';

/* const BottomTab = createBottomTabNavigator(
  {
    Dash: {
      screen: Dash,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={22} />
        ),
      }),
    },
    Despesas: {
      screen: Despesas,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="money-bill" color={tintColor} size={22} />
        ),
      },
    },
    Contas: {
      screen: Contas,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="wallet" color={tintColor} size={22} />
        ),
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#000',
      headerTitle: 'Agosto',
      tabBarOptions: {
        activeTintColor: '#f39c12ff',
        showLabel: false,
      },
    },
    mode: 'modal',
  },
);
 */
/* export default createAppContainer(
  createDrawerNavigator({
    //  bottomTabNav
    BottomTab: {
      screen: BottomTab,
    },
    NovaDespesa: {
      screen: NovaDespesa,
    },
    Header: {
      screen: Header,
    },
  }),
); */

export default createAppContainer(
  createStackNavigator(
    {
      ContaForm: {
        screen: ContaForm,
      },
      Contas: {
        screen: Contas,
      },
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  ),
);
