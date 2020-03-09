import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Switch,
  TouchableOpacity,
} from 'react-native';

export default class Register extends Component {
  constructor() {
    super();

    this.state = {hidePassword: true};
  }

  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };

  render() {
    return (
      <>
        <View style={styles.container} />
        <View>
          <Text
            style={{
              backgroundColor: 'transparent',
              textAlign: 'center',
              fontSize: 30,
            }}>
            Namaste!
          </Text>
          <Text
            style={{
              backgroundColor: 'transparent',
              textAlign: 'center',
              fontSize: 20,
            }}>
            #1 BookMoto in India{' '}
          </Text>
        </View>
        <Image
          style={{
            height: 100,
            width: 102,
            marginHorizontal: 150,
            marginVertical: 71,
          }}
          source={require('../../assets/images/logo.png')}
        />

        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="   Your Name"
              style={styles.input}
              underlineColorAndroid="transparent"
              numeric
              maxLength={10}
              keyboardType={'numeric'}></TextInput>
          </View>

          <View style={styles.inputWrap}>
            <TextInput
              placeholder="   Mobile Number"
              style={styles.input}
              underlineColorAndroid="transparent"
              numeric
              keyboardType={'numeric'}></TextInput>
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="   Set  Password"
              secureTextEntry
              style={styles.input}
              secureTextEntry={this.state.showPassword}
              onChangeText={password => this.setState({password})}></TextInput>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.touachableButton}
              onPress={this.setPasswordVisibility}>
              <Image
                style={{height: 20, width: 20}}
                source={
                  this.state.hidePassword
                    ? require('../../assets/images/eye.png')
                    : require('../../assets/images/hide.png')
                }
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              alert('Registration Successful');
            }}>
            <View style={styles.button}>
              <Text>Register</Text>
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
    height: null,
  },
  wrapper: {
    paddingHorizontal: 15,
  },
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 40,
    backgroundColor: 'transparent',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F9D815',
  },

  button: {
    backgroundColor: '#F9D815',
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
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
    padding: 2,
  },
  forgotPasswordText: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#8700B1',
  },
});
