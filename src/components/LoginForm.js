import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
  OnEmailChange (text) {
    this.props.emailChanged(text)
  }

  onPasswordChange (text) {
    this.props.passwordChanged(text)
  }

  onButtonPress () {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={(text) => this.OnEmailChange(text)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={(text) => this.onPasswordChange(text)}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

// 将reducer生成的新state作为props传入组件
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm)
