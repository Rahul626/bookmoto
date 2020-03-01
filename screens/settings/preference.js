import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem,Left,Right, Text, Separator } from 'native-base';
import {
  AppRegistry,
  View, 
  TextInput,
  Switch, ScrollView 
} from 'react-native';



export default class Preference extends Component {
    constructor(props) {
        super(props);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state = {
          isActive: false,
        }
      }

      
toggleSwitch() {
    this.setState({ isActive: !this.state.isActive });
  }


  render() {
    return (
      <Container>
     <Header  title="Preferences" style={{height:40, backgroundColor:'#F9D815'}}>
       <Text style={{fontSize:20,}}>Preferences</Text>
       </Header>
       <ScrollView >  
         <View>
        <Content>
          <List>
          <Separator style={{backgroundColor:'white'}}>
            <Text style={{fontSize:15}}>Email</Text>
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
            <Separator style={{backgroundColor:'white'}}>
            <Text style={{fontSize:15}}>SMS</Text>
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
            <Separator style={{backgroundColor:'white'}}>
            <Text style={{fontSize:15}}>Push Notification</Text>
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
            <Separator style={{backgroundColor:'white'}}>
            <Text style={{fontSize:15}}>Picture in picture(PIP)</Text>
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
        </View>
        </ScrollView>
      </Container>
    );
  }
  

}

