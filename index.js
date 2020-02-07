/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';

//main component
//import Main from './screens/Main/main';
import {name as appName} from './app.json';
import LocationA from './screens/maps/map'

AppRegistry.registerComponent(appName, () =>LocationA);
