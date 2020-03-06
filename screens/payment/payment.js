import React, { Component } from 'react';
import { Container, Content, List, ListItem,Button, Left, Body, Right, Thumbnail,Separator} from 'native-base';
import { Text, View,ScrollView, TouchableOpacity, StyleSheet,Animated, Linking } from 'react-native';
const Header_Maximum_Height = 200;

const Header_Minimum_Height = 30;

export default class Payments extends Component {
  constructor() {
    super();

    this.AnimatedHeaderValue = new Animated.Value(0);

  }

   state = {
    wallet: [
         {
            id: 0,
            name: 'Moto Wallet',
            amount :25.0,
            OfferText  : 'Firt ride free with Moto wallet payment!',
            url :'https://theme.zdassets.com/theme_assets/1970816/920a1a9c295983eb76ec353ea5fb19d29b4a3cfd.png'
         },
         {
            id: 1,
            name: 'Paytm',
            amount:15.0,
            OfferText  : 'Get Rs 60 cashback ! Flat Rs 20 on first 3 rides!', 
            url:'https://cdn-images-1.medium.com/max/1200/1*c6vHWp2F5UQTBM05UgQe8w.jpeg'
         },
         {
            id: 2,
            name: 'PhonePe',
            amount : 55.36,
            OfferText  : 'FLAT 10 rupess discount on first & second time payments!',
            url : 'https://theindiandeal.com/wp-content/uploads/thumbs_dir/unnamed-2-1sareyiikyihze653qfd52qqg5b01vaw2io2xi8f7klg.png'
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

          scrollEventThrottle={16}

          contentContainerStyle={{ paddingTop: Header_Maximum_Height }}

          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue } } }]
          )}>

         <Container>
            
         <Content>
         <View>
        <Separator bordered>
            <Text>Wallets</Text>
          </Separator>

            {
               this.state.wallet.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                             
                    >
              <List>
               <ListItem >
              <Left>

              <Thumbnail  source={{uri: item.url}}  />

              </Left>
              <Body>
                <Text>{item.name}</Text>
               <Text style={{ color: 'green', fontSize:10 }} >{item.OfferText}</Text>
              </Body>
              <Right>
                <Button transparent>
                <Text style={{ color: 'blue' }} > &#8377; {item.amount}</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
           </TouchableOpacity>
               ))
            }
         </View>
         <Separator bordered>
            <Text>Pay Later</Text>
          </Separator>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail  source={{ uri: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/697601-bb6c829d374e9e75a901def59fd6bdac-medium_jpg.jpg?buster=1507715901' }} />
              </Left>
              <Body style={{borderBottomColor:'white'}} >
                <Text>Simpl Pay</Text>
              </Body>
              <Right style={{borderBottomColor:'white'}}>
                <Button transparent  onPress={() => Linking.openURL('http://google.com')}>
            <Text style={{ color: 'blue' }} >Click Me!</Text>
            </Button>

                </Right>             
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://apkdl.in/apkimage/36CPltbJ7hRAQrmmJv666I5ChgV0z74JLyA7LGFVnfqFcDlN763O-eJhcrPcdP4Gq3zv=rw' }} />
              </Left>
              <Body style={{borderBottomColor:'white'}} >
                <Text >Lazy Pay</Text>
                </Body>
                <Right>
                <Button transparent  onPress={() => Linking.openURL('http://google.com')}>
            <Text style={{ color: 'blue' }} >Click Me!</Text>
            </Button>
                </Right>          
            </ListItem>
            <Separator bordered>
            <Text>Others</Text>
          </Separator>
          <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://i.ya-webdesign.com/images/vector-coin-rupee-3.png' }} />
              </Left>
              <Body style={{borderBottomColor:'white'}} >  
                <Text>Cash</Text>
               
              </Body>
              <Right style={{borderBottomColor:'white'}}>
                <Button transparent  onPress={() =>alert('You have selected payment type as CASH')}>
            <Text style={{ color: 'blue' }} >Set default!</Text>
            </Button>
                </Right>          
            </ListItem>

          </List>
          <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRTEQSl6_pAcZvCUzYHuFW50gnkoZN9Vw0jqWju-260BjSjcQn' }} />
              </Left>
              <Body  >
              <Text>SHOW  PASSBOOK</Text>
               
              </Body>
            </ListItem>
         </Content>
         </Container>
         </ScrollView>
          <Animated.View style={[styles.HeaderStyle, { height: AnimateHeaderHeight, backgroundColor: AnimateHeaderBackgroundColor }]}>

            <Text style={styles.HeaderInsideTextStyle}>Payment </Text>

          </Animated.View>




        </View>
     
      )
   }
}}

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


