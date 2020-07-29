import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const Today = () => {
  
  const [date, setDate] = useState(new Date())
  setInterval(() => {setDate(new Date())}, 1000)
  return (
    <View style={styles.time_container}>
      <Text>
        {date.toDateString()}
      </Text>
      <Text style={styles.time}>
      {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
time: {
  fontSize: 40
},
time_container: {
  marginBottom: 30,
  marginTop: 20,
  borderRadius: 5
}
})
