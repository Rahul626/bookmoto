import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

const background = require("../../assets/images/two-wheeler-insurance-landing-img.png");


export default class Login extends Component {
  render() {
    return (
     <>
        <View style={styles.container} />
        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image
               
              />
            </View>
            <TextInput
              placeholder="Username"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image
               
              />
            </View>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity activeOpacity={.5}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
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
    paddingHorizontal: 10,
    backgroundColor: '#FFF'
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d73352"
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: "#d73352",
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

