import React, { View, Text } from 'react'
import { StyleSheet } from 'react-native'

export const Progress = ({ bgcolor, completed }) => {
  return (
    <View style={styles.containerStyles}>
      <View style={styles.fillerStyles}>
        <Text style={styles.labelStyles}>{`${completed}%`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyles: {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  },
  fillerStyles: {
    height: '100%',
    width: '50%'  ,
    backgroundColor: '#ee3',
    borderRadius: 'inherit',
    textAlign: 'right'
  },
  labelStyles: {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
})
