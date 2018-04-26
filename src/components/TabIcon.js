import React from 'react'
import { Image } from 'react-native'

const TabIcon = ({ title, focused }) => {
  let image = null
  switch (title) {
    case 'Chats':
      image = focused ? require('../images/chat-selected.png') : require('../images/chat.png')
      break
    case 'Contacts':
      image = focused ? require('../images/contact-selected.png') : require('../images/contact.png')
      break
    case 'Me':
      image = focused ? require('../images/me-selected.png') : require('../images/me.png')
      break
    default:
      break
  }

  return (
    <Image source={image} style={{ width: 30, height: 30 }} />
  )
}

export default TabIcon
