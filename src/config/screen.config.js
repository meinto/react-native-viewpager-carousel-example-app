import { Navigation } from 'react-native-navigation';

import ComponentList from '../screens/ComponentList'
import TabbedCarousel from '../screens/TabbedCarousel'

export const registerComponents = () => {
  Navigation.registerComponent(`navigation.ComponentList`, () => ComponentList);
  Navigation.registerComponent(`navigation.TabbedCarousel`, () => TabbedCarousel);
}

export const screens = {
  ComponentList: {
    component: {
      options: {
        topBar: {
          title: {
            text: 'Component List'
          }
        }
      },
      name: 'navigation.ComponentList',
    }
  },
  TabbedCarousel: {
    component: {
      options: {
        topBar: {
          title: {
            text: 'Tabbed Carousel'
          }
        }
      },
      name: 'navigation.TabbedCarousel',
      isListElement: true,
    }
  }
}