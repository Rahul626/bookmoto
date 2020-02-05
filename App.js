import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Image, TouchableOpacity
} from 'react-native';
import { useScreens } from 'react-native-screens';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

// import Main from './screens/Main/main'
import Payments from './screens/payment/payment';
import Myrides from './screens/myrides/myrides';
import Settings from './screens/settings/settings';
import Notification from './screens/Notification/notification'

import Icon from 'react-native-vector-icons/Ionicons';
import Iconpayment from 'react-native-vector-icons/MaterialIcons';
import Returnride from 'react-native-vector-icons/Entypo';
import Mdsettings from 'react-native-vector-icons/Ionicons';

class NavigationDrawerStructure extends Component {
  
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };

  
 

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Icon name="md-menu" size={20} style={{ marginRight: 5, paddingRight:5 }} />
        </TouchableOpacity>
      </View>
    );
  }
}


const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Payments will be indexed here
  First: {
    screen: Payments,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here


  Myrides: {
    screen: Myrides,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Notification_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});



const DrawerContent = createDrawerNavigator({
  //Drawer Optons and indexing
  Payments: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Payments',
      drawerIcon:()=>
      (  <Iconpayment name="payment" size={20}  />)
    },
  },
  Myrides: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Myrides',
      drawerIcon:()=>
      (  <Returnride name="back-in-time" size={20}  />)
    },
  },
  Settings: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ()=>
      ( <Mdsettings name="md-settings" size={20} />)
      
    },
  },
  Notification: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ()=>
      ( <Mdsettings name="md-settings" size={20} />)
      
    },
  }
});


export default createAppContainer(DrawerContent);