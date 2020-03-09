import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {NativeModules} from 'react-native';


import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';


import Payments from './screens/payment/payment';
import Myrides from './screens/myrides/myrides';
import Settings from './screens/settings/settings';
import Notification from './screens/notification/notification';
import Invite from './screens/invite/invite';
import Insurance from './screens/insurance/insurance';
import Help from './screens/help/help';
import Powerpass from './screens/powerpass/powerpass';
import Main from  './screens/main/main';

const Header = ({name, openDrawer}) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => openDrawer()}>
      <Icon name="md-menu" size={25} style={{marginLeft: 15}} />
    </TouchableOpacity>

    <Text style={{width: 50}}></Text>
  </View>
);
const Home = ({navigation}) => (
  <>
    <Header name="Home" openDrawer={navigation.openDrawer} />
    <Main />
  </>
);
const PaymentsScreen = ({navigation}) => (
  <>
    <Header name="Payments" openDrawer={navigation.openDrawer} />
    <Payments />
  </>
);
const RidesScreen = ({navigation}) => (
  <>
    <Header name="My Rides" openDrawer={navigation.openDrawer} />
    <Myrides />
  </>
);
const InvitesScreen = ({navigation}) => (
  <>
    <Header name="Invite Friends" openDrawer={navigation.openDrawer} />
    <Invite />
  </>
);
const PowerpassScreen = ({navigation}) => (
  <>
    <Header name="Power Pass" openDrawer={navigation.openDrawer} />
    <Powerpass />
  </>
);
const NotificationScreen = ({navigation}) => (
  <>
    <Header name="Notifications" openDrawer={navigation.openDrawer} />
    <Notification />
  </>
);
const InsuranceScreen = ({navigation}) => (
  <>
    <Header name="Insurance" openDrawer={navigation.openDrawer} />
    <Insurance />
  </>
);
const SettingsScreen = ({navigation}) => (
  <>
    <Header name="Settings" openDrawer={navigation.openDrawer} />
    <Settings />
 
  </>
);
const HelpScreen = ({navigation}) => (
  <>
    <Header name="Help" openDrawer={navigation.openDrawer} />

    <Help />
  </>
);

function Item({item, navigate}) {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigate(item.name)}>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

class Sidebar extends React.Component {
  state = {
    routes: [
    
      {
        name: 'Home',
        icon: 'Iconpayment',
      },
      {
        name: 'Payments',
        icon: 'Iconpayment',
      },
      {
        name: 'Myrides',
        icon: 'ios-settings',
      },
      {
        name: 'Invite',
        icon: 'ios-home',
      },

      {
        name: 'Powerpass',
        icon: 'ios-settings',
      },
      {
        name: 'Notification',
        icon: 'ios-settings',
      },
      {
        name: 'Insurance',
        icon: 'ios-settings',
      },
      {
        name: 'Settings',
        icon: 'ios-settings',
      },
      {
        name: 'Help',
        icon: 'ios-settings',
      },

    ],
  };

  render() {
    return (
      <View style={styles.container}>
          <Image
          style={{ height: 50, width: 52, }}
          source={{ uri:'https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-15-512.png'}}/>        
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 10}}>  Rahul RJ</Text>
        <Text style={{color: '#F9D815', marginBottom: 10}}>rj7407@gmail.com</Text>
        <View style={styles.sidebarDivider}></View>
        <FlatList
          style={{width: '100%', marginLeft: 30}}
          data={this.state.routes}
          renderItem={({item}) => (
            <Item item={item} navigate={this.props.navigation.navigate} />
          )}
          keyExtractor={item => item.name}
        />
         <Text style={{color:'#F9D815',fontSize:20,paddingVertical:20}}>Captian App download Link</Text>
      </View>
      
    );
  }
}

const Drawer = createDrawerNavigator(
  {
    Home: {screen: Home},
    Payments: {screen: PaymentsScreen},
    Myrides: {screen: RidesScreen},
    Invite: {screen: InvitesScreen},
    Powerpass: {screen: PowerpassScreen},
    Notification: {screen: NotificationScreen},
    Insurance: {screen: InsuranceScreen},
    Settings: {screen: SettingsScreen},
    Help: {screen: HelpScreen},
  },
  {
    initialRouteName: 'Home',
    unmountInactiveRoutes: true,

    contentComponent: props => <Sidebar {...props} />,
  },
);

const AppNavigator = createStackNavigator(
  {
    Drawer: {screen: Drawer},
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
    unmountInactiveRoutes: true,
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
    flex: 1,
  },
  listItem: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9D815',
    paddingHorizontal: 20,
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 20,
  },
  sidebarDivider: {
    height: 2,
    width: '100%',
    backgroundColor: '#F9D815',
    marginVertical: 10,
  },
});
