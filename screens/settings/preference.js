import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Animated, Text,Switch, Platform } from 'react-native';
import { Container, Content, List, ListItem, Left, Right, Separator } from 'native-base';


const Header_Maximum_Height = 200;

const Header_Minimum_Height = 50;


export default class Preference extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.AnimatedHeaderValue = new Animated.Value(0);
    this.state = {
      isActive: false,
    }
  }


  toggleSwitch() {
    this.setState({ isActive: !this.state.isActive });
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

           
                <Content>
                  <List>
                    <Separator style={{ backgroundColor: 'white' }}>
                      <Text style={{ fontSize: 15 }}>Email</Text>
                    </Separator>
                    <ListItem >
                      <Left>
                        <Text>Allow emails for promotions</Text>
                      </Left>
                      <Right>
                        <Switch
                          onValueChange={this.toggleSwitch}
                          value={!this.state.isActive}
                        />
                      </Right>
                    </ListItem>
                    <ListItem >
                      <Left>
                        <Text>Allow emails for Offers</Text>
                      </Left>
                      <Right>
                        <Switch
                          onValueChange={this.toggleSwitch}
                          value={!this.state.isActive}
                        />
                      </Right>
                    </ListItem>
                    <ListItem >
                      <Left>
                        <Text>Allow emails for invoice</Text>
                      </Left>
                      <Right>
                        <Switch
                          onValueChange={this.toggleSwitch}
                          value={this.state.isActive}
                        />
                      </Right>
                    </ListItem>
                    <Separator style={{ backgroundColor: 'white' }}>
                      <Text style={{ fontSize: 15 }}>SMS</Text>
                    </Separator>
                    <ListItem >
                      <Left>
                        <Text>Allow SMS for invoice</Text>
                      </Left>
                      <Right>
                        <Switch
                          onValueChange={this.toggleSwitch}
                          value={!this.state.isActive}
                        />
                      </Right>
                    </ListItem>
                    <ListItem >
                      <Left>
                        <Text>Allow promotional SMS offers</Text>
                      </Left>
                      <Right>
                        <Switch
                          onValueChange={this.toggleSwitch}
                          value={!this.state.isActive}
                        />
                      </Right>
                    </ListItem>
                    <Separator style={{ backgroundColor: 'white' }}>
                      <Text style={{ fontSize: 15 }}>Push Notification</Text>
                    </Separator>
                    <ListItem >
                      <Left>
                        <Text>Allow mobile push notifications</Text>
                      </Left>
                      <Right>
                        <Switch
                          onValueChange={this.toggleSwitch}
                          value={!this.state.isActive}
                        />
                      </Right>
                    </ListItem>
                    <ListItem >
                      <Left>
                        <Text>Push notification for Coupon</Text>
                      </Left>
                      <Right>
                        <Switch
                          onValueChange={this.toggleSwitch}
                          value={!this.state.isActive}
                        />
                      </Right>
                    </ListItem>
                    <ListItem >
                      <Left>
                        <Text>Push notification for alert</Text>
                      </Left>
                      <Right>
                        <Switch
                          onValueChange={this.toggleSwitch}
                          value={!this.state.isActive}
                        />
                      </Right>
                    </ListItem>
                    <Separator style={{ backgroundColor: 'white' }}>
                      <Text style={{ fontSize: 15 }}>Picture in picture(PIP)</Text>
                    </Separator>
                    <ListItem >
                      <Left>
                        <Text>Allow picture in picture access</Text>
                      </Left>
                      <Right>
                        <Switch
                          onValueChange={this.toggleSwitch}
                          value={!this.state.isActive}
                        />
                      </Right>
                    </ListItem>
                  </List>
                </Content>
        
            </Container>
          </ScrollView>
          <Animated.View style={[styles.HeaderStyle, { height: AnimateHeaderHeight, backgroundColor: AnimateHeaderBackgroundColor }]}>

            <Text style={styles.HeaderInsideTextStyle}>Preference </Text>

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

      textAlign: 'center'

    },

    TextViewStyle:
    {

      color: "#000",
      fontSize: 15,
      margin: 5,
      padding: 7,

    }
  });
