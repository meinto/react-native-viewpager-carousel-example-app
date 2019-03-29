import { Navigation } from 'react-native-navigation'

import ComponentList from '../screens/ComponentList'
import TabbedPager from '../screens/TabbedPager'
import ViewPager from '../screens/ViewPager'

export const registerComponents = () => {
  Navigation.registerComponent('navigation.ComponentList', () => ComponentList)
  Navigation.registerComponent('navigation.TabbedCarousel', () => TabbedPager)
  Navigation.registerComponent('navigation.BottomTabbedCarousel', () => TabbedPager)
  Navigation.registerComponent('navigation.TabbedPager', () => TabbedPager)
  Navigation.registerComponent('navigation.TabIndicatorColor', () => TabbedPager)
  Navigation.registerComponent('navigation.TabbedPagerInitialPageCount1', () => TabbedPager)
  Navigation.registerComponent('navigation.ViewPagerInitialPageCount1', () => ViewPager)
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
  TabIndicatorColor: {
    component: {
      options: {
        topBar: {
          title: {
            text: 'Tab Indicator Color',
          },
        },
      },
      id: 'navigation.TabIndicatorColor',
      name: 'navigation.TabIndicatorColor',
      passProps: {
        tabIndicatorColor: '#333',
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
  TabbedPagerInitialPageCount1: {
    component: {
      options: {
        topBar: {
          title: {
            text: 'Tabbed Pager (update pages to 5)',
          },
        },
      },
      id: 'navigation.TabbedPagerInitialPageCount1',
      name: 'navigation.TabbedPagerInitialPageCount1',
      passProps: {
        renderAsCarousel: false,
        initialPageCount: 1,
        actionBarActions: ['updatePages'],
      },
      isListElement: true,
    },
  },


  ViewPagerInitialPageCount1: {
    component: {
      options: {
        topBar: {
          title: {
            text: 'View Pager (update pages to 5)',
          },
        },
      },
      id: 'navigation.ViewPagerInitialPageCount1',
      name: 'navigation.ViewPagerInitialPageCount1',
      passProps: {
        renderAsCarousel: false,
        initialPageCount: 1,
        actionBarActions: ['updatePages'],
      },
      isListElement: true,
    },
  },
}