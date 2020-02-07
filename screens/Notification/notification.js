import React, { Component } from 'react';
import { StyleSheet, View, Text ,  SafeAreaView,
  TouchableOpacity,
  FlatList } from 'react-native';
import { ListItem, Left, Body, Right, Thumbnail, } from 'native-base';
 
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ride quick! , save big',
    message:"Use code 'pick50'  | TCA"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Skip Expence, use Rapido',
    message:"Use code 'pick100'  | TCA"
  },
];

function Item({ id, title,message,selected, onSelect  }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}>
          <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'data:image/jpeg;base64,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' }} />
              </Left>
              <Body>
              <Text>{title}</Text>            
      <Text>{message}</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
      </TouchableOpacity>
  )}


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

      <SafeAreaView  style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            message={item.message}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
      
    )  
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1
    
    },
    item: {
      backgroundColor: '#f9c2ff',
   
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  