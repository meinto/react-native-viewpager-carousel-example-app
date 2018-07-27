import { Navigation } from 'react-native-navigation'
import React, { PureComponent } from 'react'
import { FlatList, TouchableHighlight, Text } from 'react-native'
import { screens } from '../config/screen.config'
import styled from 'styled-components/native'

const Row = styled.View`
  padding: 20px;
`

export default class ComponentList extends PureComponent {
  
  constructor(props) {
    super(props)
    this.screens = Object.keys(screens)
      .filter(screenKey => {
        const screen = screens[screenKey]
        return screen.component.isListElement
      })
      .map(screenKey => {
        return screens[screenKey]
      })
  }
  

  renderItem = ({ item }) => {
    return (
      <TouchableHighlight
        onPress={() => Navigation.push(this.props.componentId, item)}
      >
        <Row>
          <Text>{item.component.options.topBar.title.text}</Text>
        </Row>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <FlatList
        data={this.screens}
        keyExtractor={item => this.props.componentId}
        renderItem={this.renderItem}
      />
    )
  }
}