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

import Main from './screens/Main/main';



import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { DrawerActions } from '@react-navigation/native';

// import Main from './screens/Main/main'
import Payments from './screens/payment/payment';
import Myrides from './screens/myrides/myrides';
import Settings from './screens/settings/settings';
import Notification from './screens/Notification/notification';
import Invite from './screens/invite/invite';
import Insurance from './screens/Insurance/insurance';
import Help from './screens/Insurance/insurance';
import Powerpass from './screens/Power Pass/powerpass';

import Icon from 'react-native-vector-icons/Ionicons';
import Iconpayment from 'react-native-vector-icons/MaterialIcons';
import Returnride from 'react-native-vector-icons/Entypo';
import Mdsettings from 'react-native-vector-icons/Ionicons';
import Notify from 'react-native-vector-icons/Ionicons';
import Gift from 'react-native-vector-icons/Ionicons';
import HelpIcon from 'react-native-vector-icons/MaterialIcons';
import Insuicon from 'react-native-vector-icons/MaterialIcons';
import Iconpass from 'react-native-vector-icons/Entypo';


class NavigationDrawerStructure extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSideMenuOpen: false
    };
  } 
  
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
          <Icon name="md-menu" size={25} style={{ marginLeft: 15}} />
        </TouchableOpacity>
      </View>
    );
  }
}



const Payments_StackNavigator = createStackNavigator({
  //All the screen from the Payments will be indexed here
  First: {
    screen: Payments,
    navigationOptions: ({ navigation }) => ({
      title: 'Payments Screen ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Myrides_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here


  Myrides: {
    screen: Myrides,
    navigationOptions: ({ navigation }) => ({
      title: 'Myrides Screen ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Settings_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings ',
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
    screen: Notification,
    navigationOptions: ({ navigation }) => ({
      title: 'Your Notifications ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Invite_StackNavigator = createStackNavigator({
 
  Invite: {
    screen: Invite,
    navigationOptions: ({ navigation }) => ({
      title: 'Invite friends  ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Powerpass_StackNavigator = createStackNavigator({

  Powerpass: {
    screen: Powerpass,
    navigationOptions: ({ navigation }) => ({
      title: 'Powerpass  ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Insurance_StackNavigator = createStackNavigator({
  
  Insurance: {
    screen: Insurance,
    navigationOptions: ({ navigation }) => ({
      title: 'Insurance  ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Help_StackNavigator = createStackNavigator({

  Help: {
    screen: Help,
    navigationOptions: ({ navigation }) => ({
      title: 'Help Screen ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});


const DrawerContent = createDrawerNavigator({
  // Drawer Optons and indexing
  // Main: {
  //   //Title
  //   screen: Main,
  //   navigationOptions: {
  //     drawerLabel: 'Main',
  //     drawerIcon:()=>
  //     (  <Main  />)
  //   },
  // },


  Myrides: {
    //Title
    screen: Myrides_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Myrides',
      drawerIcon:()=>
      (  <Returnride name="back-in-time" size={20}  />)
    },
  },
  Payments: {
    //Title
    screen: Payments_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Payments',
      drawerIcon:()=>
      (  <Iconpayment name="payment" size={20}  />)
    },
  },
  Settings: {
    //Title
    screen: Settings_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ()=>
      ( <Mdsettings name="md-settings" size={20} />)
      
    },
  },
  Notification: {
    //Title
    screen: Notification_StackNavigator,
    navigationOptions: {
      drawerLabel:'Notifications',
      drawerIcon: ()=>
      ( <Notify name="ios-notifications-outline" size={20} />)
      
    },
  },
  Invite: {
    //Title
    screen: Invite_StackNavigator,
    navigationOptions: {
      drawerLabel:'Invite Friends',
      drawerIcon: ()=>
      ( <Gift name="ios-gift" size={20} />)
      
    },
  },
  Powerpass: {
    //Title
    screen: Powerpass_StackNavigator,
    navigationOptions: {
      drawerLabel:' Power Pass',
      drawerIcon: ()=>
      ( <Iconpass name="wallet" size={20} />)
      
    },
  },
  Insurance: {
    //Title
    screen:Insurance_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Insurance',
      drawerIcon: ()=>
      ( <Insuicon name="security" size={20} />)
      
    },
  },
  Help: {
    //Title
    screen: Help_StackNavigator,
    navigationOptions: {
      drawerLabel:' Help',
      drawerIcon: ()=>
      ( <HelpIcon name="help" size={20} />)
      
    },
  },
 
});


export default createAppContainer(DrawerContent);