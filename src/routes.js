import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Home from './pages/Home';
import Despesas from './pages/Despesas';

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
