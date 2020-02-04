import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import { Container, Item, Input } from 'native-base';
export default class CurrentLocation extends Component {
  render() {
    return (
      <Container style={{ justifyContent: 'center', alignItems: 'center', shadowColor: 'white',  width: '100%', flex: 0.2 }}>
        <Item style={{ width: '100%' }}>
          <Icon name="primitive-dot" size={20} style={{ marginLeft: 8 }} />
          <Input placeholder="My Current Location" />
        </Item>
      </Container>
    );
  }
}