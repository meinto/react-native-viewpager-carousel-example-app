import { Navigation } from 'react-native-navigation'
import React, { PureComponent } from 'react'
import { FlatList, TouchableHighlight, Text } from 'react-native'
import { screens } from '../config/screen.config'
import styled from 'styled-components/native'

const Row = styled.View`
  padding: 20px;
`

const Hint = styled.Text`
  color: #aaa;
`

export default class ComponentList extends PureComponent {
  
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
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
    const passedProps = item.component.passProps ? item.component.passProps : []
    return (
      <TouchableHighlight
        underlayColor={'#ccc'}
        onPress={() => Navigation.push(this.props.componentId, item)}
      >
        <Row>
          <Text>{item.component.options.topBar.title.text}</Text>
          {Object.keys(passedProps).map(key => {
            return (
              <Hint key={this.props.componentId + key}>
                {key}:{'' + passedProps[key]}
              </Hint>
            )
          })}
        </Row>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <FlatList
        data={this.screens}
        keyExtractor={item => item.component.id}
        renderItem={this.renderItem}
      />
    )
  }
}