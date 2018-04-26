import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'
import { FlatList } from 'react-native'
import ListItem from './ListItem'

class EmployeeList extends Component {
  componentWillMount () {
    this.props.employeesFetch()
  }

  componentWillReceiveProps (newProps) {

  }

  renderItem (employee) {
    return <ListItem employee={employee} />
  }

  render () {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
      />
    )
  }
}

const mapStateToProps = (state) => {
  // 将键值对对象转化为数组
  // employees结构类似{uid: {name,phone,shift}}
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  })
  return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
