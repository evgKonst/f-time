import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const TimingScreen = () => {
  return <Text style={styles.timing}>Timing screen </Text>
}

const styles = StyleSheet.create({
  timing: {
    backgroundColor: 'gray',  
    flexDirection: 'row',
  }
})
