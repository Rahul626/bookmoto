import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right } from 'native-base';
import {  View,ScrollView, StyleSheet,Animated,Text } from 'react-native';

import User from 'react-native-vector-icons/Entypo';
import Mail from 'react-native-vector-icons/Entypo';
import Calender from 'react-native-vector-icons/AntDesign';
import Usercheck from 'react-native-vector-icons/FontAwesome5';
import Contactmail from 'react-native-vector-icons/MaterialIcons';
import Logout from 'react-native-vector-icons/MaterialCommunityIcons';

const Header_Maximum_Height = 140;

const Header_Minimum_Height = 50;




export default class Profile extends Component {
  constructor() {
    super();

    this.AnimatedHeaderValue = new Animated.Value(0);

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
  
      <Container>
        <Header style={{ height: 60, backgroundColor: '#F9D815' }} />
        <Content>
          <Text style={{ fontSize: 20, paddingTop: 20, paddingLeft: 20, margin: 5 }} >Profile</Text>
          <List >
            <ListItem avatar>
              <Left  >
                <Mail color="white" style={{ backgroundColor: "#617be3", height: 28, textAlign: 'center', width: 35, borderRadius: 50 }} name="mail" size={25} />

              </Left>
              <Body style={{ borderBottomColor: 'white' }} >
                <Text>Email</Text>
                <Text note>irahulxyz@gmail.com</Text>
              </Body>

            </ListItem>
            <ListItem avatar   >
              <Left>
                <User name="user" color="white" size={18} style={{ backgroundColor: "#3C9741", height: 28, textAlign: 'center', width: 32, borderRadius: 50 }} />
              </Left>
              <Body style={{ borderBottomColor: 'white' }}>
                <Text>Gender</Text>
                <Text note>Male</Text>
              </Body>

            </ListItem>
            <ListItem avatar >
              <Left >
                <Calender name="calendar" size={20} style={{ backgroundColor: "#F7B24D", height: 28, textAlign: 'center', color: 'white', width: 30, borderRadius: 50 }} />
              </Left>
              <Body style={{ borderBottomColor: 'white' }}>
                <Text>Date of Birth</Text>
                <Text note>01/01/1990</Text>
              </Body>

            </ListItem>
            <ListItem avatar>
              <Left>
                <Usercheck name="user-check" size={20} style={{ backgroundColor: "#25B6AF", height: 28, textAlign: 'center', width: 30, color: 'white', borderRadius: 50 }} />
              </Left>
              <Body style={{ borderBottomColor: 'white' }}>
                <Text>Member Since</Text>
                <Text note>Jul 2019</Text>
              </Body>

            </ListItem>
            <ListItem avatar>
              <Left>
                <Contactmail name="contact-mail" size={20} style={{ backgroundColor: "#FB0041", height: 28, textAlign: 'center', color: 'white', width: 32, borderRadius: 50 }} />
              </Left>
              <Body style={{ paddingTop: 10 }} >
                <Text>Emergency Contacts</Text>
                <Text note>Share ride details with trusted contacts</Text>
              </Body>

            </ListItem>
            <Text style={{ fontSize: 20, paddingTop: 20, paddingLeft: 20, margin: 5 }}>
              Others
          </Text>
          </List>

          <ListItem avatar style={{ height: 60 }}>
            <Left>

              <Logout name="logout" size={25} style={{ backgroundColor: "#ba6b57", height: 30, textAlign: 'center', color: 'white', width: 32, borderRadius: 50 }} />
            </Left>
            <Body style={{ borderBottomColor: 'white' }} >
              <Text style={{ fontSize: 20 }}>Logout</Text>

            </Body>

          </ListItem>

        </Content>

      </Container>
      </ScrollView>
          <Animated.View style={[styles.HeaderStyle, { height: AnimateHeaderHeight, backgroundColor: AnimateHeaderBackgroundColor }]}>

          <View >
          <Text style={{fontSize:30,textAlign:'center',}}  >Jamaluddin</Text>
            <Text style={{textAlign:'center',}} >+91 7407323009</Text>

          </View>
           

          </Animated.View>




        </View>
    );
  }
}
}

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
    TextViewStyle:
    {
      paddingTop:30,
      marginTop:20,
      color: "#000",
      textAlign:'left',
     paddingHorizontal:20,

    }

  
  });



