import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'
import { View, Text } from 'react-native'

class EmployeeList extends Component {
  componentWillMount () {
    this.props.employeesFetch()
  }

  render () {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
