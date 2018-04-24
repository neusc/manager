import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection } from './common'

class ListItem extends Component {
  onItemPress () {
    Actions.employeeEdit({ employee: this.props.employee.item })
  }

  render () {
    const { name } = this.props.employee.item
    return (
      <TouchableWithoutFeedback onPress={() => this.onItemPress()}>
        <View>o
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem
