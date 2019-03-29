import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import ExamplePage from './ExamplePage'
import ActionBar from './ActionBar'
import { TabbedPager } from 'react-native-viewpager-carousel'

export default class TabbedPagerExample extends PureComponent {

  static defaultProps = {
    initialPage: {},
    actionBarActions: [],
  }
  
  constructor(props) {
    super(props)

    this.state = {
      initialPage: this.props.initialPage,
    }

    this.dataSource = []

    for (let i = 1; i < 12; i++) {
      this.dataSource = [...this.dataSource, {
        index: i,
        title: 'Page ' + i,
      }]
    }
  }

  _renderTab = ({data, _pageIndex}) => (
    <TouchableHighlight
      key={'tb' + data.index}
      underlayColor={'#ccc'}
      onPress={() => {
        this.tabbarPager.scrollToIndex(_pageIndex)
      }}
    >
      <Text style={styles.text}>{data.title}</Text>
    </TouchableHighlight>
  )

  _renderPage = ({data}) => {
    return (
      <ExamplePage
        index={data.index}
        title={data.title}
      />
    )
  }

  render() {

    const actionBarProps = this.props.actionBarActions.map(action => ({
      [action]: true,
      [`${action}Press`]: this[`${action}Press`],
    }))
      .reduce((prev, curr) => {
        return {
          ...prev,
          ...curr,
        }
      }, {})

    return (
      <View style={styles.container}>
        <TabbedPager
          ref={tabbarPager => {
            this.tabbarPager = tabbarPager
          }}
          experimentalMirroring={false}
          data={this.dataSource}
          thresholdPages={2}
          renderTab={this._renderTab}
          renderPage={this._renderPage}
          lazyrender={true}
          lazyrenderThreshold={2}
          initialPage={this.state.initialPage}
          renderAsCarousel={this.props.renderAsCarousel}
          tabContainerPosition={this.props.tabContainerPosition}
          tabIndicatorColor={this.props.tabIndicatorColor}
        />
        {this.props.actionBarActions && (
          <ActionBar {...actionBarProps} />
        )}
      </View>
    )
  }

  nextButtonPress = () => {
    if (this.state.initialPage.index) {
      this.setState({
        initialPage: {index: this.state.initialPage.index + 1},
      })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    margin: 10,
    padding: 10,
  },
})