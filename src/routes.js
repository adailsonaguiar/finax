import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Home from './pages/home';
import Despesas from './pages/despesas';

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
