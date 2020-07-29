// import React, {useState} from 'react';
// import {Modal, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
// import { THEME } from '../theme';

// export const EditModal = ({visible, onCancel, value, onSave}) => {
//   const [title, setTitle] =useState(value)
//   const saveHandler = () => {
//     if (title.trim().length < 3) {
//       Alert.alert('Error!', `The minimum name length is 3 characters. Now ${title.trim().length}`)
//     } else {
//       onSave(title)
//     }
//   }
//   return (
//     <Modal 
//       visible={visible} 
//       animationType="slide"
//     >
//       <View style={styles.wrap}>
//         <TextInput
//           value={title} 
//           onChangeText={setTitle}
//           style={styles.input} 
//           placeholder="Enter the title"
//           autoCorrect={false}
//           autoCapitalize="none"
//           maxLength={64}
//         />
//         <View style={styles.buttons}>
//         <Button 
//           title="Cancel" 
//           onPress={onCancel} 
//           color={THEME.DANGER_COLOR} 
//         />
//         <Button 
//           title="Save" 
//            onPress={saveHandler}
//         />
//           </View>
//       </View>
//     </Modal>
//   )
// }

// const styles = StyleSheet.create({
//   wrap: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   input: {
//     padding: 10,
//     borderBottomColor: THEME.MAIN_COLOR,
//     borderBottomWidth: 2,
//     width: '80%'
//   },
//   buttons: {
//     width: '100%',
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-around'
//   }
// })
