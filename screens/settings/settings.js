//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Button, ListItem, Left,Icon, Body } from 'native-base';
import {  List,  Right, Thumbnail, } from 'native-base';



import Accounticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Favorite from 'react-native-vector-icons/MaterialIcons';

import Pref from 'react-native-vector-icons/Entypo';
import Lanicon from 'react-native-vector-icons/Entypo';



// import all basic components

export default class Settings extends Component {
  //Screen3 Component
  render() {
    return (
      <Container>
        
   
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Accounticon active name="account" />
              </Button>
            </Left>
            <Body>
              <Text>Profile</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Favorite active name="favorite-border" />
              </Button>
            </Left>
            <Body>
           
              <Text>Favorites</Text>
            </Body>
          
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Pref active name="sound-mix" />
              </Button>
            </Left>
            <Body>
              <Text>Preference</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Lanicon active name="language" />
              </Button>
            </Left>
            <Body>
              <Text>App language</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>App short cuts</Text>
            </Body>
           
          </ListItem>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://cdn3.iconfinder.com/data/icons/basic-ui-elements-2-4-flat-style-36/512/Basic_UI_Elements_2.4_-_Flat_Style_-_36-48-512.png' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
      
              </Body>
             
            </ListItem>
          </List>
          
          
        </Content>
      </Container>
    );
  }
}
 
