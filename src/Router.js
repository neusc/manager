import React, { Component } from 'react'
import { Scene, Router, Actions, Tabs, Stack } from 'react-native-router-flux'
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'
import { employeeReset } from './actions'
import TabBar from './components/TabBar'
import Chat from './components/Chat'
import Me from './components/Me'

class RouterComponent extends Component {
  onBackPress () {
    Actions.main()
    this.props.employeeReset()
  }

  render () {
    return (
      <Router sceneStyle={{ backgroundColor: '#fff' }}>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please Login" initial />
          </Scene>
          <Tabs key="tabBar">
            <Stack key="chat_stack" title="Chats">
              <Scene key="chat" component={Chat} />
            </Stack>
            <Stack key="contacts_stack" title="Contacts" hideNavBar>
              <Scene key="main">
                <Scene
                  rightTitle="Add"
                  onRight={() => Actions.employeeCreate()}
                  key="employeeList"
                  component={EmployeeList}
                  title="Contacts"
                  initial
                />
                <Scene
                  key="employeeCreate"
                  back
                  onBack={() => this.onBackPress()} // onBack事件处理函数必须在存在backTitle或back属性的情况下才能生效
                  component={EmployeeCreate}
                  title="Add Contacts"
                />
                <Scene
                  key="employeeEdit"
                  back
                  onBack={() => this.onBackPress()}
                  component={EmployeeEdit}
                  title="Edit Contacts"
                />
              </Scene>
            </Stack>
            <Stack key="me_stack" title="Me">
              <Scene key="me" component={Me} />
            </Stack>
          </Tabs>
        </Scene>
      </Router>
    )
  }

}

export default connect(null, { employeeReset })(RouterComponent)
