/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NativeModules} from 'react-native';

import Welcome from './screens/welcome/welcome';

import Splash from './splash'

AppRegistry.registerComponent(appName, () =>Splash);
