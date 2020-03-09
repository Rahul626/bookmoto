
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import App from '../../App';

import AppIntroSlider from 'react-native-app-intro-slider';
import Login from '../../screens/login/login';
import Register  from '../register/register';
import Practise from '../../Practise'
export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
       <Practise/>
      
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
});
 
const slides = [
  {
    key: 's1',
    text: 'Best way to reach your Destination fast!',
    title: 'Welcome to Book Moto!',
    image: require('../../assets/images/motorcycle.png'),
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'We are now in West Bengal',
    text: 'Largest Bike Taxi Platfrom',
    image: require('../../assets/images/west-bengal-map-png-4.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services, 50% for discount first 3 rides. ',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: "Don't pay everyday! Get a Power Pass",
    text: ' Multi kinds of Power Pass according to user!',
    image: require('../../assets/images/wallet.png'),
    backgroundColor: '#1E90FF',
  },
  {
    key: 's5',
    title: 'We cover all kinds'
     +'of Insurance for every single user need.',
    text: 'Support team 24*7',
    image: require('../../assets/images/two-wheeler-insurance-landing-img.png'),
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Join as Captain and earn every day minutes! ',
    text: ' We value every Captian as our partner, we provide loan for Captains',
    image: require('../../assets/images/giphy.gif'),
    backgroundColor: '#febe29',
  },
];