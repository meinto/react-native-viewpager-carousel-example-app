import { Navigation } from 'react-native-navigation'

import ComponentList from '../screens/ComponentList'
import TabbedPager from '../screens/TabbedPager'

export const registerComponents = () => {
  Navigation.registerComponent('navigation.ComponentList', () => ComponentList)
  Navigation.registerComponent('navigation.TabbedCarousel', () => TabbedPager)
  Navigation.registerComponent('navigation.BottomTabbedCarousel', () => TabbedPager)
  Navigation.registerComponent('navigation.TabbedPager', () => TabbedPager)
}

export const screens = {
  ComponentList: {
    component: {
      options: {
        topBar: {
          title: {
            text: 'Component List',
          },
        },
      },
      id: 'navigation.ComponentList',
      name: 'navigation.ComponentList',
    },
  },
  TabbedCarousel: {
    component: {
      options: {
        topBar: {
          title: {
            text: 'Tabbed Carousel',
          },
        },
      },
      id: 'navigation.TabbedCarousel',
      name: 'navigation.TabbedCarousel',
      isListElement: true,
    },
  },
  BottomTabbedCarousel: {
    component: {
      options: {
        topBar: {
          title: {
            text: 'Bottom Tabbed Carousel',
          },
        },
      },
      id: 'navigation.BottomTabbedCarousel',
      name: 'navigation.BottomTabbedCarousel',
      passProps: {
        tabContainerPosition: 'bottom',
      },
      isListElement: true,
    },
  },
  TabbedPager: {
    component: {
      options: {
        topBar: {
          title: {
            text: 'Tabbed Pager',
          },
        },
      },
      id: 'navigation.TabbedPager',
      name: 'navigation.TabbedPager',
      passProps: {
        renderAsCarousel: false,
      },
      isListElement: true,
    },
  },
}