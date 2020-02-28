import React, { Component } from 'react';
import {
    AppRegistry,
  StyleSheet,
  Text,
  TextInput ,View,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Lockicon from 'react-native-vector-icons/SimpleLineIcons';

import Otp from './OtpSetup';
import App from '../Main/main'

const background = require("../../assets/images/two-wheeler-insurance-landing-img.png");


export default class Register extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
     <>
        <View style={styles.container} />
        <View style={styles.wrapper}>


          <View style={styles.inputWrap}>

            <View style={styles.iconWrap}>
             <Text>+91</Text>
            </View>
            <TextInput
              placeholder="Your mobile number"
           
              style={styles.input}
              underlineColorAndroid="transparent"
              numeric
              keyboardType={'numeric'}
            />
          </View>
           <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
            <Lockicon name="lock" size={20} />
            </View>
         <TextInput
              placeholder="OTP"
              secureTextEntry
              style={styles.input}
              underlineColorAndroid="transparent"
              numeric
              keyboardType={'numeric'}
            /> 
          </View> 
      
          <TouchableOpacity activeOpacity={.5}>
            <View style={styles.button}>
                <Text onPress={() =>
            this.props.navigation.navigate('App')
          } >Next</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <View>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container} />
        </>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: null,
    height: null
  },
  wrapper: {
    paddingHorizontal: 15,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    backgroundColor: "transparent"
  },
  input: {
    flex: 1,
    height:40,
    paddingHorizontal: 10,
    backgroundColor: '#FFF'
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fcba03"
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: "#fcba03",
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18
  },
  forgotPasswordText: {
    color: "#FFF",
    backgroundColor: "transparent",
    textAlign: "center"
  }
});

