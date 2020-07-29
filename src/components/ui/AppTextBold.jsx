import React from 'react'
import {Text, StyleSheet} from 'react-native'

export const AppTextBold = props => <Text style={{...styles.dafult, ...props.style}}>{props.children}</Text>

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-bold'
  }
})
