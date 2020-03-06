
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView,SafeAreaView , TouchableOpacity} from 'react-native';
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

import Profile from '../settings/profile';

export default class Settings extends Component {

  render() {
    return (

      <ScrollView >
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
              <Text>Profile</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#ff9f43" }}>
                <Favorite active name="favorite-border" />
              </Button>
            </Left>
            <Body>
           
              <Text>Favorites</Text>
            </Body>
          
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#54a0ff" }}>
                <Pref active name="sound-mix" />
              </Button>
            </Left>
            <Body>
              <Text>Preference</Text>
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
              <Text>Logout</Text>
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
              <Text>About Us</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Mailicon active name="mail" />
              </Button>
            </Left>
            <Body>
              <Text>Contact us</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#574b90" }}>
                <Betaicon active name="beta" />
              </Button>
            </Left>
            <Body>
              <Text>Subscribe to Beta</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#d35400" }}>
                <HelpIcon active name="help-outline" />
              </Button>
            </Left>
            <Body>
              <Text>Help</Text>
            </Body>
           
          </ListItem>
          <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Profile')}
        />          
        </Content>
      </Container>
      </TouchableOpacity>
      </ScrollView>

    );
  }
}
 
const AppNavigator = createStackNavigator({
  Profile: {
    screen: Profile,

  },

});


 createAppContainer(AppNavigator);