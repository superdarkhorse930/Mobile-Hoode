import React from 'react'
import { View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function WarningButton(props) {

  return (
    <View 
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.backColor,
        borderRadius: 12,
        width: 52,
        height: 48.45
      }}
    >
      <AntDesign name="warning" size={28.36} color={props.iconColor} />
    </View>
  )
}
