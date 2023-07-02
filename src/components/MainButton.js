import React from 'react'
import { Text, TouchableOpacity  } from 'react-native'

export default function MainButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}
      style={{
        borderRadius: 90,
        backgroundColor: props.bgColor,
        width: '100%',
        alignItems: 'center',
        padding: 17
      }}
    >
      <Text style={{
        fontSize: 16,
        fontWeight: 600,
        color: props.fontColor
      }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}
