import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'
import { employeeUpdate } from '../actions/EmployeeActions'

class EmployeeCreate extends Component {
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jake"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="13998149926"
          />
        </CardSection>
        <CardSection>
        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default connect(null, { employeeUpdate })(EmployeeCreate)
