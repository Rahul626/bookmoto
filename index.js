/**
 * @format
 */

import {AppRegistry} from 'react-native';

//import App from './App';

//main component
import App from './App';
//import Main from './screens/main/main';
import {name as appName} from './app.json';
 //import LocationA from './screens/maps/map';
// import Powerpass from './screens/powerpass/powerpass'
 //import Welcome from './screens/welcome/welcome';
 //import Login from './screens/login/login';
import Register from './screens/register/register';
import Preference from './screens/settings/preference';


AppRegistry.registerComponent(appName, () =>Register);
