/** @format */

import { Navigation } from 'react-native-navigation';
import { screens, registerComponents } from './src/config/screen.config'

registerComponents();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        // options: {
        //   topBar: {
        //     visible: false
        //   }
        // },
        children: [screens.ComponentList]
      }
    }
  });
});