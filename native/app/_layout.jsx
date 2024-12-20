import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'

const Layout = () => {
  return (
    <Stack
    screenOptions={{
      headerStyle: { backgroundColor: '#6200EE' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
   </Stack>
  )
}

export default Layout

const styles = StyleSheet.create({})