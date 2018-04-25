import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import { Card, CardSection, Button, Confirm } from './common'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'

class EmployeeEdit extends Component {
  constructor (props) {
    super(props)
    this.state = { showModal: false }
  }

  componentWillMount () {
    // 使用雇员列表页面点击的雇员信息prop填充reducer
    _.map(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  onButtonPress () {
    const { name, phone, shift } = this.props
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }

  onTextPress () {
    const { phone, shift } = this.props
    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  render () {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.onTextPress()}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={() => this.props.employeeDelete({ uid: this.props.employee.uid })}
          onDecline={() => this.setState({ showModal: false })}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit)
