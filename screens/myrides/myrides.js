import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet,Animated, } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body,Right } from 'native-base';

import Locationicon from 'react-native-vector-icons/SimpleLineIcons';
import Desticon from 'react-native-vector-icons/FontAwesome';
const Header_Maximum_Height = 200;

const Header_Minimum_Height = 50;


export default class Myrides extends Component {
  constructor() {
    super();

    this.AnimatedHeaderValue = new Animated.Value(0);

  }
  state = {
    rides: [
      {
        id: 0,
        pickup: 'Howrah Bridge,kolkata',
        dest:'Jorasanko Thakurbari,kolkata',
        amount:120,
      },
      {
        id: 1,
        pickup: 'Park Street,kolkata',
        dest:'Howrah, kolkata',
        amount:110,
      },
      {
        id: 2,
        pickup: 'Indian Museum, kolkata',
        dest:'Marble Palace Mansion ,kolkata',
        amount:108,
      },
      {
        id: 3,
        pickup: 'Calcutta Racecourse ,kolkata',
        dest:'Eden Gardens,kolkata',
        amount:137,
      },
      {
        id: 4,
        pickup: 'Marble Palace Mansion,kolkata',
        dest:'Victoria Memorial,kolkata',
        amount:98,
      },
      {
        id: 5,
        pickup: 'Indian Museum,kolkata',
        dest:'Victoria Memorial,kolkata',
        amount:159,
      },
      {
        id: 6,
        pickup: 'Calcutta Racecourse ,kolkata',
        dest:'Eden Gardens,kolkata',
        amount:120,
      },
      {
        id: 7,
        pickup: 'Indian Museum,kolkata',
        dest:'Calcutta Racecourse ,kolkata',
        amount:90,
      },
      {
        id: 8,
        pickup: 'Howrah Bridge,kolkata',
        dest:'Jorasanko Thakurbari,kolkata',
        amount:130,
      },
      {
        id: 9,
        pickup: 'Marble Palace Mansion,kolkata',
        dest:'Victoria Memorial,kolkata',
        amount:111,
      },
      {
        id: 10,
        pickup: 'Calcutta Racecourse ,kolkata',
        dest:'Eden Gardens,kolkata',
        amount:129
      },
      
    ]
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
  
      <View>
        {
          this.state.rides.map((item, index) => (
            <TouchableOpacity
           >
              <Card style={{ flex: 0 ,}}>
                <CardItem style={{height:100}}>
                  <Left>
                  <Locationicon name="location-pin" size={20}s style={{color:'#2ce310'}} />
                    <Text>
                        {item.pickup}
                      </Text>
                    </Left>
                      <Body>
                        
                       </Body>
                       <Right>
                       
                    
                      <Text>Paid:&#8377;{item.amount} </Text>
                        
                      <Text>
                        {item.dest}
                      </Text>
                      <Desticon name="map-pin" size={20}s style={{color:'#e8410e'}} />
                       </Right>   
                   </CardItem>
              </Card>
            </TouchableOpacity>
          ))
        }
      </View>
    
      </ScrollView>
          <Animated.View style={[styles.HeaderStyle, { height: AnimateHeaderHeight, backgroundColor: AnimateHeaderBackgroundColor }]}>

            <Text style={styles.HeaderInsideTextStyle}>My Rides</Text>

          </Animated.View>




        </View>

    )
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



