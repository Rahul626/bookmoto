import React, { Component } from 'react';
import { View, Text,Image, StyleSheet,Linking } from 'react-native';
import Devicon from 'react-native-vector-icons/FontAwesome5';

export default class aboutme extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <View style={styles.container}>
           
           <Image
          style={{
            height: 100,
            width: 102,
            marginHorizontal: 150,
            marginVertical: 71,
          }}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={{fontSize:20,  fontFamily:"Roboto"}}>BookMoto</Text>
                <Text style={{ padding: 20 }
                } >

BookMoto App can be used for delivery food, rides (any kind of vechile) or parcel delivery
that will work based on user choice, like user choose destination for going somewhere or sending items to a place by simply requesting through this app.    </Text>
        
    <Text style={{ padding: 20 }}>
    For accepting the request and fully execution of tasks we need one more app like Captain app, which will accept requests from this app.

    </Text>
    <View >
 <Text>Find me</Text>
    <Devicon onPress={() => {
            Linking.openURL('https://www.linkedin.com/in/jamaluddin-mondal-00630310b');
          }} name="dev" size={30}/>

    </View>
    

    
            </View >
        );
    }
}


const styles = StyleSheet.create(
    {
        container: {
            paddingTop: 40,
            alignItems: 'center',
          
            flex: 1,
          },
    
    });