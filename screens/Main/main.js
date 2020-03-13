import React, { Component} from 'react';
import SearchBar from '../foot/searchbar';
import CurrentLocation from  '../foot/currentLocation';


import Location from '../maps/map'
export default class Main extends Component {
  render() {
    return (
      <>
        <Location/>
        <SearchBar/> 
        <CurrentLocation/>
      </>

    );
  }
}




