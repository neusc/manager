import React, { Component } from 'react'
import { Scene, Router, Actions, Tabs, Stack } from 'react-native-router-flux'
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'
import { employeeReset } from './actions'
import TabIcon from './components/TabIcon'
import Chat from './components/Chat'
import Me from './components/Me'

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
          <Tabs key="tabBar" tabBarStyle={styles.tabBarStyle}>
            <Stack key="chat_stack" title="Chats" icon={TabIcon} initial>
              <Scene key="chat" component={Chat} />
            </Stack>
            <Stack key="contacts_stack" title="Contacts" hideNavBar icon={TabIcon}>
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
            <Stack key="me_stack" title="Me" icon={TabIcon}>
              <Scene key="me" title="Me" component={Me} initial />
            </Stack>
          </Tabs>
        </Scene>
      </Router>
    )
  }
}

const styles = {
  tabBarStyle: {
    backgroundColor: 'white'
  }
}

export default connect(null, { employeeReset })(RouterComponent)
