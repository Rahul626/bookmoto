import * as React from 'react';
import { Button, View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screens/login/login';
import Forgot from './screens/login/forgot';
import Register from './screens/register/register';
import Router from './router'
import App from './App';
import Preference from './screens/settings/preference';
import Profile from './screens/settings/profile';

class HomeScreen extends React.Component {
    render() {
      return (
     
       <>
            <App/>
     </>
      );
    }
  }



class RegisterScreen extends React.Component {
  render() {
    return (
   
     <View >
          <Register/>
     <Text style={{textAlign:'center', backgroundColor:'transparent'}}  onPress={() => this.props.navigation.navigate('Login')} >Already registered? login here</Text>
     <Text style={{textAlign: 'center', justifyContent:'center',paddingTop:125}}>#Made in India</Text>
   </View>
    );
  }
}
class LoginScreen extends React.Component {
    render() {
      return (
          <View>
        <Login/>
        <TouchableOpacity activeOpacity={.5} 
         onPress={() => this.props.navigation.navigate('Home')}>
            <View style={styles.button} > 
              <Text >Login</Text>

            </View>
          
          </TouchableOpacity>
    
           <View >
                <Text style={{textAlign:'center', backgroundColor:'transparent'}}  onPress={() => this.props.navigation.navigate('Forgot')} >Forgot Password?</Text>
              </View>
        </View>
      );
    }
  }
  class ForgotScreen extends React.Component {
    render() {
      return (
          <View>
       <Forgot/>
        </View>
      );
    }
  }

  class PreferenceScreen extends React.Component {
    render() {
      return (
          <View>
       <Preference/>
        </View>
      );
    }
  }


  class ProfileScreen extends React.Component {
    render() {
      return (
          <View>
       <Profile/>
        </View>
      );
    }
  }


  







const RootStack = createStackNavigator({
    Register: RegisterScreen,
    Home:HomeScreen,
  Login :LoginScreen,
  Forgot: ForgotScreen,
  Register: RegisterScreen,
   preference: PreferenceScreen,
   Profile :ProfileScreen


},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(RootStack);


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
      backgroundColor: "transparent",
      
  
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: '#FFF',
      borderRadius: 30,   borderStartWidth : 1,
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
      borderRadius: 30
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
  
  