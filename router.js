import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack"
import Icon from 'react-native-vector-icons/Ionicons';


import locationA from './screens/maps/map';
import Payments from './screens/payment/payment';
import Myrides from './screens/myrides/myrides';
import Settings from './screens/settings/settings';
import Notification from './screens/notification/notification';
import Invite from './screens/invite/invite';
import Insurance from './screens/insurance/insurance';
import Help from './screens/help/help';
import Powerpass from './screens/powerpass/powerpass';







const Header =({name, openDrawer})=> (
  <View style={styles.header}>
    <TouchableOpacity onPress={()=>openDrawer()}>
    <Icon name="md-menu" size={25} style={{ marginLeft: 15 }} />
    </TouchableOpacity>
    <Text>{name}</Text>
    <Text style={{width:50}}></Text>
  </View>
)
const Home = ({navigation}) => (
  <View >
    <Header name="Home" openDrawer={navigation.openDrawer}/>
    {/* <Image source ={require("./assets/banner.png")} style={{width:"80%", height:"30%"}} resizeMode="contain"/> */}
    <Settings/>

  </View>
)

const Profile = ({navigation}) => (
  < >
  
    {/* <Image source ={require("./assets/banner.png")} style={{width:"80%", height:"30%"}} resizeMode="contain"/> */}
  <Profile/>
  </>
)

// const Settings = ({navigation}) => (
//   <>
//     <Header name="Settings" openDrawer={navigation.openDrawer}/>
//     <Settings/>

//   </>
// )

function Item({ item, navigate }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={()=>navigate(item.name)}>
          <Icon name="md-menu" size={25} style={{ marginLeft: 15 }} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

class Sidebar extends React.Component {
  state = {
      routes:[
          {
              name:"Home",
              icon:"ios-home"
          },
          {
              name:"Profile",
              icon:"ios-contact"
          },
          {
              name:"Settings",
              icon:"ios-settings"
          },
      ]
  }

  
  render(){
      return (
          <View style={styles.container}>
              {/* <Image source={require("./assets/profile.jpg")} style={styles.profileImg}/> */}
              <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Janna Doe</Text>
              <Text style={{color:"gray",marginBottom:10}}>janna@doe.com</Text>
              <View style={styles.sidebarDivider}></View>
              <FlatList
                  style={{width:"100%",marginLeft:30}}
                  data={this.state.routes}
                  renderItem={({ item }) => <Item  item={item} navigate={this.props.navigation.navigate}/>}
                  keyExtractor={item => item.name}
              />
          </View>
      )
  }
}

const Drawer = createDrawerNavigator(
  {
    Home:{ screen: Home},
    Profile:{ screen: Profile},
    Settings:{ screen: Settings}

  },
  {
    initialRouteName: "Home",
    unmountInactiveRoutes: true,
    headerMode: "none",
    contentComponent: props => <Sidebar {...props} />
  }
)

const AppNavigator = createStackNavigator(
  {
    Drawer : {screen: Drawer},
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
    unmountInactiveRoutes: true
  }
)

const AppContainer = createAppContainer(AppNavigator);



export default class App extends React.Component {
  render(){

    return (
      <AppContainer />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop:40,
    alignItems:"center",
    flex:1

  },
  listItem:{
      height:60,
      alignItems:"center",
      flexDirection:"row",
  },
  title:{
      fontSize:18,
      marginLeft:20
  },
  header:{
    width:"100%",
    height:60,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20
  },
  profileImg:{
    width:80,
    height:80,
    borderRadius:40,
    marginTop:20
  },
  sidebarDivider:{
    height:1,
    width:"100%",
    backgroundColor:"lightgray",
    marginVertical:10
  }
});