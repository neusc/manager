import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection, Card } from './common'

class ListItem extends Component {
  onItemPress () {
    Actions.employeeEdit({ employee: this.props.employee.item })
  }

  render () {
    const { name } = this.props.employee.item
    return (
      <TouchableOpacity onPress={() => this.onItemPress()}>
        <Card>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </Card>
      </TouchableOpacity>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10
  }
}

export default ListItem
