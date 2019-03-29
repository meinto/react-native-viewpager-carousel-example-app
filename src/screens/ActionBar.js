import React, { PureComponent } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class ActionBar extends PureComponent {

  render() {
    return (
      <View>
        {this.props.nextButton && (
          <TouchableHighlight onPress={this.props.nextButtonPress}>
            <Text>Next</Text>
          </TouchableHighlight>
        )}
      </View>
    )
  }

}