import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container,View , Item, Input } from 'native-base';
export default class SearchBar extends Component {
  render() {
    return (
      <Container style={{ justifyContent: 'center', alignItems: 'center', shadowColor: 'white',  width: '100%', flex: 0.2 }}>
        <View>
          <Item style={{ width: '80%'}}>
            <Icon name="search" size={20} style={{ marginLeft: 8 ,color:'red' }} />
            <Input placeholder="Enter Destination" />
          </Item>
        </View>
      </Container>
    );
  }
}