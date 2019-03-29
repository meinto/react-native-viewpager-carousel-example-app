import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import ExamplePage from './ExamplePage'
import ActionBar from './ActionBar'
import { ViewPager } from 'react-native-viewpager-carousel'

export default class ViewPagerExample extends PureComponent {

  static defaultProps = {
    initialPage: {},
    actionBarActions: [],
    initialPageCount: 12,
  }
  
  constructor(props) {
    super(props)

    this.state = {
      initialPage: this.props.initialPage,
      dataSource: this._generatePages(this.props.initialPageCount),
    }
  }

  _generatePages = count => {
    let dataSource = []

    for (let i = 1; i < (count + 1); i++) {
      dataSource = [...dataSource, {
        index: i,
        title: 'Page ' + i,
      }]
    }

    return dataSource
  }

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
    
    const { dataSource } = this.state

    return (
      <View style={styles.container}>
        <ViewPager
          ref={viewPager => {
            this.viewPager = viewPager
          }}
          containerStyle={{flex: 1}}
          experimentalMirroring={false}
          data={dataSource}
          thresholdPages={2}
          renderPage={this._renderPage}
          lazyrender={true}
          lazyrenderThreshold={2}
          initialPage={this.state.initialPage}
          renderAsCarousel={this.props.renderAsCarousel}
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

  updatePagesPress = () => {
    this.setState({
      dataSource: this._generatePages(5),
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})