import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Animated, Text, Platform } from 'react-native';
const Header_Maximum_Height = 200;

const Header_Minimum_Height = 50;

export default class Powerpass extends Component {
  constructor() {
    super();

    this.AnimatedHeaderValue = new Animated.Value(0);

  }

  render() {

    {

      const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate(
        {
          inputRange: [0, (Header_Maximum_Height - Header_Minimum_Height)],

          outputRange: ['#F9D815', '#F9D815'],

          extrapolate: 'clamp'
        });

      const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate(
        {
          inputRange: [0, (Header_Maximum_Height - Header_Minimum_Height)],

          outputRange: [Header_Maximum_Height, Header_Minimum_Height],

          extrapolate: 'clamp'
        });

      return (

        <View style={styles.MainContainer}>
          <ScrollView

            scrollEventThrottle={16}

            contentContainerStyle={{ paddingTop: Header_Maximum_Height }}

            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue } } }]
            )}>
<View>
    <Text>POWERPASS PAGE</Text>
</View>


          </ScrollView>
          <Animated.View style={[styles.HeaderStyle, { height: AnimateHeaderHeight, backgroundColor: AnimateHeaderBackgroundColor }]}>

            <Text style={styles.HeaderInsideTextStyle}>Power Pass </Text>




          </Animated.View>




        </View>


      );
    }
  }
}
const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },

    HeaderStyle:
    {
      justifyContent: 'center',
      position: 'absolute',
      left: 0,
      right: 0,

      top: (Platform.OS == 'ios') ? 20 : 0,
    },

    HeaderInsideTextStyle:
    {
      color: 'black',
      fontSize: 25,

      textAlign:'center'

    },

    TextViewStyle:
    {

      color: "#000",
      fontSize: 15,
      margin: 5,
      padding: 7,

    }
  });
