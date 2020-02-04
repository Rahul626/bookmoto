import React, { Component ,StyleSheet} from 'react';
import Menu from '../Top/nav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../foot/searchbar';
import CurrentLocation from  '../foot/currentLocation';
//import RegisterScreen from '../auth/register/register';
import { Container, Content, Card,  Text,Footer, FooterTab,Button } from 'native-base';

export default class Main extends Component {
  render() {
    return (
      <Container>
       <Menu/>
        <Content >
        
          <Card>
            <Icon name="my-location" size={20} style={{ textAlign:'right', marginRight:10, padding:5}} />
         </Card>
        </Content>

        <SearchBar/> 
        <CurrentLocation/>
        
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
