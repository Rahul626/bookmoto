import React, { Component } from 'react';
import { Image , View,ScrollView, StyleSheet,Animated,Text } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Icon, Left,Button, Body,Right } from 'native-base';

import Whatsappicon from 'react-native-vector-icons/MaterialCommunityIcons';
const Header_Maximum_Height = 200;

const Header_Minimum_Height = 50;



export default class Invite extends Component {
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
       
        <Content>
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text style={{fontSize:20, }}>Invite friends and get rewards</Text>
                
                </Body>
              </Left>
            </CardItem>
            <CardItem >
              <Image source={{uri: 'https://img.icons8.com/bubbles/2x/gift.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            
            <CardItem>
           
              <Body>
                <Button transparent style={{shadowColor:'grey', justifyContent: 'center',textAlign: 'center', alignItems: 'center', padding: 5}}>
                <Text>Your refer code :  </Text>
                   <Text style={{borderStyle:'dashed', borderWidth: 1, padding: 5, borderRadius: 5}}>JAM25C28D</Text>
                 
                </Button>
              </Body>
              <Right>
                
                <Text>Per refer: &#8377;30</Text>
              </Right>
              
            </CardItem>
          </Card>

        </Content>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly',
        padding:10}}>

        <Button style={{justifyContent:'center', width:180, borderRadius:50, marginHorizontal:5}} iconLeft transparent bordered >
            <Icon name='share' onPress = { () => { console.log("Button pressed!")} } />
            <Text style={{padding:5, textAlign:'center'}} >Others</Text>
          </Button>

          <Button style={{justifyContent:'center',backgroundColor:'#4DC85D', width:180, borderRadius:50, marginHorizontal:5}} iconLeft transparent >
            <Whatsappicon name='whatsapp' size={20}   onPress = { () => { console.log("Button pressed!")} } />
            <Text style={{padding:5, textAlign:'center'}} >WhatsApp</Text>
          </Button>

        </View>
       
      </Container>
      </ScrollView>
          <Animated.View style={[styles.HeaderStyle, { height: AnimateHeaderHeight, backgroundColor: AnimateHeaderBackgroundColor }]}>

            <Text style={styles.HeaderInsideTextStyle}>Invite Frieds</Text>

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



