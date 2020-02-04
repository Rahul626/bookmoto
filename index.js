/**
 * @format
 */

import {AppRegistry} from 'react-native';

//main component
import Main from './screens/Main/main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
