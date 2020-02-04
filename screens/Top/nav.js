import React, { Component  } from 'react';
import { Container, Header, Title,  Button, Left, Right, Body, Icon} from 'native-base';
export default class Menu extends Component {
  render() {
    return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Book Moto</Title>
          </Body>
          <Right />
        </Header>
    );
  }
}
