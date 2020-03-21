import React from 'react';
import {Easing, Animated} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Dash from './pages/Dash/Dash';
import Transacoes from './pages/Transacoes';
import Contas from './pages/Contas/Contas';
import ContaForm from './pages/ContaForm/ContaForm';
import DespesaForm from './pages/DespesaForm';

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
      Dash: {
        screen: Dash,
      },
      Contas: {
        screen: Contas,
      },
      ContaForm: {
        screen: ContaForm,
      },
      Transacoes: {screen: Transacoes},
      DespesaForm: {screen: DespesaForm},
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
      transitionConfig: () => ({
        transitionSpec: {
          duration: 300,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
          const {layout, position, scene} = sceneProps;
          const {index} = scene;

          const width = layout.initWidth;
          const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [width, 0, 0],
          });

          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });

          return {opacity, transform: [{translateX: translateX}]};
        },
      }),
    },
  ),
);
