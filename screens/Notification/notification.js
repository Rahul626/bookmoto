import React, { Component } from 'react';
import {
  StyleSheet, View, Text, SafeAreaView,
  TouchableOpacity,ScrollView,
  FlatList
} from 'react-native';
import { ListItem, Left, Body, Right, Thumbnail,Header } from 'native-base';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28a',
    title: 'Ride quick! , save big',
    message: "Use code 'pick50'  | TCA",
    time:"3:45pm"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa9763',
    title: 'Skip Expence, use Rapido',
    message: "Use code 'pick100'  | TCA",
    time:"2:45pm"
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb28ba',
    title: 'Ride quick! , save big',
    message: "Use code 'pick50'  | TCA",
    time:"1:40pm"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Skip Expence, use Rapido',
    message: "Use code 'pick100'  | TCA",
    time:"12:45pm"
  },
  {
    id: 'bd7acbea--46c2-aed5-3ad53abb28ba',
    title: 'Ride quick! , save big',
    message: "Use code 'pick50'  | TCA",
    time:"11:45pm"
  },
  {
    id: '3ac68afc-c60-48d3-a4f8-fbd91aa97f63',
    title: 'Skip Expence, use Rapido',
    message: "Use code 'pick100'  | TCA",
    time:"3:45pm"
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ride quick! , save big',
    message: "Use code 'pick50'  | TCA",
    time:"11:25pm"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Skip Expence, use Rapido',
    message: "Use code 'pick100'  | TCA",
    time:"11:45pm"
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ride quick! , save big',
    message: "Use code 'pick40'  | TCA",
    time:"8:45pm"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa7f63',
    title: 'Skip Expence, use Rapido',
    message: "Use code 'pick10'  | TCA",
    time:"3:45pm"
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab28ba',
    title: 'Ride quick! , save big',
    message: "Use code 'pick20'  | TCA", 
    time:"9:45pm"
  },
  {
    id: '3ac68afc-c05-48d3-a4f8-fbd91aa97f63',
    title: 'Skip Expence, use Rapido',
    message: "Use code 'pick100'  | TCA",
    time:"11:45pm"
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3adabb28ba',
    title: 'Ride quick! , save big',
    message: "Use code 'pick50'  | TCA",
    time:"6:45pm"
  },
  {
    id: '3ac68afc-c605-48d-a4f8-fbd91aa97f63',
    title: 'Skip Expence, use Rapido',
    message: "Use code 'pick100'  | TCA",
    time:"5:45pm"
  },
];

function Item({ id, title, message, time,selected, onSelect }) {
  return (
    <TouchableOpacity  key={id}
      onPress={() => onSelect(id)}>
      <ListItem avatar>
        <Left>
          <Thumbnail style={{ width: 40, height: 40}} source={require('../../assets/images/logo.png')} />
        </Left>
        <Body>
          <Text>{title}</Text>
          <Text>{message}</Text>
        </Body>
        <Right>
          <Text note>{time}</Text>
        </Right>
      </ListItem>
    </TouchableOpacity>
  )
}


export default function Notification() {

  const [selected, setSelected] = React.useState(new Map());
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );


  return (
    <ScrollView >  

    <SafeAreaView style={styles.container}>
      <Header style={styles.HeaderInsideTextStyle} >


        <Text style={styles.HeaderInsideTextStyle}>Notification</Text>
      </Header>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
          key={item.id}
            id={item.id}
            title={item.title}
            message={item.message}
            time={item.time}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
    </ScrollView>  

  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
   

  },
  item: {
    backgroundColor: '#f9c2ff',

    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  HeaderInsideTextStyle:
  {
    color: 'black',
    fontSize: 25,
  justifyContent: 'center',
  textAlign:'center',
  backgroundColor:'#F9D815'

  },
});
