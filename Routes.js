import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/auth/login';
import Register from './screens/auth/register';
import Home from './screens/auth/home';
import Reset from './screens/auth/reset';


const RootStack = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    Home: Home,
    Reset: Reset,
   
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});
  


const RootContainer = createAppContainer(RootStack);

export default function Routes() {
  return (
    <RootContainer />
  )
}