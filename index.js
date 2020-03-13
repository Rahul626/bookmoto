/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NativeModules} from 'react-native';

// import Welcome from './screens/welcome/welcome';
// import SearchBar from './screens/foot/searchbar';
// import Splash from './splash';
// import Main from './screens/main/main';
import Routes from './Routes';

AppRegistry.registerComponent(appName, () =>Routes);
