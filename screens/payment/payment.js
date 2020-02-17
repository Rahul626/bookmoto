import React, { Component } from 'react';
import { Container, Content, List, ListItem,Button, Left, Body, Right, Thumbnail,Separator} from 'native-base';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
export default class Payments extends Component {

   state = {
    wallet: [
         {
            id: 0,
            name: 'Moto Wallet',
            amount :25.0,
         },
         {
            id: 1,
            name: 'Paytm',
            amount:15.0,
            OfferText  : 'Get Rs 60 cashback ! Flat Rs 20 on first 3 rides', 
         },
         {
            id: 2,
            name: 'PhonePe',
            amount : 55.36,
         },   
      ]  
   }

  
   render() {
      return (
     
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
              {/* <Thumbnail source: {{ uri: item.image} /> */}
    
              </Left>
              <Body>
                <Text>{item.name}</Text>
               <Text>{item.OfferText}</Text>
              </Body>
              <Right>
                <Button transparent>
                <Text> &#8377; {item.amount}</Text>
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
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Simpl Pay</Text>
              </Body>
              <Right>
                <Button transparent>
            <Text>Click Me!</Text>
            </Button>

                </Right>             
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body  >
                <Text >LazyPay</Text>
                </Body>
                <Right>
                <Button transparent>
            <Text>Click Me!</Text>
            </Button>
                </Right>         
            </ListItem>
            <Separator bordered>
            <Text>Others</Text>
          </Separator>
          <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Cash</Text>
               
              </Body>       
            </ListItem>

          </List>
          <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
              <Text>SHOW  PASSBOOK</Text>
               
              </Body>
            </ListItem>
      
         </Content>
      
         </Container>
     
      )
   }
}


