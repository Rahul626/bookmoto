import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './screens/login/login';
import Register from './screens/register/register';

function Loginroute({ navigation }) {
  return (
    <View >
      <Login/>
      <Button title="regiser" onPress={() => navigation.navigate('Registerroute')} />
    </View>
  );
}

function Registerroute({ route, navigation }) {
  return (
    <View >
   <Register/>
   <Button title="login" onPress={() => navigation.navigate('Loginroute')} />
    </View>
  );
}
const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loginroute"screenOptions={{
         headerShown: false}}>
        <Stack.Screen name="Loginroute" component={Loginroute} />
        <Stack.Screen name="Registerroute" component={Registerroute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Routes;