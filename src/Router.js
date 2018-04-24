import React, { Component } from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'
import { employeeReset } from './actions'

class RouterComponent extends Component {
  onBackPress () {
    Actions.pop()
    this.props.employeeReset()
  }

  render () {
    return (
      <Router sceneStyle={{ backgroundColor: '#fff' }}>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please Login" initial />
          </Scene>
          <Scene key="main">
            <Scene
              rightTitle="Add"
              onRight={() => Actions.employeeCreate()}
              key="employeeList"
              component={EmployeeList}
              title="employee"
              initial
            />
            <Scene
              key="employeeCreate"
              backTitle="employee"
              onBack={() => this.onBackPress()}
              component={EmployeeCreate}
              title="Create Employee"
            />
            <Scene
              key="employeeEdit"
              backTitle="employee"
              onBack={() => this.onBackPress()}
              component={EmployeeEdit}
              title="Edit Employee"
            />
          </Scene>
        </Scene>
      </Router>
    )
  }

}

export default connect(null, { employeeReset })(RouterComponent)
