import React, { Component } from 'react';
import {
  StyleSheet,
  Text,View,
  Image,Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import  Register from '../register/register'

export default class Login extends Component {
  constructor() {
    super();

    this.state = { hidePassword: true }
  }

  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    return (
     <>
        
      
        <View style={styles.container} />
        <Image
          style={{ height: 100, width: 102, marginHorizontal: 150, marginVertical: 71, Color: "#F9D815" }}
          source={require('../../assets/images/logo.png')}
        />
     
        <Text style={{ backgroundColor: 'transparent', textAlign: 'center', paddingTop:10, fontSize: 25 }} >Forgot your password?</Text>
        <Text style={{ backgroundColor: 'transparent',textAlign: 'center', paddingTop:10 }} >Confirm your email id and we'll send the instructions.</Text>


        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
    
            <TextInput
              placeholder="    Registered Email id"
              secureTextEntry
              style={styles.input}
              secureTextEntry={this.state.showPassword}
              onChangeText={(password) => this.setState({ password })}>     
              </TextInput>
                  <TouchableOpacity activeOpacity={0.8} style={styles.touachableButton} onPress={this.setPasswordVisibility}>
          </TouchableOpacity>
      
          </View>
          <TouchableOpacity activeOpacity={.5}  onPress={() => {
         alert('Reset instructions has been sent to your mail id')
        }}>
            <View style={styles.button}>
              <Text >Continue</Text>
            
            </View>
            <TouchableOpacity activeOpacity={.5}>
            <View style={{borderRadius:30, alignItems: "center",
    justifyContent: "center",backgroundColor:'#C0C0C0',  paddingVertical: 15,
    marginVertical: 15,}}  onPress={() => this.props.navigation.navigate('Register')} >
              <Text style={styles.forgotPasswordText} >login here</Text>
              
            
            </View>
          </TouchableOpacity>
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

  wrapper: {
    paddingHorizontal: 15
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    backgroundColor: "transparent",
   
   
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius:30,
    borderStartWidth : 1,
  borderEndWidth : 1,
  borderTopWidth : 1,
borderLeftWidth:1,
borderRightWidth: 1,
borderBottomWidth : 1,
borderColor:'#F9D815'
   
  },

  button: {
   
    backgroundColor: "#F9D815",
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:30
  },

  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    
  },
  touachableButton: {
    position: 'absolute',
    right: 3,
    height: 34,
    width: 31,
    padding: 2
  },
  forgotPasswordText: {
  
    backgroundColor: "transparent",
    textAlign: "center"
  }
});

