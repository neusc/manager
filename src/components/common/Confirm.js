import React from 'react'
import { Text, View, Modal } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { cardSectionStyle, textStyle, containerStyle, sectionContainerStyle } = styles
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <View style={sectionContainerStyle}>
          <CardSection style={cardSectionStyle}>
            <Text style={textStyle}>{children}</Text>
          </CardSection>

          <CardSection>
            <Button onPress={onAccept}>Yes</Button>
            <Button onPress={onDecline}>No</Button>
          </CardSection>
        </View>
      </View>
    </Modal>
  )
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center'
  },
  sectionContainerStyle: {
    borderRadius: 5,
    overflow: 'hidden'
  }
}

export { Confirm }
