import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, View,Image, Text, Alert } from 'react-native';
import {Button,  Input, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    const login = async() => {
        setShowLoading(true);
        try {
            const doLogin = await auth().signInWithEmailAndPassword(email, password);
            setShowLoading(false);
            if(doLogin.user) {
                navigation.navigate('Home');
            }
        } catch (e) {
            setShowLoading(false);
            Alert.alert(
                e.message
            );
        }
    };

    return (
        <View style={styles.container}>
             <Text style={{ backgroundColor: 'transparent', textAlign: 'center', fontSize: 30,marginTop:10 }} >Welcome Back!</Text>
          <Text style={{ backgroundColor: 'transparent', textAlign: 'center', fontSize: 20,marginBottom:20 }} >#1 BookMoto in India </Text>
        
          <Image
          style={{ height: 100, width: 102, justifyContent:'center' }}
          source={require('../../assets/images/logo.png')}
        />
          
            <View style={styles.formContainer}>
            
                <View style={styles.subContainer}>
                    <Input
                        style={styles.textInput}
                        placeholder='Your Email'
                        leftIcon={
                            <Icon
                            name='mail'
                            size={24}
                            />
                        }
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.subContainer}>
                    <Input
                        style={styles.textInput}
                        placeholder='Your Password'
                        leftIcon={
                            <Icon
                            name='lock'
                            size={24}
                            />
                        }
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.subContainer}>
                    <Button
                    buttonStyle={{
                        backgroundColor: "#F0D014",borderRadius:20,
                     }}
                        style={styles.textInput}
                        icon={
                            <Icon
                                name="input"
                                size={18}
                                color="black"
                            />
                        }
                        title="Login"
                        onPress={() => login()} />
                </View>
                
                <View >
                    <Button buttonStyle={{
         backgroundColor: "#D4BC67",borderRadius:20,
      }}
                        style={styles.textInput}
                        icon={
                            <Icon
                                name="refresh"
                                size={18}
                                color="black"
                            />
                        }
                        title="Reset Password"
                        onPress={() => {
                            navigation.navigate('Reset');
                        }} />
                </View>
                <View >
                    <Text style={{textAlign:'center'}}>Not a user?</Text>
                </View>
                <View style={styles.subContainer}>
                    <Button
                    buttonStyle={{
                        backgroundColor: "#1F46E0",borderRadius:20, 
                     }}
                        style={styles.textInput}
                        icon={
                            <Icon
                                name="check-circle"
                                size={18}
                                color="white"
                            />
                        }
                        title="Register"
                        onPress={() => {
                            navigation.navigate('Register');
                        }} />
                </View>
                {showLoading &&
                    <View style={styles.activity}>
                        <ActivityIndicator size="large" />
                    </View>
                }
            </View>
        </View>
    );
}

Login.navigationOptions = ({ navigation }) => ({
    title: 'Login',
    headerShown: false,
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        paddingTop:30
      
    },
    formContainer: {
        height: 500,
        width:400,
        padding: 20
    },
    subContainer: {
        marginBottom: 20,
        padding: 5,
      
        
      
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',  
      
        
        
    },
    button: {
        backgroundColor: '#F9D815',
        paddingVertical: 15,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
      },
    textInput: {
        fontSize: 18,
        margin: 5,
        width: 200,
        color:'black'
       
        
    },
})