/** @format */

import { Navigation } from 'react-native-navigation';
import App from './App';
import ComponentList from './src/screens/ComponentList'
import {name as appName} from './app.json';

Navigation.registerComponent(`navigation.RootScreen`, () => App);
Navigation.registerComponent(`navigation.ComponentList`, () => ComponentList);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            visible: false
          }
        },
        children: [
          {
            component: {
              name: 'navigation.RootScreen'
            },
          }
        ]
      }
    }
  });
});