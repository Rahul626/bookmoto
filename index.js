/**
 * @format
 */

import {AppRegistry} from 'react-native';

//main component
import App from './App';
//import Main from './screens/main/main';
import {name as appName} from './app.json';
 //import LocationA from './screens/maps/map';
 //import Powerpass from './screens/powerpass/powerpass'
//import Welcome from './screens/welcome/welcome';
 //import Login from './screens/login/login';

//import Forgot from './screens/login/forgot';
import Router from './router';

//import Powerpass from './screens/powerpass/powerpass'

AppRegistry.registerComponent(appName, () =>App);
