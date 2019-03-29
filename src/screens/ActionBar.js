import React, { PureComponent } from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

export default class ActionBar extends PureComponent {

  render() {
    return (
      <View>
        {this.props.nextButton && (
          <TouchableHighlight onPress={this.props.nextButtonPress}>
            <Text style={styles.btn}>Next</Text>
          </TouchableHighlight>
        )}

        {this.props.updatePages && (
          <TouchableHighlight onPress={this.props.updatePagesPress}>
            <Text style={styles.btn}>Update pages to 5</Text>
          </TouchableHighlight>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    textAlign: 'center',
  },
})