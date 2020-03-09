import React, { Component,View ,StyleSheet} from 'react';
import SearchBar from '../foot/searchbar';
import CurrentLocation from  '../foot/currentLocation';
import { Container, } from 'native-base';

import Location from '../maps/map'
export default class Main extends Component {
  render() {
    return (
      <Container >
        <Location/>
        <SearchBar/> 
        <CurrentLocation/>
      </Container>

    );
  }
}




