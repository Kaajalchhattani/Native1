import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const betting = () => {
    const[like1,setlike1]=useState(0);
    const[like2,setlike2]=useState(0);
   

  return (
   
    <View style={styles.view}>
      <Text>Place your Bet</Text>
      <View>
        <TouchableOpacity onPress={()=>setlike1((prevlike1)=>prevlike1+1)}><Text>Like1{like1}</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>setlike2((prevlike2)=>prevlike2+1)}><Text>Like2{like2}</Text></TouchableOpacity>

      </View>
    </View>
  )
}

export default betting

const styles = StyleSheet.create({
    view:{
        flex:1,
        padding: 20, 
        justifyContent: "center",
        
    },

})