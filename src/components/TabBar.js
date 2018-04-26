import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

class TabBar extends Component {
  constructor (props) {
    super(props)
    this.data = {
      session: {
        title: '会话',
        icon: 'http://image-2.plusman.cn/app/im-client/message.png'
      },
      mobileDirectory: {
        title: '通讯录',
        icon: 'http://image-2.plusman.cn/app/im-client/contact.png'
      },
      my: {
        title: '我的',
        icon: 'http://image-2.plusman.cn/app/im-client/setting.png'
      }
    }
  }

  render () {
    let params = this.data[this.props.sceneKey]
    return (
      <View>
        <Image source={{ uri: params.icon }} style={{ width: 20, height: 20 }}></Image>
        <Text>{params.title}</Text>
      </View>
    )
  }
}

export default TabBar
