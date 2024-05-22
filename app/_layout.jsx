import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    // <>
    //   <Text>Header</Text>
    //   <Slot/>
    //   <Text>Footer</Text>
    // </>
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })