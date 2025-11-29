import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import loginVerifyScreen from './loginVerifyScreen'

const loginEntryScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
          
          <View style={{margin:70}}>
          <Text style={{color:'white'}}>loginEntryScreen</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(loginVerifyScreen)}>
            <Text style={{color:"white"}}>Next</Text>
          </TouchableOpacity>
        
        </View></View>
  )
}

export default loginEntryScreen