import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Home from './pages/Home';
import Despesas from './pages/Despesas';

import Icon from 'react-native-vector-icons/FontAwesome';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: () => ({
          tabIcon: ({ tintColor }) => (
            <Icon name="heart" color={tintColor} size={24} />
          )
        })
      },
      Despesas: {
        screen: Despesas,
        navigationOptions: {
          tabBarLabel: '#000',
          tabIcon: ({ tintCor }) => (
            <Icon name="facebook" color="#000" size={23} />
          )
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#000',
        headerTitle: 'Agosto',
        headerBackTitle: null
      },
      mode: 'modal'
    }
  )
);
