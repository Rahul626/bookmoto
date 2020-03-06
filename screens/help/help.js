import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Animated, Text, Platform } from 'react-native';
const Header_Maximum_Height = 200;

const Header_Minimum_Height = 50;

export default class Help extends Component {
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


            <Text style={{ textAlign: 'center', fontSize: 20, paddingBottom: 20, marginTop: 20 }}>General queries and FAQ</Text>
            <Text style={styles.TextViewStyle}>How can I check the fare for a ride ? </Text>

            <Text style={styles.TextViewStyle} >How can I check the fare breakup for my ride ? </Text>

            <Text style={styles.TextViewStyle} >How do I apply a coupon code for a ride ? </Text>

            <Text style={styles.TextViewStyle}>Where can I find my captain details?</Text>

            <Text style={styles.TextViewStyle} >How can I contact my captain details/</Text>

            <Text style={styles.TextViewStyle}>How do ETA's work ?</Text>

            <Text style={styles.TextViewStyle}>How do I use PIN to start my ride ?</Text>

            <Text style={styles.TextViewStyle}>How can I tip my captain?</Text>

            <Text style={styles.TextViewStyle}>How to receive invoice in my email?</Text>

            <Text style={styles.TextViewStyle}>I want to undestand the charges in the invoice?</Text>

            <Text style={styles.TextViewStyle}>How can I check the fare breakup for my ride ? </Text>

            <Text style={styles.TextViewStyle} >How do I apply a coupon code for a ride ? </Text>

            <Text style={styles.TextViewStyle}>Where can I find my captain details?</Text>
            <Text style={styles.TextViewStyle} >How do I apply a coupon code for a ride ? </Text>

            <Text style={styles.TextViewStyle}>How can I contact my captain details?</Text>

            <Text style={styles.TextViewStyle}>How do ETA's work ?</Text>

            <Text style={styles.TextViewStyle}>How do I use PIN to start my ride ?</Text>

            <Text style={styles.TextViewStyle}>How can I tip my captain?</Text>

            <Text style={styles.TextViewStyle}>How to receive invoice in my email?</Text>

            <Text style={styles.TextViewStyle}>I want to undestand the charges in the invoice?</Text>
            <Text style={styles.TextViewStyle}>Where can I find my captain details?</Text>
            <Text style={styles.TextViewStyle}>How can I tip my captain?</Text>

            <Text style={styles.TextViewStyle}>How can I contact my captain details?</Text>

            <Text style={styles.TextViewStyle}>How do ETA's work ?</Text>

            <Text style={styles.TextViewStyle}>How do I use PIN to start my ride ?</Text>

            <Text style={styles.TextViewStyle}>How can I tip my captain?</Text>

            <Text style={styles.TextViewStyle}>How to receive invoice in my email?</Text>

            <Text style={styles.TextViewStyle}>I want to undestand the charges in the invoice?</Text>



          </ScrollView>
          <Animated.View style={[styles.HeaderStyle, { height: AnimateHeaderHeight, backgroundColor: AnimateHeaderBackgroundColor }]}>

            <Text style={styles.HeaderInsideTextStyle}> Help </Text>

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
