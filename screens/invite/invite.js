import React, { Component } from 'react';
import { Image , View, Text } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Icon, Left,Button, Body,Right } from 'native-base';

import Whatsappicon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Button } from 'react-native-paper';



export default class Invite extends Component {
  //Screen1 Component
  render() {
    return (
  
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

    );
  }
}
 
