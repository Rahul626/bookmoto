import React, { Component } from 'react';
import { View, Button,StyleSheet, Dimensions , ScrollView,Animated, SafeAreaView,Linking} from 'react-native';
import { List, ListItem, Left, Card, CardItem, Text, Body, Icon, Right } from 'native-base';
import Boardicon from 'react-native-vector-icons/Feather';
import PlusIcon from 'react-native-vector-icons/FontAwesome';
import Personalaccident from 'react-native-vector-icons/MaterialCommunityIcons';



var { height, width } = Dimensions.get('window');
const Header_Maximum_Height = 180;

const Header_Minimum_Height = 10;

export default class Insurance extends Component {
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

        scrollEventThrottle={10}

        contentContainerStyle={{ paddingTop: Header_Maximum_Height }}

        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue } } }]
        )}>
  
     
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
        <Text style={{margin:10, paddingRight:20}}>powered_by</Text>
        <Text style={{ color: 'blue',marginRight:10, paddingHorizontal:60 }}
          onPress={() => {
            //on clicking we are going to open the URL using Linking
            Linking.openURL('https://twitter.com/iam_rahul_rj');
          }}>
        jamal
        </Text>
        </ScrollView>
          <Animated.View style={[styles.HeaderStyle, { height: AnimateHeaderHeight, backgroundColor: AnimateHeaderBackgroundColor }]}>

            <Text style={styles.HeaderInsideTextStyle}>Insurance</Text>

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

  
  });



