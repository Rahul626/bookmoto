import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container,View , Item, Input } from 'native-base';
export default class SearchBar extends Component {
  render() {
    return (
      <Container>
        <View  
        style={{ justifyContent: 
        'center', alignItems: 'center',
         shadowColor: 'white',
          flexDirection: 'row', 
              width: '100%',
               flex: 0.2}} searchBar>
          <Item style={{ width: '100%'}}>
            <Icon name="search" size={20} style={{ marginLeft: 8 }} />
            <Input placeholder="Enter Destination" />
          </Item>
        </View>
      </Container>
    );
  }
}