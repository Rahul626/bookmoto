import React, { Component } from 'react';  
 import { Platform, StyleSheet, View, Text,  
 Image, TouchableOpacity } from 'react-native';  

 import Welcome from './screens/welcome/welcome';
 export default class Splash extends Component
{  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 5000);  
   }  
   
    render()  
    {  
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                 <Image
          style={{
            height: 100,
            width: 102,
            marginHorizontal: 150,
            marginVertical: 71,
          }}
          source={require('./assets/images/logo.png')}
        />
                </View>  
             </View> )  
         return(  
             <>  
               <Welcome></Welcome>
                 {  
                  (this.state.isVisible === true) ? Splash_Screen : null  
                }  
            </>  
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
      
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#ffffff',  
        flex:1,  
    },  
});  