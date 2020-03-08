import React, {Component} from 'react';
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  View,Image,
  Animated,
  Text,TouchableOpacity,
  Platform,Linking,
} from 'react-native';



const SCREEN_WIDTH = Dimensions.get('window').width;

const xOffset = new Animated.Value(0);
const Header_Maximum_Height = 200;
const Header_Minimum_Height = 50;
const Screen = props => {
  return (
    <View style={styles.scrollPage}>
      <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>
      <Text style={{textAlign:'center',fontSize:20,paddingTop:10,}} >{props.title}</Text>
      <Image
          style={{ height:50,width:52, marginHorizontal:150,marginVertical:31}}
          source={require('../../assets/images/logo.png')}
        />
      <Image
            style={{ height:70,width:72, marginHorizontal:150,}}
          source={require('../../assets/images/wallet.png')}
        />
        <Text style={styles.text}>{props.text}</Text>
        <Text style={{textAlign:"center",fontSize:30,color:'red',paddingHorizontal:20}}>&#8377;{props.amount}</Text>
        <Text style={{textAlign:"center",fontSize:15,color:'red',paddingHorizontal:20}}>{props.validfor}</Text>
        <Text style={styles.text}>Validity till : {props.validaity}</Text>
      </Animated.View>
    </View>
  );
};

const transitionAnimation = index => {
  return {
    transform: [
      {perspective: 800},
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
          ],
          outputRange: [0.25, 1, 0.25],
        }),
      },
      {
        rotateX: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
          ],
          outputRange: ['45deg', '0deg', '45deg'],
        }),
      },
      {
        rotateY: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
          ],
          outputRange: ['-45deg', '0deg', '45deg'],
        }),
      },
    ],
  };
};

export default class Powerpass extends Component {
  constructor() {
    super();

    this.AnimatedHeaderValue = new Animated.Value(0);
  }

  render() {
    {
      const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate(
        {
          inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
          outputRange: ['#F9D815', '#F9D815'],
          extrapolate: 'clamp',
        },
      );

      const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate({
        inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
        outputRange: [Header_Maximum_Height, Header_Minimum_Height],
        extrapolate: 'clamp',
      });

      return (
        <View style={styles.MainContainer}>
          <ScrollView
            scrollEventThrottle={16}
            contentContainerStyle={{paddingTop: Header_Maximum_Height}}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {y: this.AnimatedHeaderValue}}},
            ])}>
            <View>
              <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {x: xOffset}}}],
                  {useNativeDriver: true},
                )}
                horizontal
                pagingEnabled
                style={styles.scrollView}>
                
                <Screen  title="BookMoto Pass"  text="FLat Rs 6/KM rupees on all rides" validfor="30 Rides & max 2 rides per day" amount="99" validaity="05/04/2020" index={0} />
                <Screen  title="BookMoto Pass"  text="FLat Rs 5/KM rupees on all rides" validfor="35 Rides &  max 4 rides per day" amount="129" validaity="25/04/2020" index={1} />
                <Screen title="BookMoto Pass" text="FLat Rs 5/KM rupees on all rides"  validfor="45 Rides & max 6 rides per day" amount="149" validaity="25/05/2020"  index={2} />
             
            
              </Animated.ScrollView>
              <TouchableOpacity>
              <Text style={{textAlign:'center', paddingTop:30, color:'blue', marginBottom:20}} onPress={() => Linking.openURL('http://google.com')} >Terms and Conditions</Text>
              <View style={styles.button} onPress={() => {
         alert('Registration Successful')
        }}>
              <Text style={{color:'#F9D815', fontSize:20}} >BUY PASS</Text>
           
            </View>
           
            </TouchableOpacity>
            </View>
          </ScrollView>
          <Animated.View
            style={[
              styles.HeaderStyle,
              {
                height: AnimateHeaderHeight,
                backgroundColor: AnimateHeaderBackgroundColor,
              },
            ]}>
            <Text style={styles.HeaderInsideTextStyle}>Power Pass </Text>
          </Animated.View>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    
  
  },
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 20,
    
  },
  screen: {
    height: 400,

  
    borderRadius: 25,
    borderStartWidth : 2,
    borderEndWidth : 2,
    borderTopWidth : 2,
  borderLeftWidth:2,
  borderRightWidth:2,
  borderBottomWidth : 10,
  borderColor:'#F9D815'
  
 
  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
  },

  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 15,
  
    height:40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:30
  },

  HeaderStyle: {
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: Platform.OS == 'ios' ? 20 : 0,
  },

  HeaderInsideTextStyle: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },

  TextViewStyle: {
    fontSize: 15,
    margin: 5,
    padding: 7,
  },
 
  text: {
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 16,
    
  },
});
