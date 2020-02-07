import React, { Component } from 'react';
import { View, Button, Dimensions } from 'react-native';
import { List, ListItem, Left, Card, CardItem, Text, Body, Icon, Right } from 'native-base';
import Boardicon from 'react-native-vector-icons/Feather';
import PlusIcon from 'react-native-vector-icons/FontAwesome';
import Personalaccident from 'react-native-vector-icons/MaterialCommunityIcons';

var { height, width } = Dimensions.get('window');

export default class Insurance extends Component {

  render() {
    return (
      <View >
        <Card>
          <CardItem header bordered style={{ backgroundColor: 'lightgrey' }}>
            <Text>Policy coverage</Text>
          </CardItem>


          <List>
            <ListItem avatar >
              <Left  >
                <Personalaccident name="shield-account" size={20} style={{ textAlign: 'right'}} />
              </Left>
              <Body>
                <Text>Personal Accident/Accidental Death</Text>
                <Text note>Upto &#8377;5,00,000</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <PlusIcon name="plus-square" size={20} style={{ textAlign: 'right' }} />

              </Left>
              <Body>
                <Text>Medical Expense for Hospitalization</Text>
                <Text note>Upto &#8377;1,00,000</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Boardicon name="clipboard" size={20} style={{ textAlign: 'right' }} />
              </Left>
              <Body>
                <Text >OPD Treatment</Text>
                <Text note>Upto &#8377;3,000</Text>
              </Body>
            </ListItem>
          </List>
          <CardItem style={{ backgroundColor: 'lightgrey' }}>
            <Text>legal</Text>
          </CardItem>
          <ListItem >
            <Body>
              <Text>Claim Procedure</Text>
            </Body>
            <Right>
              <Text style={{ color: 'blue' }}
                onPress={() => Linking.openURL('http://google.com')} >view</Text>

            </Right>
          </ListItem>
          <ListItem >
            <Body>
              <Text>Terms and Conditions</Text>
            </Body>
            <Right>
              <Text style={{ color: 'blue' }}
                onPress={() => Linking.openURL('http://google.com')} >view</Text>

            </Right>
          </ListItem>
          <ListItem >
            <Body>

              <Text>Acko insurance</Text>
            </Body>
            <Right>
              <Text style={{ color: 'blue' }}
                onPress={() => Linking.openURL('http://google.com')} >view</Text>

            </Right>
          </ListItem>


          <Text style={{ padding: 10, margin: 5, borderRadius: 10 }}>
            Please provide your correct email-id, date of birth and phone number to avoid cancellation of your Insurance claim.
          </Text>

        </Card>
        <View style={{ width: width * 0.5, height: 40, borderRadius: 30, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center',alignSelf: 'center', alignContent: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '300', color: 'yellow' }}>CLAIM INSURANCE</Text>
          
        </View>
        <Text style={{margin:10, paddingRight:20}}>powered_by_jamal</Text>
       




      </View>

    );
  }
}

