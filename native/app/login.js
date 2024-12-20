import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';

const login = () => {
    const [text,setText]=useState('');

    
  return (
    <View>
      <TextInput 
      placeholder="Enter Email" 
      value={text}
      onChangeText={setText}></TextInput>
        <Link href="/betting" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default login

const styles = StyleSheet.create({})