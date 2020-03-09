
import React, { Component } from 'react';
import { StyleSheet, View,Animated,Alert, Text,ScrollView,SafeAreaView ,Linking, TouchableOpacity} from 'react-native';
import { Container, Content, Button, ListItem, Left,Icon, Separator, Body } from 'native-base';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';




import Accounticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Favorite from 'react-native-vector-icons/MaterialIcons';

import Pref from 'react-native-vector-icons/Entypo';
import Lanicon from 'react-native-vector-icons/Entypo';
import Shareicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Contactsicon from 'react-native-vector-icons/AntDesign';
import Logouticon from 'react-native-vector-icons/MaterialCommunityIcons';
import HelpIcon from 'react-native-vector-icons/MaterialIcons';
import Betaicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Mailicon from 'react-native-vector-icons/AntDesign';
import Info from 'react-native-vector-icons/Entypo';

import Profile from './profile';
import Preference from './preference';
import Help from '../help/help';
import About from '../settings/aboutme';

const Header_Maximum_Height = 150;

const Header_Minimum_Height = 30;



export  class Settings extends Component {
  constructor() {
    super();

    this.AnimatedHeaderValue = new Animated.Value(0);

  }

  _twoOptionAlertHandler=()=>{
    //function to make two option alert
    Alert.alert(
      //title
      'Hello Dear!',
      //body
      'You are  going out from app. Do you want to Sign out ?',
      [
        {text: 'Yes', onPress: () => console.log('Yes Pressed')},
        {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  }

  render() {
    
    {

      const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate(
        {
          inputRange: [0, (Header_Maximum_Height - Header_Minimum_Height)],

          outputRange: ['#F9D815', '#F9D815'],

          extrapolate: 'clamp'
        });

      const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate(
        {
          inputRange: [0, (Header_Maximum_Height - Header_Minimum_Height)],

          outputRange: [Header_Maximum_Height, Header_Minimum_Height],

          extrapolate: 'clamp'
        });
    return (

      <View style={styles.MainContainer}>
      <ScrollView

        scrollEventThrottle={16}

        contentContainerStyle={{ paddingTop: Header_Maximum_Height }}

        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue } } }]
        )}>
      <TouchableOpacity>
      <Container>
        <Content>
        <Separator bordered>
            <Text>General</Text>
          </Separator>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#01a3a4" }}>
                <Accounticon active name="account" />
              </Button>
            </Left>
            <Body>
              <Text onPress={() => this.props.navigation.push('Profile')}>Profile</Text>
         
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#ff9f43" }}>
                <Favorite active name="favorite-border" />
              </Button>
            </Left>
            <Body>
           
              <Text onPress={() => {
              alert('After your first ride only, you can add your Favorites place' );
            }} >Favorites</Text>
            </Body>
          
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#54a0ff" }}>
                <Pref active name="sound-mix" />
              </Button>
            </Left>
            <Body>
              <Text onPress={() => this.props.navigation.push('preference')}>Preference</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#8395a7" }}>
                <Lanicon active name="language" />
              </Button>
            </Left>
            <Body>
              <Text>App language</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#00E5FF" }}>
                <Shareicon active name="share" />
              </Button>
            </Left>
            <Body>
              <Text>App short cuts</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Contactsicon active name="contacts" />
              </Button>
            </Left>
            <Body>
              <Text>Emergency Contacts</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#795548" }}>
                <Logouticon  active name="logout-variant" />
              </Button>
            </Left>
            <Body>
              <Text onPress={this._twoOptionAlertHandler}>Logout</Text>
            </Body>
           
          </ListItem>
          <Separator bordered>
            <Text>Others</Text>
          </Separator>
          
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FFEA00" }}>
                <Info active name="info" />
              </Button>
            </Left>
            <Body>
              <Text  onPress={() => this.props.navigation.push('about')}>About</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Mailicon active name="mail" />
              </Button>
            </Left>
            <Body>
              <Text  onPress={() => {
            Linking.openURL('https://www.linkedin.com/in/jamaluddin-mondal-00630310b');
          }} >Contact Me</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#574b90" }}>
                <Betaicon active name="beta" />
              </Button>
            </Left>
            <Body>
              <Text  onPress={() => {
              alert('BETA  program registration Coming soon' );
            }}>Subscribe to Beta</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#d35400" }}>
                <HelpIcon active name="help-outline" />
              </Button>
            </Left>
            <Body>
              <Text onPress={() => this.props.navigation.push('Help')}>Help</Text>
            </Body>
           
          </ListItem>
           
        </Content>
      </Container>
      </TouchableOpacity>
      </ScrollView>
          <Animated.View style={[styles.HeaderStyle, { height: AnimateHeaderHeight, backgroundColor: AnimateHeaderBackgroundColor }]}>

            <Text style={styles.HeaderInsideTextStyle}>Settings</Text>

          </Animated.View>


</View>
    );
  }
}
}
class PreferenceScreen extends React.Component {
  render() {
    return (
        <>
     <Preference/>
      </>
    );
  }
}


class ProfileScreen extends React.Component {
  render() {
    return (
        <>
     <Profile/>
      </>
    );
  }
}

class HelpScreen extends React.Component {
  render() {
    return (
        <>
     <Help/>
      </>
    );
  }
}
class AboutScreen extends React.Component {
  render() {
    return (
        <>
     <About/>
      </>
    );
  }
}




 
const RootStack = createStackNavigator({
  Settings : Settings,
 preference: PreferenceScreen,
 Profile :ProfileScreen,
 Help : HelpScreen,
 about :AboutScreen


},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});

export default createAppContainer(RootStack);

const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },

    HeaderStyle:
    {
      justifyContent: 'center',

      position: 'absolute',
      left: 0,
      right: 0,

      top: (Platform.OS == 'ios') ? 20 : 0,
    },

    HeaderInsideTextStyle:
    {
      color: 'black',
      fontSize: 25,
   justifyContent: 'center',
   textAlign:'center'

    },

  
  });



